import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 font-sans min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900/80">
        © {new Date().getFullYear()} Varnapriya K. Designed & Built with React and Tailwind CSS.
      </footer>
    </div>
  );
}