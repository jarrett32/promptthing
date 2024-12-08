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

interface PromptCategoriesProps {
  categories: string[];
  filteredPrompts: PromptData[];
  handleSelectPrompt: (prompt: PromptData) => void;
}

export default function PromptCategories(props: PromptCategoriesProps) {
  const { categories, filteredPrompts, handleSelectPrompt } = props;

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
              <CardContent>
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
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
