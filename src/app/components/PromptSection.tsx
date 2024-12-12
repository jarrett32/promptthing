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
        <h2 className="text-2xl font-semibold text-gray-100">Full Prompt</h2>
        {selectedPrompt?.recommendedModel && (
          <Badge className="bg-gray-700 text-gray-200 hover:bg-gray-600">
            {selectedPrompt.recommendedModel}
          </Badge>
        )}
      </div>
      <Textarea
        value={fullPrompt}
        onChange={onPromptChange}
        className="min-h-[150px] w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-gray-100 placeholder:text-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 focus-visible:ring-0"
        placeholder="Select a base prompt or write your own..."
      />
      {fullPrompt && (
        <div
          className="group relative mt-4 cursor-pointer overflow-hidden rounded-md bg-gray-800 p-4 transition-all duration-300 ease-in-out hover:bg-gray-700"
          onClick={onCopyToClipboard}
        >
          <div className="flex items-center space-x-2">
            <p className="flex-1 text-sm text-gray-300">{previewText}</p>
            {hasMissingVars && (
              <AlertTriangle className="text-yellow-500" size={20} />
            )}
          </div>
          <div className="absolute right-2 top-2 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <ClipboardCopy
              className="text-gray-400 transition-colors duration-200 ease-in-out hover:text-gray-200"
              size={20}
            />
          </div>
        </div>
      )}
    </div>
  );
}
