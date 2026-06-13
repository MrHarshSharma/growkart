import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecom-platform",
    title: "NexaShop",
    description:
      "A high-performance e-commerce platform handling 10k+ daily transactions with real-time inventory, AI-powered recommendations, and sub-200ms page loads.",
    tags: ["Next.js", "Stripe", "AI", "PostgreSQL"],
    image: "/project-1.jpg",
    accent: "#079AC6",
  },
  {
    id: "saas-dashboard",
    title: "FlowMetrics",
    description:
      "Analytics SaaS dashboard for 500+ companies. Real-time data visualization, custom reporting, and team collaboration built on a modern data stack.",
    tags: ["React", "D3.js", "Node.js", "AWS"],
    image: "/project-2.jpg",
    accent: "#38c4e8",
  },
  {
    id: "mobile-fintech",
    title: "ClearPay",
    description:
      "Fintech mobile app with biometric auth, instant transfers, and smart spend tracking. Reached 100k downloads in the first 3 months.",
    tags: ["React Native", "Finance", "iOS", "Android"],
    image: "/project-3.jpg",
    accent: "#057a9e",
  },
];
