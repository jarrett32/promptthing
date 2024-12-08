import React, { type Dispatch, type SetStateAction } from "react";
import { Input } from "~/components/ui/input";
import { motion } from "framer-motion";

interface PromptFilterProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}

export default function PromptFilter(props: PromptFilterProps) {
  const {
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = props;

  return (
    <div className="space-y-4">
      <Input
        type="search"
        placeholder="Search prompts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-400 focus:border-gray-600 focus:ring-gray-600"
      />
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category,
              )
            }
            className={`rounded-full px-3 py-1 text-sm transition-colors duration-200 ${
              selectedCategory === category
                ? "bg-gray-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
