import { type PromptData } from "./types";

export const prompts: PromptData[] = [
  // Blogs - for bloggers and content creators
  {
    prompt:
      "Act as a seasoned content strategist specializing in long-form articles. Given the topic ${{topic}}, produce a well-structured, logically organized outline for a blog post. Ensure that the outline clearly conveys main sections, supporting subtopics, and a natural narrative flow that guides readers through the content.",
    icon: "PenTool",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-4o",
    summary: "Blog post outline generation",
  },
  {
    prompt:
      "Act as a creative headline expert who crafts memorable and SEO-friendly titles. For the given topic ${{topic}}, generate 5 engaging and attention-grabbing blog post titles that stand out, accurately reflect the subject matter, and entice readers to click through.",
    icon: "Type",
    category: "Copywriting",
    variables: ["topic"],
    summary: "Catchy blog title ideas",
  },
  {
    prompt:
      "Assume the role of an experienced blog copywriter. For the topic ${{topic}}, write an impactful introduction paragraph that hooks the reader immediately, clearly introduces the main subject, and establishes the tone and purpose of the post.",
    icon: "FileText",
    category: "Copywriting",
    variables: ["topic"],
    summary: "Blog post introduction paragraph",
  },
  {
    prompt:
      "Act as a persuasive content creator focused on engagement. For a blog post about ${{topic}}, craft a compelling call-to-action that motivates readers to take a desired next step—such as subscribing, commenting, or exploring related resources—while maintaining a natural and authentic tone.",
    icon: "CheckCircle",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-3.5",
    summary: "Create a compelling blog CTA",
  },
  {
    prompt:
      "Act as an editorial planner. Given the topic ${{topic}} and a key focus area ${{keyFocus}}, develop 3 strong subheadings that organize the content around this focus. Each subheading should clarify the subtopic, maintain thematic consistency, and support deeper exploration of the main subject.",
    icon: "Heading",
    category: "Copywriting",
    variables: ["topic", "keyFocus"],
    recommendedModel: "gpt-4o",
    summary: "Generate subheadings for focus areas",
  },

  // Social Media
  {
    prompt:
      "Adopt the voice of a social media content specialist. For the topic ${{topic}}, create 5 engaging tweets that inform, entertain, or inspire your audience. Each tweet should be concise, maintain a consistent voice, and encourage interaction such as likes, shares, or comments.",
    icon: "Twitter",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-3.5",
    summary: "Generate engaging tweet ideas",
  },
  {
    prompt:
      "Act as a social media strategist for Instagram. Given a ${{product}} and a specific ${{audience}} demographic, produce 3 compelling Instagram captions. Each caption should be crafted to resonate with the audience’s interests, highlight the product’s unique value, and encourage engagement.",
    icon: "Instagram",
    category: "Copywriting",
    variables: ["product", "audience"],
    recommendedModel: "gpt-4o",
    summary: "Create Instagram captions for products",
  },

  // Ads
  {
    prompt:
      "Take on the role of a performance marketing copywriter. For a ${{product}} that highlights a specific ${{keyBenefit}}, write a concise Google Ad headline and description. The copy should emphasize the product’s main advantage and entice users to click through, staying within typical ad character limits.",
    icon: "TrendingUp",
    category: "Copywriting",
    variables: ["product", "keyBenefit"],
    recommendedModel: "gpt-3.5",
    summary: "Generate Google Ad copy",
  },
  {
    prompt:
      "Imagine you are a paid social ad specialist. Craft 3 Facebook ad copies that showcase a ${{service}} for a particular ${{audience}}. Each ad should appeal to the audience's preferences, highlight the service’s solution to their pain points, and inspire them to learn more.",
    icon: "Facebook",
    category: "Copywriting",
    variables: ["service", "audience"],
    recommendedModel: "gpt-4o",
    summary: "Write Facebook Ad copy",
  },
  {
    prompt:
      "Act as a LinkedIn content specialist. For the topic ${{topic}}, generate 3 professional yet engaging LinkedIn post concepts. Each should provide value, encourage conversation, and align with a professional network’s tone.",
    icon: "Linkedin",
    category: "Copywriting",
    variables: ["topic"],
    recommendedModel: "gpt-3.5",
    summary: "Generate LinkedIn post ideas",
  },
  {
    prompt:
      "Assume the role of an email newsletter editor. For ${{audience}}, write an inviting, concise introduction paragraph for this week’s newsletter. It should briefly highlight the content’s value and encourage the reader to continue reading.",
    icon: "MailOpen",
    category: "Copywriting",
    variables: ["audience"],
    recommendedModel: "gpt-4o",
    summary: "Craft a welcoming newsletter intro",
  },
  {
    prompt:
      "Adopt the voice of an e-commerce copywriter. For the ${{product}} intended for ${{audience}}, write a product description that emphasizes features, benefits, and unique selling points. Keep it appealing, concise, and conversion-focused.",
    icon: "ShoppingBag",
    category: "Copywriting",
    variables: ["product", "audience"],
    recommendedModel: "gpt-4o",
    summary: "Write a compelling product description",
  },

  // Emails
  {
    prompt:
      "Act as an email marketing strategist. For a ${{service}} campaign targeting ${{audience}}, write an email subject line and body that captivates the reader from the start. Focus on personal relevance, concise messaging, and a clear call-to-action that encourages the audience to engage.",
    icon: "Mail",
    category: "Copywriting",
    variables: ["service", "audience"],
    recommendedModel: "gpt-4o",
    summary: "Generate email subject and body",
  },
  {
    prompt:
      "Take on the persona of a professional relationship-builder via email. For a previously initiated action ${{action}}, craft a warm, friendly follow-up email that maintains rapport, gently reminds the recipient of the next steps, and motivates them to respond.",
    icon: "Send",
    category: "Copywriting",
    variables: ["action"],
    recommendedModel: "gpt-3.5",
    summary: "Create follow-up email content",
  },
  {
    prompt:
      "Take on the role of a marketing strategist. For the specified ${{product}}, define a clear customer persona that includes demographics, pain points, motivations, and preferred communication channels. Ensure the persona feels detailed and realistic.",
    icon: "User",
    category: "Copywriting",
    variables: ["product"],
    recommendedModel: "gpt-4o",
    summary: "Create a detailed customer persona",
  },
  {
    prompt:
      "Act as a podcast content developer. For the theme ${{theme}}, propose 3 compelling episode ideas, each with a clear angle, potential guest ideas, and key discussion points to keep listeners engaged.",
    icon: "Mic",
    category: "Copywriting",
    variables: ["theme"],
    recommendedModel: "gpt-3.5",
    summary: "Suggest podcast episode concepts",
  },

  // Research - for researchers and academics
  {
    prompt:
      "Act as a research analyst. Given a complex topic ${{topic}}, summarize the key findings from reputable sources and highlight important data points. Keep the summary organized, and present it in a neutral, informative tone.",
    icon: "BookOpen",
    category: "Research",
    variables: ["topic"],
    recommendedModel: "gpt-4o",
    summary: "Summarize research findings for a given topic",
  },
  {
    prompt:
      "Act as a scriptwriter for educational videos. Given the topic ${{topic}}, develop an outline for a 5-minute informative video. Break it down into segments, ensuring a logical flow, clear takeaways, and engaging storytelling elements.",
    icon: "Video",
    category: "Research",
    variables: ["topic"],
    recommendedModel: "gpt-3.5",
    summary: "Outline an informative video script",
  },

  // Development - for developers and product managers
  {
    prompt:
      "Take on the role of a UX writer. For a website’s ${{page}} page, suggest ${{number}} pieces of microcopy that guide users through the process clearly and reassuringly. Include tooltips, button labels, and error messages that feel helpful and encouraging.",
    icon: "MousePointer",
    category: "Development",
    variables: ["page", "number"],
    recommendedModel: "gpt-4o",
    summary: "Generate user-friendly UX microcopy for checkout",
  },

  // Business For People starting companies or apply for jobs
  {
    prompt:
      "Assume the role of a PR crisis manager. Given a ${{scenario}}, draft a brief public statement that addresses the issue transparently, reassures stakeholders, and outlines immediate steps being taken to resolve the situation.",
    icon: "AlertCircle",
    category: "Business",
    variables: ["scenario"],
    recommendedModel: "gpt-4o",
    summary: "Draft a crisis communication statement",
  },

  // Company
  // {
  //   summary: "Generate company name ideas",
  //   prompt:
  //     "Adopt the perspective of a brand strategist. Considering ${{topic}}, with ${{context}} as background, propose a curated list of compelling, memorable company names that resonate with ${{audience}} and maintain a ${{style}} tone. Keep the suggestions around ${{length}} in total.",
  //   icon: "Lightbulb",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Draft a marketing tagline",
  //   prompt:
  //     "Act as a marketing copywriter. For ${{topic}}, reflecting ${{context}}, create a concise yet impactful tagline that appeals to ${{audience}}. Employ a ${{style}} tone and keep it around ${{length}} words to succinctly convey the brand’s essence.",
  //   icon: "Megaphone",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Create an elevator pitch",
  //   prompt:
  //     "Assume the role of a startup advisor. For ${{topic}}, using ${{context}} as the scenario, craft a persuasive elevator pitch suitable for ${{audience}}, adopting a ${{style}} voice. Aim for about ${{length}} words, clearly conveying value and impact.",
  //   icon: "Mic",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Formulate a product launch ad",
  //   prompt:
  //     "Become a creative advertising specialist. For ${{topic}}’s upcoming product launch, informed by ${{context}}, develop an advertisement script appealing to ${{audience}}. Use a ${{style}} approach and aim for a ${{length}} output, highlighting the product’s unique strengths.",
  //   icon: "PlayCircle",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Draft terms of service",
  //   prompt:
  //     "Take on the role of a compliance-oriented writer. For ${{topic}}, considering ${{context}}, produce a user-friendly Terms of Service tailored to ${{audience}}. Write in a ${{style}} manner and keep the final version around ${{length}} words.",
  //   icon: "FileText",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Write a privacy policy",
  //   prompt:
  //     "Imagine you’re a legal and privacy consultant. For ${{topic}}, given ${{context}}, draft a Privacy Policy understandable to ${{audience}}, using a ${{style}} tone, and roughly ${{length}} words. Ensure compliance and clarity.",
  //   icon: "ShieldCheck",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },

  // {
  //   summary: "Prepare for an interview",
  //   prompt:
  //     "Assume the role of a career mentor. For an upcoming interview focused on ${{topic}}, within ${{context}}, guide a ${{audience}} candidate on effective preparation strategies. Adopt a ${{style}} tone and keep it about ${{length}} words.",
  //   icon: "UserCheck",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Prepare to give an interview",
  //   prompt:
  //     "Take the perspective of a hiring manager consultant. For ${{topic}}, given ${{context}}, advise an ${{audience}} interviewer on structuring questions, managing time, and creating a positive environment. Use a ${{style}} approach, about ${{length}} words.",
  //   icon: "UserPlus",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Follow up after interview",
  //   prompt:
  //     "Act as a career advisor. After an interview related to ${{topic}} in ${{context}}, help a ${{audience}} candidate craft a thoughtful follow-up message or plan. Maintain a ${{style}} voice and limit the advice to about ${{length}} words.",
  //   icon: "Mail",
  //   category: "Company",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },

  // Education
  // {
  //   summary: "Solve a homework problem",
  //   prompt:
  //     "Explain and solve the given homework problem about ${{topic}}, using details from ${{context}}, structured for ${{audience}}, with a ${{style}} explanation. Aim for ${{length}}.",
  //   icon: "Pencil",
  //   category: "Education",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Create a study guide",
  //   prompt:
  //     "Generate a concise study guide for ${{topic}}, using ${{context}} to structure key concepts, suitable for ${{audience}}, and presented in a ${{style}} format. Keep it around ${{length}}.",
  //   icon: "Book",
  //   category: "Education",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Generate flashcards",
  //   prompt:
  //     "Create a set of flashcards for ${{topic}}, leveraging ${{context}} to highlight crucial facts. They should be suitable for ${{audience}} and presented in a ${{style}} manner. Limit total text to about ${{length}}.",
  //   icon: "Layers",
  //   category: "Education",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Explain a concept simply",
  //   prompt:
  //     "Explain the concept of ${{topic}} in simple terms, using ${{context}} for background. Tailor it for ${{audience}} with a ${{style}} voice. The explanation should fit within ${{length}}.",
  //   icon: "MessageCircle",
  //   category: "Education",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Create a quiz",
  //   prompt:
  //     "Develop a short quiz on ${{topic}}, referencing ${{context}} for question content, appropriate for ${{audience}} and presented in a ${{style}} format. Target a ${{length}} quiz.",
  //   icon: "HelpCircle",
  //   category: "Education",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Summarize reading material",
  //   prompt:
  //     "Summarize the key points of ${{topic}}, using ${{context}} (e.g., reading material), tailored for ${{audience}}, and delivered in a ${{style}} manner. Keep it ${{length}}.",
  //   icon: "BookOpen",
  //   category: "Education",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },

  // // Input
  // {
  //   summary: "Summarize text",
  //   prompt:
  //     "Summarize ${{topic}} based on the provided ${{context}}, focusing on main ideas for ${{audience}}, in a ${{style}} style. Approximately ${{length}}.",
  //   icon: "AlignLeft",
  //   category: "Input",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Find key ideas",
  //   prompt:
  //     "Identify the key ideas in ${{topic}}, using ${{context}} to guide selection, for ${{audience}}, in a ${{style}} tone. Keep it ${{length}}.",
  //   icon: "Target",
  //   category: "Input",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Extract action items",
  //   prompt:
  //     "From ${{topic}} and its ${{context}}, extract clear action items suitable for ${{audience}} and present them in a ${{style}} format, about ${{length}} long.",
  //   icon: "CheckSquare",
  //   category: "Input",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Paraphrase content",
  //   prompt:
  //     "Paraphrase the given ${{topic}}, referencing ${{context}} for nuance, suitable for ${{audience}}, with a ${{style}} voice, and keep it within ${{length}}.",
  //   icon: "Repeat",
  //   category: "Input",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Identify the main topic",
  //   prompt:
  //     "Identify the main topic of ${{topic}}, using clues from ${{context}}, and explain it briefly to ${{audience}} in a ${{style}} tone, around ${{length}}.",
  //   icon: "Compass",
  //   category: "Input",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Compare two ideas",
  //   prompt:
  //     "Compare and contrast two core ideas within ${{topic}}, guided by ${{context}}, for ${{audience}}, with a ${{style}} approach, about ${{length}}.",
  //   icon: "Code",
  //   category: "Input",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },

  // // Personal
  // {
  //   summary: "Create personal goals",
  //   prompt:
  //     "Generate a set of personal goals related to ${{topic}}, incorporating ${{context}}, suitable for ${{audience}}, in a ${{style}} voice. Keep the list ${{length}}.",
  //   icon: "Flag",
  //   category: "Personal",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Develop a daily routine",
  //   prompt:
  //     "Design a daily routine to achieve ${{topic}}, considering ${{context}}, for ${{audience}}, using a ${{style}} format. Target a ${{length}} explanation.",
  //   icon: "Sun",
  //   category: "Personal",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Set up a plan",
  //   prompt:
  //     "Create a structured plan to accomplish ${{topic}}, using ${{context}} to guide steps, for ${{audience}}, in a ${{style}} manner, about ${{length}} long.",
  //   icon: "Map",
  //   category: "Personal",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Improve habits",
  //   prompt:
  //     "Suggest ways to improve habits related to ${{topic}}, considering ${{context}}, meant for ${{audience}}, in a ${{style}} voice, and keep it ${{length}}.",
  //   icon: "TrendingUp",
  //   category: "Personal",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Personal growth advice",
  //   prompt:
  //     "Provide personal growth advice focused on ${{topic}}, using ${{context}} for relevance, for ${{audience}} in a ${{style}} tone. Limit to ${{length}}.",
  //   icon: "Heart",
  //   category: "Personal",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },
  // {
  //   summary: "Lifestyle suggestions",
  //   prompt:
  //     "Offer lifestyle suggestions to enhance ${{topic}}, guided by ${{context}}, suited for ${{audience}}, with a ${{style}} approach, and roughly ${{length}} long.",
  //   icon: "Smile",
  //   category: "Personal",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-3.5o",
  // },

  // // Research
  // {
  //   summary: "Outline research steps",
  //   prompt:
  //     "Outline a clear set of research steps for investigating ${{topic}}, incorporating ${{context}}, suitable for ${{audience}}, in a ${{style}} format, around ${{length}}.",
  //   icon: "ListOrdered",
  //   category: "Research",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Literature review summary",
  //   prompt:
  //     "Summarize the key findings of literature related to ${{topic}}, using ${{context}} sources, tailored for ${{audience}}, in a ${{style}} manner, about ${{length}} long.",
  //   icon: "Clipboard",
  //   category: "Research",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Formulate research questions",
  //   prompt:
  //     "Formulate insightful research questions about ${{topic}}, considering ${{context}}, aimed at ${{audience}}, in a ${{style}} tone. Keep the final length ${{length}}.",
  //   icon: "HelpCircle",
  //   category: "Research",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "claude",
  // },
  // {
  //   summary: "Suggest methodologies",
  //   prompt:
  //     "Suggest possible methodologies for studying ${{topic}}, guided by ${{context}}, appropriate for ${{audience}}, and presented in a ${{style}} voice. Keep it about ${{length}}.",
  //   icon: "Sliders",
  //   category: "Research",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Evaluate credibility of sources",
  //   prompt:
  //     "Evaluate the credibility of sources related to ${{topic}}, referencing ${{context}}, for ${{audience}}, in a ${{style}} format, with a ${{length}} response.",
  //   icon: "CheckCircle",
  //   category: "Research",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
  // {
  //   summary: "Suggest future directions",
  //   prompt:
  //     "Propose future research directions for ${{topic}}, informed by ${{context}}, suitable for ${{audience}}, and delivered in a ${{style}} voice, about ${{length}} in length.",
  //   icon: "Navigation",
  //   category: "Research",
  //   variables: ["topic", "context", "audience", "style", "length"],
  //   recommendedModel: "gpt-4o",
  // },
];
