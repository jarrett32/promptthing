"use client";
import React, { useState, useEffect, type ChangeEvent } from "react";
// import * as LucideIcons from "lucide-react";
import PromptFilter from "./components/PromptFilter";
import PromptCategories from "./components/PromptCategories";
import { type PromptData, type VarData } from "~/server/types";
import { prompts } from "~/server/prompts";
import PromptTabs from "./components/PromptTabs";
import { useToast } from "~/hooks/use-toast";
import Fuse from "fuse.js";

export default function PromptTool() {
  const categories = Array.from(new Set(prompts.map((p) => p.category)));
  const { toast } = useToast();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [noFilter, setNoFilter] = useState<boolean>(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [customVarsRaw, setCustomVarsRaw] = useState<
    VarData[] | Record<string, string>
  >([]);
  const [customVars, setCustomVars] = useState<VarData[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);
  const [fullPrompt, setFullPrompt] = useState<string>("");

  const [newCustomKey, setNewCustomKey] = useState<string>("");
  const [newCustomValue, setNewCustomValue] = useState<string>("");

  const fuseOptions = {
    keys: ["prompt"],
    threshold: 0.6,
    includeScore: true,
  };
  const fuse = new Fuse(prompts, fuseOptions);

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

  const filteredPrompts = React.useMemo(() => {
    if (noFilter) return prompts;

    // First apply Fuse search if there's a search term
    let results = searchTerm
      ? fuse.search(searchTerm).map((result) => result.item)
      : prompts;

    // Then filter by categories if any are selected
    if (selectedCategories.length > 0) {
      results = results.filter((prompt) =>
        selectedCategories.includes(prompt.category),
      );
    }

    return results;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedCategories, noFilter]);

  // const filteredPrompts = prompts.filter((prompt: PromptData) => {
  //   if (noFilter) return true;

  //   const promptText = prompt.prompt?.toLowerCase() || "";
  //   if (!promptText) return false;

  //   // Build a regex pattern that allows for any number of
  //   // characters (including spaces) between each character of searchTerm
  //   const regexPattern =
  //     searchTerm
  //       .toLowerCase()
  //       .split("")
  //       .map((char) => `.*${char}`)
  //       .join("") + ".*";

  //   const subsequenceRegex = new RegExp(regexPattern, "i");

  //   const matchesSearch = subsequenceRegex.test(promptText);

  //   if (!matchesSearch) return false;

  //   if (
  //     selectedCategories.length > 0 &&
  //     !selectedCategories.includes(prompt.category)
  //   ) {
  //     return false;
  //   }

  //   return true;
  // });

  const handleSelectPrompt = (prompt: PromptData) => {
    setSelectedPrompt(prompt);
    setFullPrompt(prompt.prompt);

    setCustomVars((prev) => [
      ...prev.filter((cv) => prompt.variables.includes(cv.key)),
      ...prompt.variables
        .map((v) => ({
          id: crypto.randomUUID(),
          key: v,
          value: localStorage.getItem(v) ?? "",
        }))
        .filter((cv) => !prev.some((p) => p.key === cv.key)),
    ]);
  };

  const getPreviewText = (): { text: string; hasMissingVars: boolean } => {
    let text = fullPrompt;
    const varRegex = /\$\{\{([^}]+)\}\}/g;
    let hasMissingVars = false;

    text = text.replace(varRegex, (match: string, p1: string) => {
      const foundVar = customVars.find((cv) => cv.key === p1.trim());
      if (foundVar) {
        return foundVar.value;
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
      toast({
        variant: "default",
        title: "Copied to clipboard!",
        className: "dark",
      });
    } catch (error) {
      console.log(error);
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
          return { ...cv, [field.toLocaleLowerCase()]: value };
        }
        return cv;
      }),
    );

    if (field === "key") {
      localStorage.setItem(
        value,
        customVars.find((cv) => cv.id === id)?.value ?? "",
      );
    } else {
      localStorage.setItem(
        customVars.find((cv) => cv.id === id)?.key ?? "",
        value,
      );
    }
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
    localStorage.setItem(key, newCustomValue);
  };

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const allowedPattern = /[^a-zA-Z0-9\s\{\}\$]/g;
    const cleanedValue = e.target.value.replace(allowedPattern, "");
    setFullPrompt(cleanedValue);

    if (cleanedValue.length > 0) {
      const searchPattern = cleanedValue
        .split(/\s+/)
        .filter(Boolean)
        .map((term) => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join(".*");

      setSearchTerm(new RegExp(searchPattern, "i").source);
    } else {
      setSearchTerm("");
    }
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

      <div className="space-y-4">
        <PromptFilter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          noFilter={noFilter}
          setNoFilter={setNoFilter}
        />
      </div>

      <PromptCategories
        categories={categories}
        searchTerm={searchTerm}
        filteredPrompts={filteredPrompts}
        handleSelectPrompt={handleSelectPrompt}
      />
    </div>
  );
}
