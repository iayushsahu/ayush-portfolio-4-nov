export type Project = {
  title: string;
  category: string;
  status: string;
  client: string;
  description: string;
  highlights: string[];
  tech: string[];
  impact: string;
  url?: string;
  featured?: boolean;
};

export type ArchitectureItem = {
  title: string;
  desc: string;
  tech: string[];
};

/**
 * Ordering: Amelia (3), Bhrish (3), independent products (4).
 * Every entry follows the same shape so the cards render at matching heights:
 *  - one-sentence description
 *  - exactly 3 highlights
 *  - exactly 5 technologies
 *  - a single-line impact statement
 */
export const projects: Project[] = [
  /* ───────────── Amelia (SoundHound AI) ───────────── */
  {
    title: "Digital Banking Servicing & KYC Assistant",
    category: "Conversational AI",
    status: "Production · Banking client",
    client: "Amelia (SoundHound AI) · Digital banking client",
    description:
      "Conversational banking assistant on the Amelia platform handling account servicing, KYC verification guidance, bill payments, balance inquiries, and transaction dispute routing.",
    highlights: [
      "Built multi-page BPN dialog flows with fulfillment integrations and deterministic state handling.",
      "Applied zero-trust security principles, including encrypted session storage and tokenized customer data.",
      "Integrated real-time banking APIs within a sub-300 ms SLA, with human-agent handoff and full transcripts.",
    ],
    tech: [
      "Amelia Platform",
      "Node.js / Express",
      "JWT",
      "PostgreSQL",
      "Banking APIs",
    ],
    impact: "Sub-300 ms API execution · zero security incidents",
    featured: true,
  },
  {
    title: "Telecom Chat & Voice Automation",
    category: "Conversational AI",
    status: "Production · Global clients",
    client: "Amelia (SoundHound AI) · Telecom providers",
    description:
      "Custom chat overlays and voice automation for global telecom providers, supporting high-volume customer service, plan and order lookups, troubleshooting, and self-service journeys.",
    highlights: [
      "Developed embedded chat interfaces and overlays in React.js and JavaScript for telecom service portals.",
      "Authored Groovy and Java orchestrations for order lookups, plan changes, and diagnostics.",
      "Reduced latency at high concurrency with Redis caching; integrated services via Apache Camel, SOAP, and REST.",
    ],
    tech: [
      "Amelia Platform",
      "React.js",
      "Java / Groovy",
      "Redis",
      "Apache Camel",
    ],
    impact: "High-volume support for global telecom clients",
    featured: true,
  },
  // TODO: confirm healthcare details (scope, integrations, tech) and replace the generic wording below.
  {
    title: "Healthcare Virtual Assistant",
    category: "Conversational AI",
    status: "Production · Healthcare client",
    client: "Amelia (SoundHound AI) · Healthcare client",
    description:
      "Conversational virtual assistant on the Amelia platform for a healthcare client, automating routine support journeys through secure back-end integrations.",
    highlights: [
      "Designed multi-turn BPN dialog workflows with deterministic state handling and defined fallback paths.",
      "Integrated client back-end systems through secure REST APIs and authenticated service calls.",
      "Applied access-control and privacy safeguards appropriate for sensitive healthcare data.",
    ],
    tech: [
      "Amelia Platform",
      "BPN Workflows",
      "REST APIs",
      "OAuth 2.0",
      "Redis",
    ],
    impact: "Production automation for a healthcare client",
  },

  /* ───────────── Bhrish ───────────── */
  {
    title: "End-to-End HR Virtual Assistant",
    category: "Conversational AI",
    status: "Production · Global clients",
    client: "Bhrish · Global HR enterprise",
    description:
      "End-to-end HR assistant on the Amelia platform supporting tens of thousands of employees with leave booking, payslips, benefits, training, policy FAQs, and password self-service.",
    highlights: [
      "Delivered the full HR use case, from multi-turn BPN workflows to OAuth 2.0 authentication and role-based access.",
      "Validated 400+ intent variations with an automated QA suite, cutting regression turnaround by 60%.",
      "Extended delivery to Microsoft Teams through custom bots and Copilot extensions.",
    ],
    tech: [
      "Amelia Platform",
      "Node.js / Express",
      "OAuth 2.0",
      "Microsoft Teams",
      "Automated QA",
    ],
    impact: "57% higher engagement · 50%+ fewer tier-1 tickets",
    featured: true,
  },
  {
    title: "HR Systems Integration Middleware",
    category: "Cloud & Backend",
    status: "Production · Global clients",
    client: "Bhrish · Global HR enterprise",
    description:
      "Integration middleware that exposes SAP, UKG, SuccessFactors, Cornerstone, and Grow (training) APIs as one unified service layer consumed by the Amelia HR assistant.",
    highlights: [
      "Built a Node.js / Express layer that normalizes APIs across five HR and learning platforms.",
      "Secured access with OAuth 2.0, role-based permissions, and audit trails.",
      "Cached frequent lookups in Redis to keep assistant responses fast.",
    ],
    tech: [
      "Node.js / Express",
      "REST APIs",
      "OAuth 2.0",
      "Redis",
      "HRIS integrations",
    ],
    impact: "Single integration layer across five HR platforms",
  },
  {
    title: "Enterprise Policy RAG & Semantic Router",
    category: "Generative AI",
    status: "Prototype · POC",
    client: "Bhrish · Internal R&D",
    description:
      "Proof of concept pairing vector retrieval with semantic routing over enterprise policy documents to evaluate grounded answers for FAQ-style queries.",
    highlights: [
      "Implemented hybrid retrieval combining dense vector search (HNSW) with BM25 keyword matching.",
      "Applied reciprocal rank fusion and cross-encoder re-ranking to improve grounding quality.",
      "Evaluated as an optional knowledge layer alongside deterministic BPN and Dialogflow flows.",
    ],
    tech: [
      "Python / FastAPI",
      "LangChain",
      "PostgreSQL pgvector",
      "Groq",
      "Hugging Face Transformers",
    ],
    impact: "POC · optional knowledge-grounding layer",
  },

  /* ───────────── Independent products (Next.js + Vercel) ───────────── */
  {
    title: "Viral Products — Catalog & Admin Portal",
    category: "Full-Stack",
    status: "Live · Production",
    client: "Independent product",
    description:
      "Production deals and product-discovery catalog serving thousands of daily shoppers, with an admin dashboard for live traffic monitoring and geographic analytics.",
    highlights: [
      "Built a low-latency catalog front end on Vercel with serverless functions and edge-cached assets.",
      "Designed an admin portal tracking real-time active users, with state- and city-level traffic analytics.",
      "Integrated Supabase auth and database, Cloudflare R2 media storage, and Upstash Redis caching.",
    ],
    tech: [
      "Next.js",
      "Vercel Serverless",
      "Cloudflare Workers & R2",
      "Supabase",
      "Upstash Redis",
    ],
    impact: "Thousands of daily shoppers · real-time geo-traffic analytics",
    url: "https://viral-products.shop/",
    featured: true,
  },
  {
    title: "file-transformer — Shopify Order Converter",
    category: "E-Commerce Tooling",
    status: "Live · Thousands of sellers",
    client: "Independent product",
    description:
      "Utility that converts Shopify order exports into the formats required by courier partners and groups orders to each seller’s preferences, used by thousands of retail sellers.",
    highlights: [
      "Transforms Shopify order exports into courier-partner formats across CSV, JSON, XLSX, and TSV.",
      "Segments and groups orders by SKU, price, and other attributes.",
      "Validates addresses, zip codes, and phone numbers to minimize return-to-origin (RTO) rates.",
    ],
    tech: [
      "Next.js",
      "Vercel",
      "Shopify API",
      "CSV / JSON / XLSX / TSV",
      "Data transformation",
    ],
    impact: "Used by thousands of Shopify sellers worldwide",
    url: "https://file-transformer-v3.vercel.app/",
    featured: true,
  },
  {
    title: "Weesho — E-Commerce Storefront & Admin",
    category: "Full-Stack",
    status: "Complete · Full-stack product",
    client: "Independent product",
    description:
      "Full-featured e-commerce web application with a customer storefront and a complete admin panel for catalog, order, and inventory management.",
    highlights: [
      "Customer storefront with browsing, cart, checkout, and order tracking.",
      "Admin panel covering product catalog, inventory, order management, and analytics.",
      "Authentication and role-based access control across the platform.",
    ],
    tech: ["Next.js", "Vercel", "React.js", "MongoDB / PostgreSQL", "JWT"],
    impact: "Complete storefront and admin platform",
  },
  {
    title: "AstroSnap — Vedic Astrology Platform",
    category: "Full-Stack",
    status: "Complete · Full-stack product",
    client: "Independent product",
    description:
      "Vedic astrology application that computes birth charts and kundalis with the Swiss Ephemeris library, with a clean frontend for profile input and consultations.",
    highlights: [
      "Performs backend planetary calculations with PySwisseph (Swiss Ephemeris).",
      "Generates birth charts and kundalis with Vedic house and sign positions.",
      "Exposes a clean API consumed by the frontend UI.",
    ],
    tech: [
      "Next.js",
      "Vercel",
      "Python / FastAPI",
      "PySwisseph",
      "PostgreSQL",
    ],
    impact: "Complete Vedic astrology application",
  },
];

export const architecture: ArchitectureItem[] = [
  {
    title: "Conversation Design & NLU",
    desc: "Intent, entity, and slot-filling design with explicit state machines, built as Amelia BPN workflows or Dialogflow CX flows with defined fallback and error handling.",
    tech: ["Amelia BPN", "Dialogflow CX", "NLU design"],
  },
  {
    title: "Orchestration & Middleware",
    desc: "API middleware executes transactional requests against ERP, HCM, and banking systems, with OAuth 2.0 validation and Redis caching for performance.",
    tech: ["Node.js / FastAPI", "OAuth 2.0", "Redis"],
  },
  {
    title: "Knowledge & Context Grounding",
    desc: "An optional retrieval layer, from FAQ grounding to hybrid vector and keyword search, supplies grounded, context-aware answers to knowledge queries.",
    tech: ["pgvector", "LangChain", "FAQ grounding"],
  },
  {
    title: "Quality & Validation",
    desc: "Automated conversational test suites validate intents, entities, and end-to-end journeys before every release, sharply reducing regression time.",
    tech: ["Automated QA", "CI/CD", "Regression testing"],
  },
  {
    title: "Delivery & Telemetry",
    desc: "Multi-channel delivery across web, Teams, and voice, with streaming responses, adaptive cards, and monitoring dashboards for continuous improvement.",
    tech: ["React.js", "Microsoft Teams", "SSE"],
  },
];