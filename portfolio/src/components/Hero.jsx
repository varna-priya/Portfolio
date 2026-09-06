import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-sm font-mono mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for AI & Software Engineering Roles
        </div>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-white mb-6 leading-tight">
          Building Intelligent Systems & <span className="gradient-text">AI Solutions</span>
        </h1>

        <p className="text-slate-300 text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          Hi, I'm <strong className="text-white font-semibold">Varnapriya K</strong>. An Engineer passionate about <span className="text-purple-400 font-medium">Artificial Intelligence, Computer Vision, and Deep Learning</span>, combined with strong foundations in Java, Spring Boot, and Web Applications.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="#projects"
            className="px-9 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-600/25 active:scale-95"
          >
            Explore AI & Work
          </a>
          <a
            href="#contact"
            className="px-9 py-4 text-lg glass-panel text-slate-100 font-bold rounded-xl hover:bg-slate-800/60 transition-all active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}