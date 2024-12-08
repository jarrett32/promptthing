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
  promptVars: VarData[];
  updatePromptVar: (id: string, field: "key" | "value", value: string) => void;
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
    promptVars,
    updatePromptVar,
    updateCustomVar,
    newCustomKey,
    newCustomValue,
    setNewCustomKey,
    setNewCustomValue,
    handleAddCustomVar,
  } = props;

  return (
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
            promptVars={promptVars}
            updatePromptVar={updatePromptVar}
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
