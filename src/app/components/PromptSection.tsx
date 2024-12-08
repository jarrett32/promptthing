import React from "react";
import { Textarea } from "~/components/ui/textarea";
import { ClipboardCopy, AlertTriangle } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { type PromptData } from "~/server/types";

interface PromptSectionProps {
  fullPrompt: string;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  previewText: string;
  hasMissingVars: boolean;
  onCopyToClipboard: () => void;
  selectedPrompt: PromptData | null;
}

export default function PromptSection(props: PromptSectionProps) {
  const {
    fullPrompt,
    onPromptChange,
    previewText,
    hasMissingVars,
    onCopyToClipboard,
    selectedPrompt,
  } = props;

  return (
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
        onChange={onPromptChange}
        className="min-h-[100px] w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-purple-300 placeholder:text-gray-400 focus-visible:ring-0"
        placeholder="Select a base prompt or write your own..."
      />
      {fullPrompt && (
        <div className="group relative mt-4 cursor-pointer rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-700/50">
          <div className="flex items-center space-x-2">
            <p className="flex-1 text-sm text-purple-200">{previewText}</p>
            {hasMissingVars && (
              <AlertTriangle className="text-yellow-400" size={20} />
            )}
          </div>
          <div
            className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={onCopyToClipboard}
          >
            <ClipboardCopy
              className="text-purple-300 hover:text-purple-400"
              size={20}
            />
          </div>
        </div>
      )}
    </div>
  );
}
