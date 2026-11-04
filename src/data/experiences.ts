export type Outcome = { value: string; label: string };

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  client?: string;
  description: string;
  highlights: string[];
  outcomes: Outcome[];
  tech: string[];
};

/**
 * Every entry follows the same shape so the timeline reads evenly:
 *  - one-sentence description
 *  - exactly 3 highlights
 *  - exactly 3 outcomes (value + label)
 *  - exactly 6 technologies
 */
export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Bhrish",
    location: "Hyderabad, India · Remote",
    period: "Apr 2025 — Present",
    type: "Full-time",
    client: "Global HR enterprise",
    description:
      "Lead Conversational AI and Gen-AI engineering for global HR clients, owning solution design, backend architecture, enterprise integrations, secure deployment, and production support.",
    highlights: [
      "Architect conversational solutions on Amelia (SoundHound AI) and Dialogflow CX, delivered through web, Microsoft Teams, and Copilot.",
      "Build Node.js / Express middleware that connects SAP, UKG, SuccessFactors, Cornerstone, and Grow to the assistant, secured with OAuth 2.0.",
      "Train and mentor engineers on the Amelia platform, and prototype an LLM-RAG proof of concept for enterprise policy Q&A.",
    ],
    outcomes: [
      { value: "50+", label: "Engineers mentored" },
      { value: "5", label: "HR platforms integrated" },
      { value: "~100%", label: "Issue resolution" },
    ],
    tech: [
      "Amelia",
      "Dialogflow CX",
      "Node.js / Express",
      "Teams & Copilot",
      "OAuth 2.0",
      "LangChain / RAG",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bhrish",
    location: "Hyderabad, India · Remote",
    period: "Jul 2023 — Mar 2025",
    type: "Full-time",
    client: "Global HR enterprise",
    description:
      "Developed and deployed production conversational AI on Amelia for enterprise HR, building dialog workflows, backend integrations, and employee self-service automation.",
    highlights: [
      "Built workflows for onboarding, leave management, payslip generation, benefits and training queries, HR policy FAQs, and password resets.",
      "Increased user engagement by 57% across employee self-service through automated intent classification and refined conversation design.",
      "Created an automated QA suite for dialog flows, cutting regression turnaround by 60% and accelerating production releases.",
    ],
    outcomes: [
      { value: "+57%", label: "User engagement" },
      { value: "60%", label: "Faster regression cycles" },
      { value: "400+", label: "Intents validated per release" },
    ],
    tech: [
      "Amelia",
      "Dialogflow CX",
      "Python / FastAPI",
      "REST APIs",
      "ERP integrations",
      "Automated QA",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amelia (SoundHound AI)",
    location: "Bengaluru, India · On-site",
    period: "Jun 2022 — Jun 2023",
    type: "Full-time",
    client: "Telecom, healthcare & banking clients",
    description:
      "Owned end-to-end design, development, and deployment of Amelia virtual agents for telecom, healthcare, and banking clients, pairing React frontends with Java and Groovy orchestration.",
    highlights: [
      "Served as the sole India-based engineer on several global projects, driving delivery from architecture scoping to production launch.",
      "Developed embedded chat overlays in React and JavaScript, and Groovy and Java orchestrations that automate enterprise workflows.",
      "Cut latency and manual operations with Redis caching, and integrated third-party services through Apache Camel, SOAP, and REST.",
    ],
    outcomes: [
      { value: "3", label: "Industry verticals delivered" },
      { value: "Sole", label: "India engineer on key projects" },
      { value: "Redis", label: "Caching for low latency" },
    ],
    tech: [
      "Amelia Platform",
      "Java / Groovy",
      "React.js",
      "Redis",
      "Apache Camel",
      "REST / SOAP",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Desparito",
    location: "Bhopal, India · Remote",
    period: "Jan 2021 — Jun 2021",
    type: "Internship",
    description:
      "Built and maintained responsive web applications with React, Firebase, and modern UI tooling, working closely with UX designers and backend engineers.",
    highlights: [
      "Created mobile-responsive interfaces with React, Material-UI, Bootstrap, and CSS modules.",
      "Integrated authentication and real-time data flows using Firebase.",
      "Profiled performance bottlenecks and reduced client bundle sizes for faster load times.",
    ],
    outcomes: [
      { value: "6 mo", label: "Production React work" },
      { value: "Firebase", label: "Auth & real-time data" },
      { value: "Faster", label: "Smaller client bundles" },
    ],
    tech: [
      "React.js",
      "Firebase",
      "JavaScript",
      "HTML5 / CSS3",
      "Material-UI",
      "Bootstrap",
    ],
  },
];