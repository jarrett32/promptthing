"use client";
import React, { useState, useEffect, type ChangeEvent } from "react";
// import * as LucideIcons from "lucide-react";
import PromptFilter from "./components/PromptFilter";
import PromptCategories from "./components/PromptCategories";
import { type PromptData, type VarData } from "~/server/types";
import { prompts } from "~/server/prompts";
import PromptTabs from "./components/PromptTabs";

export default function PromptTool() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  const categories = Array.from(new Set(prompts.map((p) => p.category)));

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [customVarsRaw, setCustomVarsRaw] = useState<
    VarData[] | Record<string, string>
  >([]);
  const [customVars, setCustomVars] = useState<VarData[]>([]);
  const [promptVars, setPromptVars] = useState<VarData[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);
  const [fullPrompt, setFullPrompt] = useState<string>("");

  const [newCustomKey, setNewCustomKey] = useState<string>("");
  const [newCustomValue, setNewCustomValue] = useState<string>("");

  useEffect(() => {
    if (Array.isArray(customVarsRaw)) {
      setCustomVars(customVarsRaw);
    } else {
      const arr: VarData[] = Object.entries(customVarsRaw).map(([k, v]) => ({
        id: crypto.randomUUID(),
        key: k,
        value: v,
      }));
      setCustomVars(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCustomVarsRaw(customVars);
  }, [customVars, setCustomVarsRaw]);

  const filteredPrompts = prompts.filter(
    (prompt: PromptData) =>
      prompt?.prompt?.toLowerCase()?.includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || prompt.category === selectedCategory),
  );

  const handleSelectPrompt = (prompt: PromptData) => {
    setSelectedPrompt(prompt);
    setFullPrompt(prompt.prompt);

    const promptKey = `promptVars_${prompt.prompt}`;
    const saved = localStorage.getItem(promptKey);
    let loadedVars: VarData[] = [];
    if (saved) {
      try {
        loadedVars = JSON.parse(saved) as VarData[];
      } catch {
        loadedVars = [];
      }
    }

    const promptVarsMap = new Map(loadedVars.map((pv) => [pv.key, pv]));
    prompt.variables.forEach((v) => {
      if (!promptVarsMap.has(v)) {
        promptVarsMap.set(v, {
          id: crypto.randomUUID(),
          key: v,
          value: "",
        });
      }
    });

    const filteredVars = Array.from(promptVarsMap.values()).filter((pv) =>
      prompt.variables.includes(pv.key),
    );

    setPromptVars(filteredVars);
  };

  useEffect(() => {
    if (selectedPrompt) {
      const promptKey = `promptVars_${selectedPrompt.prompt}`;
      localStorage.setItem(promptKey, JSON.stringify(promptVars));
    }
  }, [promptVars, selectedPrompt]);

  const getCombinedVars = (): Record<string, string> => {
    const combined: Record<string, string> = {};
    for (const pv of promptVars) {
      if (pv.key.trim() !== "") {
        combined[pv.key] = pv.value;
      }
    }
    for (const cv of customVars) {
      if (cv.key.trim() !== "") {
        combined[cv.key] = cv.value;
      }
    }
    return combined;
  };

  const getPreviewText = (): { text: string; hasMissingVars: boolean } => {
    const combinedVars = getCombinedVars();
    let text = fullPrompt;

    const varRegex = /\$\{\{([^}]+)\}\}/g;
    let hasMissingVars = false;

    text = text.replace(varRegex, (match: string, p1: string) => {
      if (combinedVars[p1] !== undefined) {
        return combinedVars[p1];
      } else {
        hasMissingVars = true;
        return match;
      }
    });

    return { text, hasMissingVars };
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getPreviewText().text);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  const updateCustomVar = (
    id: string,
    field: "key" | "value",
    value: string,
  ) => {
    setCustomVars((prev) =>
      prev.map((cv) => {
        if (cv.id === id) {
          return { ...cv, [field]: value };
        }
        return cv;
      }),
    );
  };

  const handleAddCustomVar = () => {
    const key = newCustomKey.trim();
    if (!key) return;

    setCustomVars((prev) => [
      ...prev,
      { id: crypto.randomUUID(), key, value: newCustomValue },
    ]);
    setNewCustomKey("");
    setNewCustomValue("");
  };

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const allowedPattern = /[^a-zA-Z0-9\s\{\}\$]/g;
    const cleanedValue = e.target.value.replace(allowedPattern, "");
    setFullPrompt(cleanedValue);
  };

  const { text: previewText, hasMissingVars } = getPreviewText();

  return (
    <div className="space-y-8">
      <PromptTabs
        fullPrompt={fullPrompt}
        onPromptChange={handlePromptChange}
        previewText={previewText}
        hasMissingVars={hasMissingVars}
        onCopyToClipboard={copyToClipboard}
        selectedPrompt={selectedPrompt}
        customVars={customVars}
        updateCustomVar={updateCustomVar}
        newCustomKey={newCustomKey}
        newCustomValue={newCustomValue}
        setNewCustomKey={setNewCustomKey}
        setNewCustomValue={setNewCustomValue}
        handleAddCustomVar={handleAddCustomVar}
      />

      <div className="mx-auto max-w-3xl space-y-4">
        <PromptFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <PromptCategories
        categories={categories}
        filteredPrompts={filteredPrompts}
        handleSelectPrompt={handleSelectPrompt}
      />
    </div>
  );
}
