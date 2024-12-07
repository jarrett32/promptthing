"use client";
import { useState, useEffect, type ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import * as LucideIcons from "lucide-react";
import { Input } from "~/components/ui/input";
import { TextIcon, ClipboardCopy, AlertTriangle } from "lucide-react";
import { Textarea } from "~/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { prompts } from "~/server/prompts";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Badge } from "~/components/ui/badge";

export type PromptData = {
  summary: string;
  prompt: string;
  icon: keyof typeof LucideIcons;
  category: string;
  variables: string[]; // prompt-defined variables
  recommendedModel?: string;
};

type VarData = {
  id: string;
  key: string;
  value: string;
};

const categories = Array.from(new Set(prompts.map((p) => p.category)));

export default function PromptTool() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Load customVars from localStorage, which might be array or old object format
  const [customVarsRaw, setCustomVarsRaw] = useLocalStorage<
    VarData[] | Record<string, string>
  >("customVars", []);

  const [customVars, setCustomVars] = useState<VarData[]>([]);
  const [promptVars, setPromptVars] = useState<VarData[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);
  const [fullPrompt, setFullPrompt] = useState<string>("");

  const [newCustomKey, setNewCustomKey] = useState<string>("");
  const [newCustomValue, setNewCustomValue] = useState<string>("");

  // Run once to convert old format if needed
  useEffect(() => {
    if (Array.isArray(customVarsRaw)) {
      setCustomVars(customVarsRaw);
    } else {
      // convert from { key: value } to VarData[]
      const arr: VarData[] = Object.entries(customVarsRaw).map(([k, v]) => ({
        id: crypto.randomUUID(),
        key: k,
        value: v,
      }));
      setCustomVars(arr);
    }
    // We do not put customVarsRaw in dependencies to avoid loops
    // This runs only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save customVars whenever they change
  useEffect(() => {
    setCustomVarsRaw(customVars);
  }, [customVars, setCustomVarsRaw]);

  const filteredPrompts = prompts.filter(
    (prompt) =>
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) &&
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

    // Filter out any vars not in prompt.variables
    const filteredVars = Array.from(promptVarsMap.values()).filter((pv) =>
      prompt.variables.includes(pv.key),
    );

    setPromptVars(filteredVars);
  };

  // Save promptVars whenever they change
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
        return match; // leave the placeholder as is
      }
    });

    return { text, hasMissingVars };
  };

  const { text: previewText, hasMissingVars } = getPreviewText();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(previewText);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  // Check uniqueness of keys among all variables
  const isKeyUnique = (key: string, excludeId?: string): boolean => {
    const allVars = [...promptVars, ...customVars];
    return !allVars.some((v) => v.key === key && v.id !== excludeId);
  };

  const updatePromptVar = (
    id: string,
    field: "key" | "value",
    value: string,
  ) => {
    setPromptVars((prev) =>
      prev.map((pv) => {
        if (pv.id === id) {
          if (field === "key") {
            // Check uniqueness
            if (!isKeyUnique(value, id)) {
              console.warn("Key not unique, ignoring update.");
              return pv; // don't update if not unique
            }
          }
          return { ...pv, [field]: value };
        }
        return pv;
      }),
    );
  };

  const updateCustomVar = (
    id: string,
    field: "key" | "value",
    value: string,
  ) => {
    setCustomVars((prev) =>
      prev.map((cv) => {
        if (cv.id === id) {
          if (field === "key") {
            // Check uniqueness
            if (!isKeyUnique(value, id)) {
              console.warn("Key not unique, ignoring update.");
              return cv; // don't update if not unique
            }
          }
          return { ...cv, [field]: value };
        }
        return cv;
      }),
    );
  };

  const handleAddCustomVar = () => {
    const key = newCustomKey.trim();
    if (!key) return;

    if (!isKeyUnique(key)) {
      console.warn("Key not unique, cannot add.");
      return;
    }

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

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="p-6">
        <h1 className="mb-2 text-3xl font-bold">Prompt Thing</h1>
        <h2 className="text-purple-200">
          Quick Prompts, Chosen by the Community
        </h2>
      </header>
      <main className="p-6">
        <div className="space-y-8">
          <Tabs defaultValue="prompt" className="w-full rounded-md bg-gray-800">
            <TabsList className="rounded-t-md bg-gray-700 p-1">
              <TabsTrigger value="prompt">Prompt</TabsTrigger>
              <TabsTrigger value="variables">Variables</TabsTrigger>
              <TabsTrigger
                value="history"
                disabled
                className="opacity-40 hover:bg-gray-700"
              >
                History (Coming Soon)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="prompt" className="p-4">
              <div className="space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <h2 className="text-2xl text-purple-300">Full Prompt</h2>
                  {selectedPrompt?.recommendedModel && (
                    <Badge className="mt-1 bg-purple-600 hover:bg-purple-500">
                      {selectedPrompt.recommendedModel}
                    </Badge>
                  )}
                </div>
                <Textarea
                  value={fullPrompt}
                  onChange={handlePromptChange}
                  className="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-purple-300 placeholder:text-gray-400 focus-visible:ring-0"
                  placeholder="Select a base prompt or write your own..."
                />
                {fullPrompt && (
                  <div className="group relative mt-4 cursor-pointer rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-700/50">
                    <div className="flex items-center space-x-2">
                      <p className="flex-1 text-sm text-purple-200">
                        {previewText}
                      </p>
                      {hasMissingVars && (
                        <AlertTriangle className="text-yellow-400" size={20} />
                      )}
                    </div>
                    <div
                      className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={copyToClipboard}
                    >
                      <ClipboardCopy
                        className="text-purple-300 hover:text-purple-400"
                        size={20}
                      />
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="variables" className="p-4">
              <div className="space-y-4">
                <h2 className="text-2xl text-purple-300">Variables</h2>
                <p className="text-sm text-gray-400">
                  Inject common variables into your prompts.
                </p>
                {/* Custom Vars */}
                <div>
                  <h3 className="mb-2 text-purple-300">Custom Vars</h3>
                  {customVars.map((cv) => (
                    <div key={cv.id} className="flex items-center space-x-2">
                      <Input
                        className="w-2/5 bg-gray-700 text-purple-300"
                        value={cv.key}
                        placeholder="Custom Var Name"
                        onChange={(e) =>
                          updateCustomVar(cv.id, "key", e.target.value)
                        }
                      />
                      <Input
                        className="w-3/5 bg-gray-700 text-purple-300"
                        value={cv.value}
                        placeholder="Custom Var Value"
                        onChange={(e) =>
                          updateCustomVar(cv.id, "value", e.target.value)
                        }
                      />
                    </div>
                  ))}
                  <div className="mt-2 flex flex-col items-end sm:flex-row sm:space-x-2">
                    <Input
                      placeholder="Custom Key"
                      value={newCustomKey}
                      onChange={(e) => setNewCustomKey(e.target.value)}
                      className="w-full bg-gray-700 text-purple-300 sm:w-1/3"
                    />
                    <Input
                      placeholder="Custom Value"
                      value={newCustomValue}
                      onChange={(e) => setNewCustomValue(e.target.value)}
                      className="w-full bg-gray-700 text-purple-300 sm:w-1/3"
                    />
                    <button
                      onClick={handleAddCustomVar}
                      className="mt-2 rounded bg-purple-600 px-3 py-1 text-white hover:bg-purple-500 sm:mt-0"
                    >
                      Add New Variable
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mx-auto mb-8 max-w-3xl space-y-4">
            <Input
              type="search"
              placeholder="Search prompts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md border-purple-500 bg-gray-800 p-2 text-white focus:border-purple-300"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category,
                    )
                  }
                  className={`rounded-full px-3 py-1 text-sm ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {categories.map((category) => {
            const categoryPrompts = filteredPrompts.filter(
              (p) => p.category === category,
            );
            if (categoryPrompts.length === 0) return null;
            return (
              <Card key={category} className="border-purple-500 bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {categoryPrompts.map((prompt, index) => {
                      const Icon =
                        (LucideIcons[
                          prompt.icon
                        ] as React.ComponentType<LucideIcons.LucideProps>) ||
                        (() => (
                          <TextIcon className="text-purple-300" size={20} />
                        ));
                      return (
                        <TooltipProvider key={index} delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => handleSelectPrompt(prompt)}
                                className="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-gray-700 transition-colors duration-200 hover:bg-gray-600"
                              >
                                {Icon ? (
                                  <Icon className="text-purple-300" size={20} />
                                ) : null}
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-md rounded-md bg-gray-900 p-4 text-white shadow-lg">
                              <p className="text-sm">{prompt.summary}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
