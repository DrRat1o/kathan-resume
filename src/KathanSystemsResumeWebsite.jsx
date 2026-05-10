export default function KathanSystemsResumeWebsite() {
  const sections = [
    {
      id: "01",
      title: "About",
      content: (
        <>
          <p className="leading-7 text-[15px] text-stone-700">
            I naturally gravitate toward understanding how software behaves once
            different layers, assumptions, and interactions start affecting each
            other. I usually end up caring more about understanding why
            something works than just getting it to work.
          </p>

          <p className="leading-7 text-[15px] text-stone-700 mt-5">
            Most of what I know came from building things, breaking them, and
            trying to understand why they failed in the first place. I tend to
            get pulled deeper into problems once they become interesting,
            especially when they involve architecture, scaling, internal
            behaviour, or unexpected failure modes.
          </p>

          <div className="mt-8 border-l border-stone-300 pl-4 text-[13px] font-mono text-stone-500 italic tracking-tight">
            // the most interesting behaviour usually starts once the system
            breaks a little.
          </div>
        </>
      ),
    },
    {
      id: "02",
      title: "Projects",
      content: (
        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-[18px] font-medium tracking-tight text-stone-900">
                  THE LEDGER
                </h3>
                <p className="font-mono text-[12px] text-stone-500 mt-1">
                  full-stack finance tracker · 2026
                </p>
              </div>

              <div className="flex gap-2 text-[12px] font-mono">
                <a
                  href="https://finance-tracker-three-gamma.vercel.app"
                  target="_blank"
                  className="rounded-full border border-stone-300 px-3 py-1.5 text-stone-700 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-400 hover:bg-stone-100"
                >
                  live ↗
                </a>

                <a
                  href="https://github.com/DrRat1o/Finance-Tracker"
                  target="_blank"
                  className="rounded-full border border-stone-300 px-3 py-1.5 text-stone-700 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-400 hover:bg-stone-100"
                >
                  github ↗
                </a>
              </div>
            </div>

            <div className="mt-4 font-mono text-[12px] text-stone-500">
              React · Vite · Supabase · PostgreSQL · Recharts · Vercel
            </div>

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-stone-700">
              <p>
                Built a full-stack finance tracker with a newspaper-styled UI —
                auth, real-time balance tracking, transaction management, and
                monthly analytics.
              </p>

              <p>
                Security turned into the most interesting part: ended up mapping
                how trust moves across layers — client, API, database — and
                implementing Row Level Security, trigger hardening, and layered
                validation because the system felt wrong without it.
              </p>

              <p>
                No course, no tutorial. Read documentation, hit errors, figured
                out why things broke. That back-and-forth between “what I
                thought it did” and “what it actually does” is where most of the
                real learning happened.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "Notes / Interests",
      content: (
        <div className="space-y-6">
          {[
            "I tend to enjoy projects more once I understand the assumptions and interactions underneath them.",
            "A lot of the problems that hold my attention longest involve systems behaving differently than expected once they become more complex.",
            "Most of my learning so far has come from experimenting, breaking things, and trying to understand why the behaviour changed.",
          ].map((idea, idx) => (
            <div
              key={idx}
              className="border border-stone-200 bg-stone-50/60 p-4 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-300 hover:bg-stone-50"
            >
              <p className="text-[14px] leading-7 text-stone-700">{idea}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-stone-900 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400;500&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f5f3ef;
        }

        .mono {
          font-family: 'DM Mono', monospace;
        }

        @media print {
          body {
            background: white;
          }

          .resume-shell {
            box-shadow: none !important;
            margin: 0 !important;
          }
        }
      `}</style>

      <div className="resume-shell max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="border border-stone-300 bg-[#faf9f6]">
          <header className="grid md:grid-cols-[1fr_260px] border-b border-stone-300">
            <div className="px-8 md:px-12 py-10 md:py-12 border-b md:border-b-0 md:border-r border-stone-300">
              <div className="mono text-[12px] tracking-wide text-stone-500">
                cs / systems / 2026
              </div>

              <h1 className="mt-4 text-[40px] md:text-[56px] leading-none tracking-[-0.04em] font-medium text-stone-950">
                Kathan Bhatt
              </h1>

              <div className="mt-5 max-w-2xl text-[16px] leading-8 text-stone-700">
                Currently interested in AI, systems, simulation, and
                understanding how software behaves beneath the surface once
                different components start interacting.
              </div>

              <div className="mt-8 flex flex-wrap gap-3 mono text-[12px]">
                <a
                  href="https://linkedin.com/in/kathan-bhatt"
                  target="_blank"
                  className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-400 hover:bg-stone-100"
                >
                  linkedin/kathan-bhatt
                </a>

                <a
                  href="https://github.com/DrRat1o"
                  target="_blank"
                  className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-400 hover:bg-stone-100"
                >
                  github/DrRat1o
                </a>

                <a
                  href="https://finance-tracker-three-gamma.vercel.app"
                  target="_blank"
                  className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-400 hover:bg-stone-100"
                >
                  the-ledger ↗
                </a>
              </div>
            </div>

            <div className="px-8 py-10 md:py-12 flex flex-col justify-between">
              <div>
                <div className="mono text-[11px] tracking-wide uppercase text-stone-400">
                  contact
                </div>

                <div className="mt-5 space-y-3">
                  <ContactField value="kathan.bhatt@gmail.com" />
                  <ContactField value="+91 98256 31880" />
                </div>
              </div>

              <div className="mt-10 mono text-[11px] leading-6 text-stone-400">
                KIIT University
                <br />
                B.Tech Computer Science
                <br />
                2024–2028
              </div>
            </div>
          </header>

          <main className="grid md:grid-cols-[1.45fr_0.55fr]">
            <div className="px-8 md:px-12 py-10 md:py-12 border-b md:border-b-0 md:border-r border-stone-300">
              <div className="space-y-16">
                {sections.map((section) => (
                  <section key={section.id}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="mono text-[12px] text-stone-400 tracking-wide">
                        {section.id}
                      </div>

                      <div className="h-px bg-stone-200 flex-1" />

                      <h2 className="text-[15px] tracking-tight text-stone-900 font-medium">
                        {section.title}
                      </h2>
                    </div>

                    {section.content}
                  </section>
                ))}
              </div>
            </div>

            <aside className="px-8 py-10 md:py-12">
              <div className="space-y-14">
                <section>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="mono text-[12px] text-stone-400 tracking-wide">
                      04
                    </div>

                    <div className="h-px bg-stone-200 flex-1" />

                    <h2 className="text-[15px] tracking-tight text-stone-900 font-medium">
                      Skills
                    </h2>
                  </div>

                  <div className="space-y-4 mono text-[12px] leading-6">
                    <SkillRow
                      label="lang"
                      value="Python, Java, C, C++, JavaScript, SQL"
                    />

                    <SkillRow label="front" value="React, Vite, Recharts" />

                    <SkillRow label="back" value="Supabase, PostgreSQL, RLS" />

                    <SkillRow label="tools" value="Git, Linux, Vercel" />

                    <SkillRow
                      label="focus"
                      value="Systems thinking, Architecture, Security, Problem solving"
                    />
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="mono text-[12px] text-stone-400 tracking-wide">
                      05
                    </div>

                    <div className="h-px bg-stone-200 flex-1" />

                    <h2 className="text-[15px] tracking-tight text-stone-900 font-medium">
                      Interests
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 mono text-[11px]">
                    {[
                      "ai/ml systems",
                      "simulation",
                      "distributed systems",
                      "automation",
                      "security",
                      "system design",
                      "computational modeling",
                      "quantum computing",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border border-stone-300 bg-stone-100 px-3 py-2 text-stone-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="mono text-[12px] text-stone-400 tracking-wide">
                      06
                    </div>

                    <div className="h-px bg-stone-200 flex-1" />

                    <h2 className="text-[15px] tracking-tight text-stone-900 font-medium">
                      Currently Learning
                    </h2>
                  </div>

                  <div className="mono text-[12px] leading-7 text-stone-600 border border-stone-200 bg-stone-50/50 p-4 transition-all duration-200 hover:-translate-y-[1px] hover:border-stone-300">
                    linear algebra · ml fundamentals · distributed systems ·
                    backend architecture
                  </div>
                </section>
              </div>
            </aside>
          </main>

          <footer className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center border-t border-stone-300 px-8 md:px-12 py-5 mono text-[11px] text-stone-400">
            <div>kathan.bhatt@gmail.com</div>

            <div className="text-center">kathan bhatt · 2026</div>

            <div className="text-left md:text-right">github/DrRat1o</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function ContactField({ value }) {
  const copy = () => navigator.clipboard.writeText(value);

  return (
    <div className="group flex items-center gap-2 mono text-[12px] text-stone-600">
      <span>{value}</span>

      <button
        onClick={copy}
        className="opacity-0 group-hover:opacity-100 transition text-stone-400 hover:text-green-700"
      >
        ⧉
      </button>
    </div>
  );
}

function SkillRow({ label, value }) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-3 items-start">
      <div className="text-stone-400">{label}</div>
      <div className="text-stone-700 leading-6">{value}</div>
    </div>
  );
}
