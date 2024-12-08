import type * as LucideIcons from "lucide-react";

export type PromptData = {
  summary: string;
  prompt: string;
  icon: keyof typeof LucideIcons;
  category: string;
  variables: string[];
  recommendedModel?: string;
};

export type VarData = {
  id: string;
  key: string;
  value: string;
};
