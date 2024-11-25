"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import * as LucideIcons from "lucide-react";
import { Input } from "~/components/ui/input";
import { TextIcon } from "lucide-react";
import { Textarea } from "~/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

type PromptData = {
  prompt: string;
  icon: keyof typeof LucideIcons;
  category: string;
};

const prompts: PromptData[] = [
  // Blogs
  {
    prompt: "Create an outline for a blog post about [topic]",
    icon: "PenTool",
    category: "Copywriting",
  },
  {
    prompt: "Generate 5 catchy blog titles for [topic]",
    icon: "Type",
    category: "Copywriting",
  },
  {
    prompt: "Write an introduction paragraph for a blog post about [topic]",
    icon: "FileText",
    category: "Copywriting",
  },
  // Starting a business
  {
    prompt: "List 5 key steps to start a [type of business]",
    icon: "Briefcase",
    category: "Starting a business",
  },
  {
    prompt: "Create a basic business plan outline for [business idea]",
    icon: "FileSpreadsheet",
    category: "Starting a business",
  },
  {
    prompt: "Generate a mission statement for a [type of company]",
    icon: "Target",
    category: "Starting a business",
  },
  {
    prompt: "List potential funding sources for a startup in [industry]",
    icon: "PiggyBank",
    category: "Starting a business",
  },
  // Add more prompts and categories as needed
];

const categories = Array.from(new Set(prompts.map((p) => p.category)));

export default function PromptTool() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [fullPrompt, setFullPrompt] = useState("");
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");

  const filteredPrompts = prompts.filter(
    (prompt) =>
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || prompt.category === selectedCategory),
  );

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="bg-purple-900 p-6">
        <h1 className="mb-2 text-3xl font-bold">Prompt Thing</h1>
        <h2 className="text-purple-200">
          Quick Prompts, Favored by the Community
        </h2>
      </header>
      <main className="p-6">
        <div className="mx-auto mb-8 max-w-3xl space-y-4">
          <Input
            type="search"
            placeholder="Search prompts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-purple-500 bg-gray-800 text-white focus:border-purple-300"
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
        </div>

        <div className="space-y-8">
          {/* Prompt */}
          <Tabs defaultValue="prompt" className="w-full bg-gray-800">
            <TabsList>
              <TabsTrigger value="prompt">Prompt</TabsTrigger>
              <TabsTrigger value="variables">Variables</TabsTrigger>
              <TabsTrigger
                value="history"
                disabled
                className="opacity-40 hover:bg-gray-800"
              >
                History (Coming Soon)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="prompt">
              <div className="space-y-4">
                <h2 className="text-2xl text-purple-300">Full Prompt</h2>
                <Textarea
                  value={fullPrompt}
                  onChange={(e) => setFullPrompt(e.target.value)}
                  className="min-h-[100px] w-full border-0 bg-gray-700 text-purple-300 placeholder:text-gray-400 focus-visible:ring-0"
                  placeholder="Select a base prompt..."
                />
              </div>
            </TabsContent>
            <TabsContent value="variables">
              <div className="space-y-4">
                <h2 className="text-2xl text-purple-300">Variables</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Object.entries(variables).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center space-x-2 rounded-md bg-gray-700 p-2"
                    >
                      <span className="font-semibold text-purple-200">
                        {key}:
                      </span>
                      <span className="text-purple-200">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Input
                    placeholder="Key"
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    className="w-full bg-gray-700 text-purple-300 sm:w-1/3"
                  />
                  <Input
                    placeholder="Value"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="w-full bg-gray-700 text-purple-300 sm:w-1/3"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {categories.map((category) => {
            const categoryPrompts = filteredPrompts.filter(
              (p) => p.category === category,
            );
            if (categoryPrompts.length === 0) return null;
            return (
              <Card key={category} className="border-purple-500 bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {categoryPrompts.map((prompt, index) => {
                      const Icon = (LucideIcons[
                        prompt.icon
                      ] as React.ComponentType<LucideIcons.LucideProps>) || (
                        <TextIcon className="text-purple-300" size={20} />
                      );
                      return (
                        <TooltipProvider key={index} delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-gray-700 transition-colors duration-200 hover:bg-gray-600">
                                {Icon ? (
                                  <Icon className="text-purple-300" size={20} />
                                ) : null}
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-md rounded-md bg-gray-900 p-4 text-white shadow-lg">
                              <p className="text-sm">{prompt.prompt}</p>
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
        </div>
      </main>
    </div>
  );
}
