/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import { motion } from "framer-motion";
import Fuse from "fuse.js";

interface PromptCategoriesProps {
  categories: string[];
  searchTerm: string;
  filteredPrompts: PromptData[];
  handleSelectPrompt: (prompt: PromptData) => void;
}

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;

  // Create a single-item Fuse instance just for highlighting
  const fuse = new Fuse([text], {
    includeMatches: true,
    threshold: 0.4,
  });

  const result = fuse.search(searchTerm)[0];

  if (!result?.matches?.length) return text;

  // Sort matches by indices to handle overlapping matches
  const matches = Array.from(result.matches?.[0]?.indices ?? []).sort(
    (a: number[], b: number[]) => (a?.[0] ?? 0) - (b?.[0] ?? 0),
  );

  const chunks: { text: string; highlight: boolean }[] = [];
  let lastIndex = 0;

  matches.forEach(([start, end]: [number, number]) => {
    // Add non-matching text before this match
    if (start > lastIndex) {
      chunks.push({
        text: text.substring(lastIndex, start),
        highlight: false,
      });
    }
    // Add matching text
    chunks.push({
      text: text.substring(start, end + 1),
      highlight: true,
    });
    lastIndex = end + 1;
  });

  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    chunks.push({
      text: text.substring(lastIndex),
      highlight: false,
    });
  }

  return chunks.map((chunk, i) =>
    chunk.highlight ? (
      <strong key={i} className="text-gray-300/80">
        {chunk.text}
      </strong>
    ) : (
      chunk.text
    ),
  );
};

export default function PromptCategories(props: PromptCategoriesProps) {
  const { categories, searchTerm, filteredPrompts, handleSelectPrompt } = props;

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const categoryPrompts = filteredPrompts.filter(
          (p) => p.category === category,
        );
        if (categoryPrompts.length === 0) return null;
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-gray-700 bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-100">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  {categoryPrompts.map((prompt, index) => {
                    const Icon =
                      (LucideIcons[
                        prompt.icon
                      ] as React.ComponentType<LucideIcons.LucideProps>) ||
                      TextIcon;
                    return (
                      <TooltipProvider key={index} delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.button
                              onClick={() => handleSelectPrompt(prompt)}
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 transition-colors duration-200 hover:bg-gray-600"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Icon className="text-gray-300" size={20} />
                            </motion.button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-md rounded-md bg-gray-900 p-4 text-white shadow-lg">
                            <p className="text-sm">{prompt.summary}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
                {categoryPrompts.length > 0 && categoryPrompts[0] ? (
                  <p className="text-sm text-gray-300/50">
                    {highlightText(categoryPrompts[0].prompt, searchTerm)}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
