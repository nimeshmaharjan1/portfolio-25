export interface WorkEntry {
  period: string;
  role: string;
  company: string;
  location: string;
  narrative: string;
  points: string[];
  stack: string[];
}

export const workExperience: WorkEntry[] = [
  {
    period: "2026 — Present",
    role: "IT Support Officer (VLE Specialist)",
    company: "National College of Art and Design (NCAD)",
    location: "Dublin, Ireland",
    narrative:
      "When I joined NCAD, course rosters and student accounts were being synced across Canvas VLE through delayed weekly batches. I built an automated internal platform using Next.js and Python that validates institutional records and pushes Canvas SIS imports daily, cutting wait time by over 95%.",
    points: [
      "Designed and deployed the Next.js frontend and Python automation microservices that handle data formatting and Canvas REST API ingestion.",
      "Provided direct training, documentation, and technical support to academic faculty and administrative staff across campus.",
    ],
    stack: ["Next.js", "Python", "Canvas VLE API", "SIS Imports", "TypeScript"],
  },
  {
    period: "2023 — 2026",
    role: "Senior Frontend Engineer",
    company: "Velorona LLC",
    location: "Dallas, Texas (Remote)",
    narrative:
      "At Velorona, I led the frontend architecture for our core staffing CRM. We handled over 10,000 monthly transactions across time-tracking, payroll, invoicing, and scheduling. My goal was making dense, multi-step workflows feel lightweight and instant.",
    points: [
      "Engineered a modular design system using Next.js and Material UI with custom theme tokens, cutting frontend duplicate code across feature teams.",
      "Maintained 95+ Lighthouse scores, Sentry monitoring, and role-based permissions across production deployments on Vercel.",
      "Mentored junior developers through pair-programming and code reviews, helping raise overall sprint velocity by 20%.",
      "Connected partner billing and payroll APIs, eliminating repetitive manual data entry by roughly 40%.",
    ],
    stack: ["Next.js", "MUI", "TypeScript", "Vercel", "Sentry", "JWT"],
  },
  {
    period: "2022 — 2023",
    role: "Frontend Engineer",
    company: "EKbana Solutions",
    location: "Lalitpur, Nepal",
    narrative:
      "Worked on consumer and client-facing web apps for international clients, including Japanese businesses. A major highlight was rewriting legacy Vue 2 apps into Vue 3 with the Composition API, and building real-time calling features.",
    points: [
      "Spearheaded the migration of complex client applications from Vue 2 Options API to Vue 3 Composition API, improving performance and readability.",
      "Contributed core architectural work to Basestation using Next.js, Ant Design, and Redux Toolkit.",
      "Integrated Twilio WebRTC in-browser voice calling with customized connection diagnostics and timezone-aware scheduling.",
    ],
    stack: ["Vue 3", "Next.js", "Redux Toolkit", "Ant Design", "Twilio SDK"],
  },
  {
    period: "2021 (3 mos)",
    role: "Frontend Developer (Undergraduate Placement)",
    company: "S.B Solutions",
    location: "Kathmandu, Nepal",
    narrative:
      "My undergraduate internship where I gained early production experience building banking interfaces with React and Angular, connecting UI components to Java Spring Boot REST backends.",
    points: [
      "Built clean, modular components for internal enterprise banking platforms with rigorous QA and testing cycles.",
      "Collaborated within an Agile team on daily standups, sprint reviews, and bug triages.",
    ],
    stack: ["React", "Angular", "Spring Boot", "TypeScript"],
  },
];

export interface ProjectEntry {
  title: string;
  year: string;
  role: string;
  description: string;
  takeaway: string;
  stack: string[];
  link?: string;
}

export const selectedProjects: ProjectEntry[] = [
  {
    title: "NCAD VLE Automated Provisioning",
    year: "2026",
    role: "Full Ownership • EdTech Automation",
    description:
      "An automated platform bridging institutional student records with Canvas VLE via SIS imports. Replaced slow weekly manual batch cycles with automated daily syncs.",
    takeaway:
      "Reduced processing turnaround by 95% while giving academic staff clear visibility over enrollment status and error diagnostics.",
    stack: ["Next.js", "Python", "Canvas API", "SIS Imports"],
  },
  {
    title: "Velorona CRM & Staffing Platform",
    year: "2024 — 2026",
    role: "Lead Frontend Engineer",
    description:
      "Enterprise software handling workforce management, invoicing, timecards, and payroll calculations for 10,000+ monthly transactions with sub-second page loads.",
    takeaway:
      "Tackled complex multi-tenant authorization, optimistic table interactions, and built an internal UI system from the ground up.",
    stack: ["Next.js", "MUI", "TypeScript", "Sentry", "Vercel"],
  },
  {
    title: "Kurama (कुरामा)",
    year: "2024",
    role: "Personal Project • Realtime App",
    description:
      "A fast, distraction-free team chat application focused on zero latency, keyboard navigation, and instant feedback.",
    takeaway:
      "Implemented optimistic state updates via custom Zustand stores and live presence channels over WebSockets.",
    stack: ["Next.js", "Supabase", "Zustand", "Tailwind CSS"],
  },
  {
    title: "Basestation Telephony",
    year: "2023",
    role: "Frontend Engineer at EKbana",
    description:
      "In-browser voice calling and multilingual scheduling system connecting Japanese clients with international service teams.",
    takeaway:
      "Handled raw WebRTC voice session states, microphone permissions, and complex cross-timezone scheduling calendars.",
    stack: ["Vue 3", "Next.js", "Redux Toolkit", "Twilio Voice"],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  summary: string;
  details: string[];
}

export const education: EducationEntry[] = [
  {
    degree: "MSc in Interactive Digital Media",
    institution: "Griffith College Dublin",
    period: "Feb 2026 — Present",
    location: "Dublin, Ireland",
    summary:
      "Currently pursuing full-time Master's study (NFQ Level 9). Exploring the intersection of advanced web systems, interactive digital interfaces, and human-centred design.",
    details: [
      "Interactive Digital Media Systems",
      "Human-Centered Interface Design",
      "Advanced Web & Media Technologies",
      "Digital Product Prototyping",
    ],
  },
  {
    degree: "BSc (Hons) Computing",
    institution: "Islington College / London Metropolitan University",
    period: "2019 — 2022",
    location: "Kathmandu / London",
    grade: "Upper Second Class Honours (2:1)",
    summary:
      "Four-year British honours degree covering software engineering principles, distributed systems, and AI.",
    details: [
      "Final Year Project: Prashna – Technical Quiz Management System (Awarded 75% First Class)",
      "Software Engineering (70%)",
      "Advanced Database Systems Development",
      "Application Development & AI",
    ],
  },
];

export const skillsInventory = [
  {
    category: "Languages & Frameworks",
    items: [
      "React (18 / 19)",
      "Next.js (App & Pages)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vue.js (2 & 3)",
      "React Native",
      "Python",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Styling & UI Systems",
    items: [
      "Tailwind CSS",
      "Material UI (MUI)",
      "Design Systems & Tokens",
      "Radix UI / Shadcn",
      "CSS Architecture",
      "Accessibility (a11y)",
    ],
  },
  {
    category: "State & Data Fetching",
    items: [
      "Zustand",
      "Redux Toolkit",
      "TanStack React Query",
      "RESTful APIs",
      "WebSockets",
      "Twilio SDK",
    ],
  },
  {
    category: "Tooling & Backend",
    items: [
      "Node.js / Express",
      "PostgreSQL & Prisma",
      "Vercel CI/CD",
      "Git & GitHub Workflows",
      "Sentry Telemetry",
      "Canvas VLE SIS",
    ],
  },
];

export const personalNotes = [
  {
    topic: "Mountain Trails",
    note: "Growing up in Nepal, trekking high Himalayan passes taught me patience, pace, and respect for preparation. Now living in Ireland, I spend weekends exploring coastal trails like Howth, Bray, and Wicklow.",
  },
  {
    topic: "Culinary Experiments",
    note: "Cooking is my favourite craft away from screens. Making traditional Nepali momos from scratch, balancing whole spices, and experimenting with Southeast Asian street food recipes.",
  },
  {
    topic: "Philosophy on Code",
    note: "The best interfaces are invisible. They don't fight for attention with unnecessary animations — they get out of the user's way, load in milliseconds, and handle errors with grace.",
  },
];
