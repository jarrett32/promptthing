import { type PromptData } from "./types";

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
  // Company
  {
    summary: "Generate company name ideas",
    prompt:
      "Generate a list of compelling and memorable company name suggestions for ${{topic}}, considering the given ${{context}}, appealing to ${{audience}}, and presented in a ${{style}} style. Keep the length around ${{length}}.",
    icon: "Lightbulb",
    category: "Company",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Draft a marketing tagline",
    prompt:
      "Craft a concise, impactful marketing tagline for ${{topic}}, reflecting ${{context}}, resonating with ${{audience}}, and using a ${{style}} tone. Aim for a ${{length}} length.",
    icon: "Megaphone",
    category: "Company",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Create an elevator pitch",
    prompt:
      "Create a clear, persuasive elevator pitch for ${{topic}} that incorporates ${{context}}, engages ${{audience}}, and uses a ${{style}} voice. Keep it within ${{length}}.",
    icon: "Mic",
    category: "Company",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Formulate a product launch ad",
    prompt:
      "Formulate a compelling advertisement script for ${{topic}}’s product launch, reflecting ${{context}}, appealing to ${{audience}}, and delivered in a ${{style}} manner. Target a ${{length}} output.",
    icon: "PlayCircle",
    category: "Company",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Draft terms of service",
    prompt:
      "Draft a comprehensive yet understandable Terms of Service for ${{topic}}, integrating ${{context}}, suitable for ${{audience}}, and presented in a ${{style}} form. The final draft should be approximately ${{length}}.",
    icon: "FileText",
    category: "Company",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Write a privacy policy",
    prompt:
      "Write a clear and compliant Privacy Policy for ${{topic}}, considering ${{context}}, intended for ${{audience}}, and maintained in a ${{style}} tone. Keep it about ${{length}} in length.",
    icon: "ShieldCheck",
    category: "Company",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },

  // Education
  {
    summary: "Solve a homework problem",
    prompt:
      "Explain and solve the given homework problem about ${{topic}}, using details from ${{context}}, structured for ${{audience}}, with a ${{style}} explanation. Aim for ${{length}}.",
    icon: "Pencil",
    category: "Education",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Create a study guide",
    prompt:
      "Generate a concise study guide for ${{topic}}, using ${{context}} to structure key concepts, suitable for ${{audience}}, and presented in a ${{style}} format. Keep it around ${{length}}.",
    icon: "Book",
    category: "Education",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Generate flashcards",
    prompt:
      "Create a set of flashcards for ${{topic}}, leveraging ${{context}} to highlight crucial facts. They should be suitable for ${{audience}} and presented in a ${{style}} manner. Limit total text to about ${{length}}.",
    icon: "Layers",
    category: "Education",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Explain a concept simply",
    prompt:
      "Explain the concept of ${{topic}} in simple terms, using ${{context}} for background. Tailor it for ${{audience}} with a ${{style}} voice. The explanation should fit within ${{length}}.",
    icon: "MessageCircle",
    category: "Education",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Create a quiz",
    prompt:
      "Develop a short quiz on ${{topic}}, referencing ${{context}} for question content, appropriate for ${{audience}} and presented in a ${{style}} format. Target a ${{length}} quiz.",
    icon: "HelpCircle",
    category: "Education",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Summarize reading material",
    prompt:
      "Summarize the key points of ${{topic}}, using ${{context}} (e.g., reading material), tailored for ${{audience}}, and delivered in a ${{style}} manner. Keep it ${{length}}.",
    icon: "BookOpen",
    category: "Education",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },

  // Input
  {
    summary: "Summarize text",
    prompt:
      "Summarize ${{topic}} based on the provided ${{context}}, focusing on main ideas for ${{audience}}, in a ${{style}} style. Approximately ${{length}}.",
    icon: "AlignLeft",
    category: "Input",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Find key ideas",
    prompt:
      "Identify the key ideas in ${{topic}}, using ${{context}} to guide selection, for ${{audience}}, in a ${{style}} tone. Keep it ${{length}}.",
    icon: "Target",
    category: "Input",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Extract action items",
    prompt:
      "From ${{topic}} and its ${{context}}, extract clear action items suitable for ${{audience}} and present them in a ${{style}} format, about ${{length}} long.",
    icon: "CheckSquare",
    category: "Input",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Paraphrase content",
    prompt:
      "Paraphrase the given ${{topic}}, referencing ${{context}} for nuance, suitable for ${{audience}}, with a ${{style}} voice, and keep it within ${{length}}.",
    icon: "Repeat",
    category: "Input",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Identify the main topic",
    prompt:
      "Identify the main topic of ${{topic}}, using clues from ${{context}}, and explain it briefly to ${{audience}} in a ${{style}} tone, around ${{length}}.",
    icon: "Compass",
    category: "Input",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Compare two ideas",
    prompt:
      "Compare and contrast two core ideas within ${{topic}}, guided by ${{context}}, for ${{audience}}, with a ${{style}} approach, about ${{length}}.",
    icon: "Code",
    category: "Input",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },

  // Personal
  {
    summary: "Create personal goals",
    prompt:
      "Generate a set of personal goals related to ${{topic}}, incorporating ${{context}}, suitable for ${{audience}}, in a ${{style}} voice. Keep the list ${{length}}.",
    icon: "Flag",
    category: "Personal",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Develop a daily routine",
    prompt:
      "Design a daily routine to achieve ${{topic}}, considering ${{context}}, for ${{audience}}, using a ${{style}} format. Target a ${{length}} explanation.",
    icon: "Sun",
    category: "Personal",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Set up a plan",
    prompt:
      "Create a structured plan to accomplish ${{topic}}, using ${{context}} to guide steps, for ${{audience}}, in a ${{style}} manner, about ${{length}} long.",
    icon: "Map",
    category: "Personal",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Improve habits",
    prompt:
      "Suggest ways to improve habits related to ${{topic}}, considering ${{context}}, meant for ${{audience}}, in a ${{style}} voice, and keep it ${{length}}.",
    icon: "TrendingUp",
    category: "Personal",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Personal growth advice",
    prompt:
      "Provide personal growth advice focused on ${{topic}}, using ${{context}} for relevance, for ${{audience}} in a ${{style}} tone. Limit to ${{length}}.",
    icon: "Heart",
    category: "Personal",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },
  {
    summary: "Lifestyle suggestions",
    prompt:
      "Offer lifestyle suggestions to enhance ${{topic}}, guided by ${{context}}, suited for ${{audience}}, with a ${{style}} approach, and roughly ${{length}} long.",
    icon: "Smile",
    category: "Personal",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-3.5o",
  },

  // Research
  {
    summary: "Outline research steps",
    prompt:
      "Outline a clear set of research steps for investigating ${{topic}}, incorporating ${{context}}, suitable for ${{audience}}, in a ${{style}} format, around ${{length}}.",
    icon: "ListOrdered",
    category: "Research",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Literature review summary",
    prompt:
      "Summarize the key findings of literature related to ${{topic}}, using ${{context}} sources, tailored for ${{audience}}, in a ${{style}} manner, about ${{length}} long.",
    icon: "Clipboard",
    category: "Research",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Formulate research questions",
    prompt:
      "Formulate insightful research questions about ${{topic}}, considering ${{context}}, aimed at ${{audience}}, in a ${{style}} tone. Keep the final length ${{length}}.",
    icon: "HelpCircle",
    category: "Research",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "claude",
  },
  {
    summary: "Suggest methodologies",
    prompt:
      "Suggest possible methodologies for studying ${{topic}}, guided by ${{context}}, appropriate for ${{audience}}, and presented in a ${{style}} voice. Keep it about ${{length}}.",
    icon: "Sliders",
    category: "Research",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Evaluate credibility of sources",
    prompt:
      "Evaluate the credibility of sources related to ${{topic}}, referencing ${{context}}, for ${{audience}}, in a ${{style}} format, with a ${{length}} response.",
    icon: "CheckCircle",
    category: "Research",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
  {
    summary: "Suggest future directions",
    prompt:
      "Propose future research directions for ${{topic}}, informed by ${{context}}, suitable for ${{audience}}, and delivered in a ${{style}} voice, about ${{length}} in length.",
    icon: "Navigation",
    category: "Research",
    variables: ["topic", "context", "audience", "style", "length"],
    recommendedModel: "gpt-4o",
  },
];
