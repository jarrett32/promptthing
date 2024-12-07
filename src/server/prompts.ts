import { type PromptData } from "~/app/promptool";
export const prompts: PromptData[] = [
  // Blogs
  {
    prompt: "Create an outline for a blog post about ${{topic}}",
    icon: "PenTool",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-4o",
    summary: "Blog post outline generation",
  },
  {
    prompt: "Generate 5 catchy blog titles for ${{topic}}",
    icon: "Type",
    category: "Copywriting",
    variables: ["topic"],
    summary: "Catchy blog title ideas",
  },
  {
    prompt: "Write an introduction paragraph for a blog post about ${{topic}}",
    icon: "FileText",
    category: "Copywriting",
    variables: ["topic"],
    summary: "Blog post introduction paragraph",
  },
  {
    prompt: "Write a call-to-action for a blog post about ${{topic}}",
    icon: "CheckCircle",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-3.5",
    summary: "Create a compelling blog CTA",
  },
  {
    prompt:
      "Generate 3 subheadings for a blog post about ${{topic}} with a focus on ${{keyFocus}}",
    icon: "Heading",
    category: "Copywriting",
    variables: ["topic", "keyFocus"],
    recommendedModel: "gpt-4o",
    summary: "Generate subheadings for focus areas",
  },

  // Social Media
  {
    prompt: "Create 5 engaging tweets about ${{topic}}",
    icon: "Twitter",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-3.5",
    summary: "Generate engaging tweet ideas",
  },
  {
    prompt:
      "Generate 3 Instagram captions for a post about ${{product}} targeting ${{audience}}",
    icon: "Instagram",
    category: "Copywriting",
    variables: ["product", "audience"],
    recommendedModel: "gpt-4o",
    summary: "Create Instagram captions for products",
  },

  // Ads
  {
    prompt:
      "Write a Google Ad headline and description for ${{product}} emphasizing ${{keyBenefit}}",
    icon: "TrendingUp",
    category: "Copywriting",
    variables: ["product", "keyBenefit"],
    recommendedModel: "gpt-3.5",
    summary: "Generate Google Ad copy",
  },
  {
    prompt:
      "Craft 3 Facebook Ad copies for ${{service}} targeting ${{demographic}}",
    icon: "Facebook",
    category: "Copywriting",
    variables: ["service", "demographic"],
    recommendedModel: "gpt-4o",
    summary: "Write Facebook Ad copy",
  },

  // Emails
  {
    prompt:
      "Write a subject line and email body for a ${{promotionType}} targeting ${{audience}}",
    icon: "Mail",
    category: "Copywriting",
    variables: ["promotionType", "audience"],
    recommendedModel: "gpt-4o",
    summary: "Generate email subject and body",
  },
  {
    prompt: "Generate a follow-up email for ${{action}} with a friendly tone",
    icon: "Send",
    category: "Copywriting",
    variables: ["action"],
    recommendedModel: "gpt-3.5",
    summary: "Create follow-up email content",
  },
];
