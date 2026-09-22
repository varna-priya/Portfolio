import React from 'react';

export default function Hero() {
  const socialLinks = [
    {
      platform: 'LINKEDIN',
      handle: 'in/varnapriya-k',
      url: 'https://www.linkedin.com/in/varnapriya-k',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      platform: 'GITHUB',
      handle: 'varna-priya',
      url: 'https://github.com/varna-priya',
      icon: (
        <svg className="w-5 h-5 text-slate-200" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
    {
      platform: 'EMAIL • DIRECT',
      handle: 'varnapriya2659@gmail.com',
      url: 'mailto:varnapriya2659@gmail.com',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  return (
    /* pt-28 (top padding) ensures content sits comfortably below the fixed navbar */
    <section id="hero" className="pt-28 pb-12 px-6 max-w-6xl mx-auto min-h-[85vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        
        {/* Left Column: Bio & Title */}
        <div className="lg:col-span-7 text-left">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-300">
              Software & Full-Stack Engineer • Open to Opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-snug mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Varnapriya.</span><br />
            I develop scalable full-stack applications and intelligent web solutions.
          </h1>

          {/* Subtitle Bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
            Software engineer skilled in React interfaces, Java Spring Boot REST APIs, relational databases, and integrating computer vision pipelines into production software.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all shadow-md shadow-teal-500/20 flex items-center gap-2 active:scale-95 text-sm"
            >
              Explore Projects
              <span>→</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-200 font-bold rounded-lg transition-all active:scale-95 flex items-center gap-2 text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-1 text-left">
            Find me on
          </div>

          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700/80 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/50 group-hover:bg-slate-700/60 transition-colors">
                  {item.icon}
                </div>
                <div className="text-left truncate">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.platform}
                  </span>
                  <span className="block text-sm font-semibold text-slate-200 truncate">
                    {item.handle}
                  </span>
                </div>
              </div>

              <span className="text-slate-400 group-hover:text-slate-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-base font-light ml-2">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}