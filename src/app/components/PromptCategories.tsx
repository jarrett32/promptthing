import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import * as LucideIcons from "lucide-react";
import { TextIcon } from "lucide-react";
import { type PromptData } from "~/server/types";

interface PromptCategoriesProps {
  categories: string[];
  filteredPrompts: PromptData[];
  handleSelectPrompt: (prompt: PromptData) => void;
}

export default function PromptCategories(props: PromptCategoriesProps) {
  const { categories, filteredPrompts, handleSelectPrompt } = props;

  return (
    <>
      {categories.map((category) => {
        const categoryPrompts = filteredPrompts.filter(
          (p) => p.category === category,
        );
        if (categoryPrompts.length === 0) return null;
        return (
          <Card key={category} className="mb-4 border-purple-500 bg-gray-800">
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
                    (() => <TextIcon className="text-purple-300" size={20} />);
                  return (
                    <TooltipProvider key={index} delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => handleSelectPrompt(prompt)}
                            className="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-gray-700 transition-colors duration-200 hover:bg-gray-600"
                          >
                            <Icon className="text-purple-300" size={20} />
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
    </>
  );
}
