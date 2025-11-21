import {
  ArrowRight,
  ChevronDown,
  Code2,
  DownloadCloudIcon,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Rocket,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

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

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Cursor glow */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{ left: mousePos.x - 200, top: mousePos.y - 200 }}
      >
        <div className="w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrollY > 50
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/10"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="relative group">
            <span className="text-2xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              NM
            </span>
            <span className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
          </a>
          <div className="hidden md:flex gap-1">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-base font-funnel-sans text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-white"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="relative text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </div>

          <h1 className="font-funnel-sans text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight">
            <span className="block text-white">NIMESH</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              MAHARJAN
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <p className="font-funnel-sans text-xl md:text-2xl font-light text-zinc-400 tracking-widest uppercase">
              Senior Frontend Engineer
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-500" />
          </div>

          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting <span className="text-violet-400">high-performance</span>{" "}
            web experiences that scale. Specialized in{" "}
            <span className="text-cyan-400">React</span>,{" "}
            <span className="text-fuchsia-400">Next.js</span>, and building
            products users love.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="group relative font-funnel-sans px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/Nimesh_Maharjan_CV.pdf"
              download
              className="px-8 font-funnel-sans py-4 rounded-full font-semibold border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              Download CV
              <DownloadCloudIcon size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { n: "4+", l: "Years Exp", color: "violet" },
              { n: "10K+", l: "Trans/Month", color: "cyan" },
              { n: "95+", l: "Lighthouse", color: "fuchsia" },
              { n: "80%", l: "Efficiency", color: "emerald" },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition ${
                    hoverGradient[s.color as AllowedColor]
                  }`}
                ></div>
                <p
                  className={`text-4xl font-black bg-gradient-to-r ${
                    textGradient[s.color as AllowedColor]
                  } bg-clip-text text-transparent`}
                >
                  {s.n}
                </p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-10 right-12 -translate-x-1/2 p-2 rounded-full border border-white/20 text-zinc-500 animate-bounce hover:text-white hover:border-white/40 transition-colors"
        >
          <ChevronDown size={24} />
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-violet-500/50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-fuchsia-500/50" />
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text tracking-widest mb-4">
                  ABOUT ME
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Building the{" "}
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text">
                    future
                  </span>{" "}
                  of web
                </h2>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    Senior Frontend Engineer with{" "}
                    <span className="text-white font-medium">4+ years</span> of
                    experience building enterprise-grade applications that
                    handle{" "}
                    <span className="text-violet-400 font-medium">
                      thousands of transactions daily
                    </span>
                    .
                  </p>
                  <p>
                    Currently leading frontend development at{" "}
                    <span className="text-fuchsia-400 font-semibold">
                      Velorona LLC
                    </span>
                    , architecting scalable CRM solutions with modern React
                    ecosystem.
                  </p>
                  <p>
                    BSc in Computing from Islington College. Passionate about{" "}
                    <span className="text-cyan-400 font-medium">
                      performance
                    </span>
                    ,{" "}
                    <span className="text-purple-400 font-medium">
                      accessibility
                    </span>
                    , and delightful user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map(({ cat, items, icon: Icon, color }, i) => (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-4`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-3">{cat}</h3>
                  <div className="flex flex-wrap gap-1">
                    {items.slice(0, 3).map((s, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-zinc-400"
                      >
                        {s}
                      </span>
                    ))}
                    {items.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-zinc-500">
                        +{items.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-fuchsia-900/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text tracking-widest mb-4">
              CAREER JOURNEY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Where I've{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text">
                Worked
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline tabs */}
            <div className="lg:w-64 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActiveExp(i)}
                  className={`relative px-6 py-4 rounded-xl text-left whitespace-nowrap transition-all duration-300 ${
                    activeExp === i
                      ? "bg-white/10 border border-white/20"
                      : "hover:bg-white/5"
                  }`}
                >
                  {activeExp === i && (
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r bg-gradient-to-b ${exp.color}`}
                    />
                  )}
                  <p
                    className={`font-semibold ${
                      activeExp === i ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p className="text-xs text-zinc-600">{exp.period}</p>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div
                className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${experiences[activeExp].color} text-sm font-medium mb-4`}
              >
                {experiences[activeExp].location}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {experiences[activeExp].role}
              </h3>
              <p
                className={`text-lg font-semibold bg-gradient-to-r ${experiences[activeExp].color} bg-clip-text text-transparent mb-6`}
              >
                {experiences[activeExp].company}
              </p>
              <ul className="space-y-4">
                {experiences[activeExp].highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-400">
                    <span
                      className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${experiences[activeExp].color} flex-shrink-0`}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text tracking-widest mb-4">
              SHOWCASE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text">
                Projects
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div className="relative p-8 bg-white/5 border border-white/10 group-hover:border-white/20 rounded-3xl backdrop-blur-sm h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl">{p.emoji}</span>
                    <ExternalLink
                      size={20}
                      className="text-zinc-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {p.name}
                  </h3>
                  <p className="text-zinc-400 mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-zinc-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Detail */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-violet-900/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text tracking-widest mb-4">
              TECH STACK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills &{" "}
              <span className="text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text">
                Expertise
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "React",
              "Vue.js",
              "TypeScript",
              "TailwindCSS",
              "Redux",
              "Zustand",
              "GraphQL",
              "Node.js",
              "Prisma",
              "Supabase",
              "PostgreSQL",
              "Vercel",
              "AWS",
              "Docker",
              "Figma",
              "Jest",
              "Cypress",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default text-zinc-300 hover:text-white hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text tracking-widest mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life. Let's connect and create
              something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="mailto:nimesh.maharjan.education@gmail.com"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 font-semibold">
                  <Mail size={20} />
                  nimesh.maharjan.education@gmail.com
                </span>
              </a>
              <a
                href="tel:+977-9843323200"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300 font-semibold"
              >
                <Phone size={20} />
                +977-9843323200
              </a>
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/nimeshmaharjan1" },
                { icon: Linkedin, href: "https://linkedin.com/in/nimesh" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2025 Nimesh Maharjan</p>
          {/* <p className="flex items-center gap-2">
            Built with <span className="text-red-500">♥</span> using Next.js &
            TailwindCSS
          </p> */}
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
