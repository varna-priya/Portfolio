import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Next-Gen Fabric Matching (MatchMyFabric)",
      category: "Computer Vision & AI",
      description: "AI-powered fabric recommendation engine utilizing fine-tuned ResNet-50 vector extraction and cosine similarity search to match sarees with complementary blouse choices.",
      tags: ["ResNet-50", "Python", "MySQL", "Raspberry Pi"],
      link: "https://github.com/varna-priya"
    },
    {
      title: "Placement Eligibility Checker",
      category: "Full-Stack Web Application",
      description: "Web application automating eligibility checks and criteria verification for campus placement recruitment drives with real-time status reporting.",
      tags: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      link: "https://github.com/varna-priya"
    },
    {
      title: "Smart Lab Inventory & Component Tracker",
      category: "System Architecture",
      description: "Inventory tracking application architecture built to audit, manage, and streamline hardware component equipment loans in laboratory environments.",
      tags: ["React", "Spring Boot", "MySQL", "System Architecture"],
      link: "https://github.com/varna-priya"
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Featured Work</h2>
          <p className="text-slate-300 text-lg sm:text-xl">A selection of my recent engineering projects, full-stack systems, and AI models.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl flex flex-col justify-between transition-all group">
              <div>
                <span className="text-sm font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4 font-semibold">
                  {p.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                  {p.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {p.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-slate-200 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-base font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Code Repository
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}