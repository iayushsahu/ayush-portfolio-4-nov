export type SkillGroup = {
  id: string;
  title: string;
  subtitle: string;
  badge?: "Core" | "POC";
  /** Primary strengths, used in production */
  core: string[];
  /** Supporting tools and working knowledge */
  working: string[];
  /** Where it has been applied */
  applied: string[];
};

export const credentials: string[] = [
  "Amelia enterprise certified",
  "IBM-certified prompt engineering",
  "Mentored 50+ engineers",
];

export const skillGroups: SkillGroup[] = [
  {
    id: "platforms",
    title: "Conversational AI Platforms",
    subtitle: "Designing and shipping enterprise virtual agents at scale",
    badge: "Core",
    core: [
      "Amelia (BPN workflows)",
      "Dialogflow CX / ES",
      "NLU design: intents, entities, slot-filling",
      "Microsoft Teams & Copilot Studio",
      "Voice & IVR automation",
    ],
    working: ["Adaptive cards", "Human-agent handoff", "Fallback design"],
    applied: ["Banking", "Telecom", "Healthcare", "HR"],
  },
  {
    id: "integration",
    title: "Enterprise Integration & Backend",
    subtitle: "Secure middleware connecting assistants to enterprise systems",
    core: [
      "Node.js / Express",
      "REST APIs & OAuth 2.0",
      "Apache Camel (SOAP / REST)",
      "HR platform APIs (SAP, UKG, SuccessFactors)",
      "Redis & PostgreSQL",
    ],
    working: ["Java / Groovy", "Python / FastAPI", "JWT & role-based access"],
    applied: ["HR", "Banking", "Telecom"],
  },
  {
    id: "frontend",
    title: "Frontend & Product Engineering",
    subtitle: "Fast, responsive interfaces for chat and commerce products",
    core: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Conversational UI & chat overlays",
    ],
    working: [
      "Material-UI / Bootstrap",
      "Shopify integrations",
      "Admin dashboards",
    ],
    applied: ["Viral Products", "file-transformer", "Weesho", "Telecom"],
  },
  {
    id: "cloud",
    title: "Cloud & Platform Services",
    subtitle: "Serverless and managed infrastructure for live products",
    core: [
      "Vercel (serverless & edge)",
      "Cloudflare Workers & R2",
      "Supabase (auth & database)",
      "Upstash Redis",
      "Microsoft Azure (AD, Key Vault)",
    ],
    working: ["Docker", "Azure App Services", "Edge caching"],
    applied: ["Viral Products", "file-transformer", "Weesho"],
  },
  {
    id: "genai",
    title: "Generative AI & RAG",
    subtitle: "Applied on demand, from prototype to proof of concept",
    badge: "POC",
    core: [
      "LangChain / LangGraph",
      "RAG pipelines",
      "Hybrid search (pgvector, HNSW, BM25)",
      "Groq & Hugging Face Transformers",
      "Prompt engineering",
    ],
    working: ["Cross-encoder re-ranking", "Semantic routing", "Guardrails"],
    applied: ["Policy RAG POC"],
  },
  {
    id: "quality",
    title: "Quality, Testing & Delivery",
    subtitle: "Releasing conversational systems with confidence",
    core: [
      "Automated conversational QA",
      "Regression testing (400+ intents)",
      "CI/CD with GitHub Actions",
      "API testing (Postman, mock servers)",
      "Git workflows & code review",
    ],
    working: ["Contract testing", "Webhook testing", "Test reporting"],
    applied: ["HR", "Banking", "Telecom"],
  },
];