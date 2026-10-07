import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import {
  education,
  personalNotes,
  selectedProjects,
  skillsInventory,
  workExperience,
} from "./lib/constants";

export default function Portfolio() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("maharjannimesh11@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+353899492139");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#e4e6ee] font-sans antialiased selection:bg-[#262838] selection:text-white">
      {/* Centered clean container */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-20">
        {/* ===================== HEADER & INTRO ===================== */}
        <header className="space-y-7">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Dublin, Ireland
            </span>
            <span>2026 Portfolio</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Nimesh Maharjan
            </h1>
            <p className="text-lg text-zinc-300 font-serif italic">
              Frontend software engineer crafting fast, resilient web applications.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl font-light">
              I have 4+ years of experience building production interfaces with{" "}
              <span className="text-zinc-200 font-normal">React, Next.js, and TypeScript</span>.
              My background spans designing enterprise CRM modules at Velorona, automating
              institutional systems at NCAD, and migrating complex Vue apps. Currently pursuing an{" "}
              <span className="text-zinc-200 font-normal">MSc in Interactive Digital Media</span> at
              Griffith College Dublin.
            </p>
          </div>

          {/* Quick contact / social links */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-zinc-400">
            <button
              onClick={handleCopyEmail}
              className="hover:text-white transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300"
            >
              <Mail size={13} />
              <span>{copiedEmail ? "Copied email!" : "maharjannimesh11@gmail.com"}</span>
            </button>

            <span className="text-zinc-700">•</span>

            <button
              onClick={handleCopyPhone}
              className="hover:text-white transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300"
            >
              <Phone size={13} />
              <span>{copiedPhone ? "Copied phone!" : "+353 89 949 2139"}</span>
            </button>

            <span className="text-zinc-700">•</span>

            <a
              href="https://linkedin.com/in/nimesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href="https://github.com/nimeshmaharjan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href="/Nimesh_Maharjan_CV.pdf"
              download="Nimesh_Maharjan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-zinc-300 font-medium"
            >
              <Download size={13} />
              <span>Resume (.pdf)</span>
            </a>
          </div>
        </header>

        {/* ===================== WORK EXPERIENCE ===================== */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.08] pb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              01 / Experience
            </h2>
            <span className="text-xs font-mono text-zinc-600">4+ Years Total</span>
          </div>

          <div className="space-y-12">
            {workExperience.map((job, idx) => (
              <article key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <div>
                    <h3 className="font-semibold text-white inline">
                      {job.role}
                    </h3>
                    <span className="text-zinc-500 mx-2">at</span>
                    <span className="text-zinc-300">{job.company}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                  <MapPin size={11} /> {job.location}
                </div>

                {/* Narrative description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {job.narrative}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 pt-1">
                  {job.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-zinc-600 mt-1 select-none font-mono text-xs">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.stack.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================== SELECTED PROJECTS ===================== */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.08] pb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              02 / Selected Projects
            </h2>
            <span className="text-xs font-mono text-zinc-600">Production & Open Work</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {selectedProjects.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#12131a] border border-white/[0.07] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-baseline justify-between text-xs font-mono text-zinc-500">
                    <span>{p.year}</span>
                    <span className="text-zinc-400">{p.role}</span>
                  </div>

                  <h3 className="font-semibold text-white text-base">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {p.description}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed italic border-l-2 border-zinc-700 pl-3">
                    {p.takeaway}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/[0.05]">
                  {p.stack.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== TECHNICAL SKILLS ===================== */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.08] pb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              03 / Technical Skills
            </h2>
            <span className="text-xs font-mono text-zinc-600">Day-to-day tools</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillsInventory.map((cat, idx) => (
              <div key={idx} className="space-y-2.5">
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#12131a] border border-white/[0.06] text-zinc-300 hover:border-zinc-500 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== EDUCATION ===================== */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.08] pb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              04 / Education
            </h2>
            <span className="text-xs font-mono text-zinc-600">Dublin & London</span>
          </div>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <div>
                    <h3 className="font-semibold text-white inline">
                      {edu.degree}
                    </h3>
                    <span className="text-zinc-500 mx-2">—</span>
                    <span className="text-zinc-300">{edu.institution}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <span>{edu.location}</span>
                  {edu.grade && (
                    <>
                      <span>•</span>
                      <span className="text-zinc-200 font-semibold">{edu.grade}</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {edu.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.details.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== PERSONAL NOTES / BEYOND CODE ===================== */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.08] pb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              05 / Personal Notes
            </h2>
            <span className="text-xs font-mono text-zinc-600">Beyond the editor</span>
          </div>

          <div className="space-y-6">
            {personalNotes.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <h3 className="text-sm font-semibold text-zinc-200">
                  {item.topic}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== FOOTER & CONTACT ===================== */}
        <footer className="pt-16 pb-12 border-t border-white/[0.08] space-y-8 text-sm text-zinc-400 font-light">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <p className="text-zinc-200 font-medium text-base">Let's connect</p>
              <p className="text-xs text-zinc-400 font-mono">
                Open to frontend opportunities in Dublin, Ireland & remote teams.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="mailto:maharjannimesh11@gmail.com"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300"
              >
                Email
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://linkedin.com/in/nimesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300"
              >
                LinkedIn
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://nimesh-maharjan.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-300"
              >
                nimesh-maharjan.com.np
              </a>
            </div>
          </div>

          <p className="text-xs font-mono text-zinc-500 pt-2 border-t border-white/[0.05]">
            © 2026 Nimesh Maharjan • Handcrafted with React, Next.js conventions & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
