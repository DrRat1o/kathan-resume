import { Phone, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

// ── data ────────────────────────────────────────────────────────────────────

const INTERESTS = [
  "ai/ml systems",
  "emergent behaviour",
  "multi-agent systems",
  "simulation & modeling",
  "quantum computing",
  "distributed systems",
  "complex systems",
  "automation",
];

const SKILLS = [
  { label: "lang", value: "Python, Java, C, C++, JavaScript, SQL, HTML/CSS" },
  { label: "front", value: "React, Vite, Recharts" },
  { label: "back", value: "Supabase, PostgreSQL, RLS" },
  { label: "tools", value: "Git, Linux, Vercel" },
  {
    label: "ideas",
    value: "Systems architecture, API design, Auth flows, Data validation",
  },
];

const COURSES = ["OS", "DBMS", "Discrete Math", "COA", "OOP (Java)", "DSA"];

// ── main component ───────────────────────────────────────────────────────────

export default function KathanResume() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] text-stone-900">
      <div className="resume-shell max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="border border-stone-300 bg-[#faf9f6] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          {/* ── HEADER ── */}
          <header className="grid md:grid-cols-[1fr_260px] border-b border-stone-300">
            {/* name + tagline */}
            <div className="px-8 md:px-12 py-10 md:py-12 border-b md:border-b-0 md:border-r border-stone-300">
              <p className="mono text-[11px] tracking-widest text-stone-400 uppercase">
                cs / 2024–2028
              </p>
              <h1 className="mt-4 text-[40px] md:text-[52px] leading-none tracking-[-0.04em] font-medium text-stone-950">
                Kathan Bhatt
              </h1>
              <p className="mt-5 text-[15px] leading-7 text-stone-600 max-w-lg">
                B.Tech Computer Science · KIIT University · 3rd Year
                <br />
                AI · Simulation · Distributed Systems · Intelligent Systems
              </p>
            </div>

            {/* contact + links */}
            <div className="px-8 py-10 md:py-12 flex flex-col justify-between gap-8">
              <div>
                <p className="mono text-[10px] tracking-widest uppercase text-stone-400 mb-4">
                  contact
                </p>
                <div className="space-y-2.5">
                  <ContactField value="kathan.bhatt@gmail.com" icon="mail" />
                  <ContactField value="+91 98256 31880" icon="phone" />
                </div>
              </div>
              <div className="border-t border-stone-200 pt-5 space-y-3">
                <LinkField
                  href="https://linkedin.com/in/kathan-bhatt"
                  value="linkedin/kathan-bhatt"
                  icon="linkedin"
                />
                <LinkField
                  href="https://github.com/DrRat1o"
                  value="github/DrRat1o"
                  icon="github"
                />
                <LinkField
                  href="https://finance-tracker-three-gamma.vercel.app"
                  value="the-ledger ↗"
                  icon="external"
                />
              </div>
            </div>
          </header>

          {/* ── BODY ── */}
          <main className="grid md:grid-cols-[1.45fr_0.55fr]">
            {/* left — narrative */}
            <div className="px-8 md:px-12 py-10 md:py-12 border-b md:border-b-0 md:border-r border-stone-300 space-y-14">
              {/* 01 About */}
              <section className="print-safe">
                <SectionHead id="01" title="About" />
                <p className="text-[15px] leading-7 text-stone-700">
                  I think in systems — how components interact, where trust and
                  information propagate across layers, and what behaviour
                  emerges from those interactions at scale. I'm more interested
                  in understanding why something works than in the fact that it
                  does.
                </p>
                <p className="mt-4 text-[15px] leading-7 text-stone-700">
                  Most of what I know came from building things and breaking
                  them. I follow problems past the point where they're
                  comfortable, and I find the architectural questions more
                  interesting than the implementation ones.
                </p>
                <div className="mt-7 border-l border-stone-300 pl-4 mono text-[12px] text-stone-500 leading-6">
                  // understanding the system matters more than shipping it.
                </div>
              </section>

              {/* 02 Project */}
              <section className="print-safe">
                <SectionHead id="02" title="Project" />
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-[15px] font-medium tracking-tight text-stone-900">
                      The Ledger — Finance Tracker
                    </h3>
                    <p className="mono text-[11px] text-stone-400 mt-1">
                      full-stack · 2026 · deployed
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <PillLink href="https://finance-tracker-three-gamma.vercel.app">
                      live ↗
                    </PillLink>
                    <PillLink href="https://github.com/DrRat1o/Finance-Tracker">
                      github ↗
                    </PillLink>
                  </div>
                </div>
                <p className="mono text-[11px] text-stone-400 mt-4">
                  React · Vite · Supabase · PostgreSQL · Recharts · Vercel
                </p>
                <div className="mt-5 space-y-3.5 text-[14px] leading-7 text-stone-700">
                  <p>
                    Built a full-stack finance tracker with a newspaper-styled
                    UI — auth, real-time balance tracking, transaction
                    management, and monthly analytics.
                  </p>
                  <p>
                    Security turned into the most interesting part: ended up
                    mapping how trust moves across layers — client, API,
                    database — and implementing Row Level Security, trigger
                    hardening, and layered validation because the system felt
                    wrong without it.
                  </p>
                  <p>
                    No course, no tutorial. Read documentation, hit errors,
                    figured out why things broke. That back-and-forth between
                    "what I thought it did" and "what it actually does" is where
                    most of the real learning happened.
                  </p>
                </div>
              </section>

              {/* 03 Interests */}
              <section className="print-safe">
                <SectionHead id="03" title="Interests" />
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((item) => (
                    <span
                      key={item}
                      className="mono text-[11px] border border-stone-200 bg-[#f5f3ef] px-3 py-1.5 text-stone-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* right — structured */}
            <aside className="px-8 py-10 md:py-12 space-y-12">
              {/* 04 Skills */}
              <section className="print-safe">
                <SectionHead id="04" title="Skills" />
                <div className="space-y-3.5 mono text-[12px]">
                  {SKILLS.map(({ label, value }) => (
                    <SkillRow key={label} label={label} value={value} />
                  ))}
                </div>
              </section>

              {/* 05 Education */}
              <section className="print-safe">
                <SectionHead id="05" title="Education" />
                <p className="mono text-[12px] text-stone-700 font-medium leading-6">
                  B.Tech Computer Science
                </p>
                <p className="mono text-[11px] text-stone-400 mt-0.5">
                  KIIT University · 2024–2028
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {COURSES.map((c) => (
                    <span
                      key={c}
                      className="mono text-[10px] border border-stone-200 bg-[#f5f3ef] px-2 py-1 text-stone-500"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </main>

          {/* ── FOOTER ── */}
          <footer className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center border-t border-stone-300 px-8 md:px-12 py-5 mono text-[11px] text-stone-400">
            <span>kathan.bhatt@gmail.com</span>
            <span className="text-center">kathan bhatt · 2026</span>
            <span className="text-left md:text-right">github/DrRat1o</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

// ── sub-components ───────────────────────────────────────────────────────────

function SectionHead({ id, title }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="mono text-[11px] text-stone-400 tracking-wide">
        {id}
      </span>
      <div className="h-px bg-stone-200 flex-1" />
      <h2 className="mono text-[11px] tracking-widest uppercase text-stone-400 font-medium">
        {title}
      </h2>
    </div>
  );
}

function PillLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mono text-[11px] border border-stone-300 px-3 py-1.5 text-stone-600 transition-all duration-200 hover:-translate-y-px hover:border-stone-400 hover:bg-stone-100"
    >
      {children}
    </a>
  );
}

function ContactField({ value, icon }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group flex items-center gap-2.5 cursor-default">
      <ContactIcon type={icon} />
      <span className="mono text-[12px] text-stone-600 select-all">
        {value}
      </span>
      <button
        onClick={copy}
        aria-label="Copy to clipboard"
        className="opacity-0 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200"
      >
        {copied ? (
          <Check className="w-[12px] h-[12px] text-green-600" strokeWidth={2} />
        ) : (
          <Copy
            className="w-[12px] h-[12px] text-stone-400 hover:text-stone-600 transition-colors"
            strokeWidth={1.8}
          />
        )}
      </button>
    </div>
  );
}

function LinkField({ href, value, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-2.5"
    >
      <ContactIcon type={icon} />
      <span className="mono text-[12px] text-stone-500 transition-colors duration-200 group-hover:text-stone-900">
        {value}
      </span>
    </a>
  );
}

function ContactIcon({ type }) {
  const cls =
    "w-[13px] h-[13px] text-stone-400 group-hover:text-stone-600 transition-colors duration-200 flex-shrink-0";
  const mono =
    "mono text-[11px] leading-none text-stone-400 group-hover:text-stone-600 transition-colors duration-200";

  if (type === "mail") return <span className={mono}>✉</span>;
  if (type === "phone") return <Phone className={cls} strokeWidth={1.8} />;
  if (type === "linkedin") return <span className={mono}>in</span>;
  if (type === "external")
    return <ExternalLink className={cls} strokeWidth={1.8} />;

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cls}
        fill="currentColor"
      >
        <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.33 3.31 1.23a11.5 11.5 0 0 1 6.03 0c2.3-1.56 3.31-1.23 3.31-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.23 0 1.61-.01 2.91-.01 3.3 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63 0.5 12 0.5z" />
      </svg>
    );
  }

  return <ExternalLink className={cls} strokeWidth={1.8} />;
}

function SkillRow({ label, value }) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-3 items-start">
      <span className="text-stone-400">{label}</span>
      <span className="text-stone-600 leading-6">{value}</span>
    </div>
  );
}
