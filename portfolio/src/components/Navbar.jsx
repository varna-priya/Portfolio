import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-8 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-extrabold tracking-tight text-white flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          Varnapriya K
        </a>
        
        <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-slate-200">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>

        <a 
          href="https://github.com/varna-priya" 
          target="_blank" 
          rel="noreferrer" 
          className="px-5 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-md shadow-blue-500/20"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}