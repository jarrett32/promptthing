import React, { type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";

interface PromptFilterProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  noFilter: boolean;
  setNoFilter: Dispatch<SetStateAction<boolean>>;
}

export default function PromptFilter(props: PromptFilterProps) {
  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    noFilter,
    setNoFilter,
  } = props;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <motion.button
          onClick={() => {
            setNoFilter(!noFilter);
          }}
          className={`mr-4 rounded-full border border-gray-700 px-3 py-1 text-sm transition-colors duration-200 ${
            !noFilter
              ? "bg-gray-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {noFilter ? "Filter prompts" : "Show all prompts"}
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() =>
              setSelectedCategories(
                selectedCategories.includes(category)
                  ? selectedCategories.filter((c: string) => c !== category)
                  : [...selectedCategories, category],
              )
            }
            className={`rounded-full px-3 py-1 text-sm transition-colors duration-200 ${
              selectedCategories.includes(category)
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
