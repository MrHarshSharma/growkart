import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-dev",
    icon: "⬡",
    title: "Web Development",
    description:
      "Blazing-fast, scalable web apps built with modern frameworks. From landing pages to complex SaaS platforms — we ship products that perform.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    id: "mobile",
    icon: "◈",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences that feel native. iOS and Android apps built for the real world.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    id: "design",
    icon: "◉",
    title: "UI/UX Design",
    description:
      "Design systems, product design, and user research. We craft interfaces that convert and delight.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    featured: true,
  },
  {
    id: "ai",
    icon: "⬟",
    title: "AI Integration",
    description:
      "Embed intelligence into your product. LLM integrations, AI workflows, and custom ML pipelines.",
    tags: ["LLMs", "OpenAI", "RAG", "Automation"],
  },
  {
    id: "cloud",
    icon: "◬",
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with you. CI/CD pipelines, containerization, and cloud architecture.",
    tags: ["AWS", "Docker", "Kubernetes", "Vercel"],
  },
  {
    id: "marketing",
    icon: "◎",
    title: "Digital Marketing",
    description:
      "Growth strategies, SEO, and performance marketing. We put your brand in front of the right people.",
    tags: ["SEO", "Ads", "Analytics", "Growth"],
  },
];
