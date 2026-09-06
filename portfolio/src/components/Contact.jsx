import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-4xl mx-auto glass-panel p-10 sm:p-16 rounded-3xl text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Let's Connect</h2>
        <p className="text-slate-300 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-normal">
          Whether you have an opportunity, project idea, or simply want to connect, my inbox is always open.
        </p>

        {/* Email Direct Contact Card */}
        <div className="mb-10 inline-block bg-slate-900/90 border border-slate-800 px-8 py-5 rounded-2xl">
          <p className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-1">Direct Email</p>
          <a
            href="mailto:varnapriya05@gmail.com"
            className="text-xl sm:text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            varnapriya2659@gmail.com
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:varnapriya2659@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-600/25 active:scale-95"
          >
            Send Email
          </a>
          <a
            href="https://github.com/varna-priya"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 glass-panel text-slate-100 font-bold rounded-xl hover:bg-slate-800/60 transition-all active:scale-95"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}