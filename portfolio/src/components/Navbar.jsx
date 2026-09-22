import React from 'react';

export default function Navbar() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Badge */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center font-extrabold text-teal-400 text-sm">
            VK
          </div>
          <span className="font-bold text-slate-100 text-sm tracking-wide hidden sm:inline-block">
            Varnapriya K
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="https://github.com/varna-priya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </nav>
  );
}