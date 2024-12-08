import React, { type Dispatch, type SetStateAction } from "react";
import { Input } from "~/components/ui/input";

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
    <>
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
    </>
  );
}
