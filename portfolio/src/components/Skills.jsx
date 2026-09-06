import React from 'react';

export default function Skills() {
  const categories = [
    {
      name: "Programming Languages",
      skills: ["Java", "SQL", "JavaScript", "HTML5 / CSS3"]
    },
    {
      name: "Backend & Architecture",
      skills: ["Spring Boot", "RESTful APIs", "Spring Data JPA", "Hibernate", "MySQL"]
    },
    {
      name: "Frontend & Deep Learning",
      skills: ["React", "Tailwind CSS", "Vite", "ResNet-50", "Computer Vision"]
    },
    {
      name: "Tools & Ecosystem",
      skills: ["Git & GitHub", "IntelliJ IDEA", "VS Code", "Netlify", "Render"]
    }
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Technical Stack</h2>
          <p className="text-slate-300 text-lg sm:text-xl">Core technologies, frameworks, and developer tools in my tech stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl transition-all">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="w-2 h-7 bg-blue-500 rounded-full" />
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-5 py-2.5 bg-slate-900 text-slate-100 text-base font-semibold rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}