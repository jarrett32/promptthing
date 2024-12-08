"use client";
import React, { type Dispatch, type SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { type PromptData, type VarData } from "~/server/types";
import PromptSection from "./PromptSection";
import VariablesSection from "./VariablesSection";

interface PromptTabsProps {
  fullPrompt: string;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  previewText: string;
  hasMissingVars: boolean;
  onCopyToClipboard: () => void;
  selectedPrompt: PromptData | null;
  customVars: VarData[];
  updateCustomVar: (id: string, field: "key" | "value", value: string) => void;
  newCustomKey: string;
  newCustomValue: string;
  setNewCustomKey: Dispatch<SetStateAction<string>>;
  setNewCustomValue: Dispatch<SetStateAction<string>>;
  handleAddCustomVar: () => void;
}

export default function PromptTabs(props: PromptTabsProps) {
  const {
    fullPrompt,
    onPromptChange,
    previewText,
    hasMissingVars,
    onCopyToClipboard,
    selectedPrompt,
    customVars,
    updateCustomVar,
    newCustomKey,
    newCustomValue,
    setNewCustomKey,
    setNewCustomValue,
    handleAddCustomVar,
  } = props;

  return (
    <div className="space-y-8">
      <Tabs
        defaultValue="prompt"
        className="w-full rounded-lg bg-gray-800 shadow-lg transition-all duration-300 ease-in-out"
      >
        <TabsList className="flex space-x-1 rounded-t-lg bg-gray-700 p-1">
          <TabsTrigger
            value="prompt"
            className="flex-1 rounded-md py-2 text-sm font-medium transition-all duration-200 ease-in-out data-[state=active]:bg-gray-600 data-[state=active]:text-white"
          >
            Prompt
          </TabsTrigger>
          <TabsTrigger
            value="variables"
            className="flex-1 rounded-md py-2 text-sm font-medium transition-all duration-200 ease-in-out data-[state=active]:bg-gray-600 data-[state=active]:text-white"
          >
            Variables
          </TabsTrigger>
          <TabsTrigger
            value="history"
            disabled
            className="flex-1 rounded-md py-2 text-sm font-medium opacity-40 transition-all duration-200 ease-in-out"
          >
            History (Coming Soon)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="prompt" className="p-4">
          <PromptSection
            fullPrompt={fullPrompt}
            onPromptChange={onPromptChange}
            previewText={previewText}
            hasMissingVars={hasMissingVars}
            onCopyToClipboard={onCopyToClipboard}
            selectedPrompt={selectedPrompt}
          />
        </TabsContent>

        <TabsContent value="variables" className="p-4">
          <VariablesSection
            customVars={customVars}
            updateCustomVar={updateCustomVar}
            newCustomKey={newCustomKey}
            newCustomValue={newCustomValue}
            setNewCustomKey={setNewCustomKey}
            setNewCustomValue={setNewCustomValue}
            handleAddCustomVar={handleAddCustomVar}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
