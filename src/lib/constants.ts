import { Code2, Layers, Rocket, Zap } from "lucide-react";
const skills = [
  {
    cat: "Frontend",
    items: ["Next.js", "React", "Vue.js", "TypeScript", "TailwindCSS"],
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    cat: "State & Data",
    items: ["Redux Toolkit", "Zustand", "React Query", "GraphQL"],
    icon: Layers,
    color: "from-violet-500 to-purple-500",
  },
  {
    cat: "Backend",
    items: ["Node.js", "Prisma", "Supabase", "PostgreSQL"],
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    cat: "DevOps",
    items: ["Vercel", "AWS", "Docker", "CI/CD"],
    icon: Zap,
    color: "from-emerald-500 to-teal-500",
  },
];
type AllowedColor = "violet" | "cyan" | "fuchsia" | "emerald";

const textGradient: Record<AllowedColor, string> = {
  violet: "from-violet-400 to-violet-300",
  cyan: "from-cyan-400 to-cyan-300",
  fuchsia: "from-fuchsia-400 to-fuchsia-300",
  emerald: "from-emerald-400 to-emerald-300",
};

const hoverGradient: Record<AllowedColor, string> = {
  violet: "from-violet-500/20 to-transparent",
  cyan: "from-cyan-500/20 to-transparent",
  fuchsia: "from-fuchsia-500/20 to-transparent",
  emerald: "from-emerald-500/20 to-transparent",
};
const experiences = [
  {
    company: "Velorona LLC",
    role: "Senior Frontend Engineer",
    period: "Aug 2023 - Present",
    location: "Remote",
    color: "from-violet-600 to-fuchsia-600",
    highlights: [
      "Led enterprise CRM handling 10,000+ transactions/month",
      "Built reporting dashboards reducing manual work by 80%",
      "Achieved 95+ Lighthouse scores with CI/CD pipelines",
      "Boosted lead conversions by 65% through marketing site",
    ],
  },
  {
    company: "Ekbana Solutions",
    role: "Frontend Engineer",
    period: "2022 - 2023",
    location: "Lalitpur, Nepal",
    color: "from-cyan-600 to-blue-600",
    highlights: [
      "Developed Vue.js apps for Japanese clients",
      "Migrated Vue 2 to Vue 3 with Composition API",
      "Built custom Twilio calling feature for Basestation",
    ],
  },
  {
    company: "S.B Solutions",
    role: "Frontend Developer",
    period: "2021 - 2022",
    location: "Kathmandu, Nepal",
    color: "from-orange-600 to-red-600",
    highlights: [
      "Built UI for enterprise banking platforms",
      "Created modular components in Angular & React",
      "Collaborated in Agile sprints with QA cycles",
    ],
  },
];

const projects = [
  {
    name: "Eeshan Mahadev",
    desc: "Full-stack ecommerce with Stripe payments & real-time inventory",
    tech: ["Next.js", "Prisma", "Stripe"],
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    emoji: "🛒",
  },
  {
    name: "Drishti CRM",
    desc: "SaaS dashboard with analytics & lead tracking",
    tech: ["Next.js", "ShadCN", "Recharts"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    emoji: "📊",
  },
  {
    name: "Kurama (कुरामा)",
    desc: "Real-time chat with typing indicators & presence",
    tech: ["Next.js", "Supabase", "Zustand"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    emoji: "💬",
  },
  {
    name: "Sajilo Bazaar",
    desc: "Cross-platform mobile marketplace app",
    tech: ["React Native", "Expo", "Supabase"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    emoji: "📱",
  },
];
export { experiences, hoverGradient, projects, skills, textGradient };
export type { AllowedColor };
