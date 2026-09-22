export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
          Let's Connect
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
          Whether you have an opportunity, a project idea, or simply want to connect, my inbox is always open.
        </p>

        <div className="mb-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 inline-block">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
            Direct Email
          </span>
          <span className="text-slate-100 font-mono text-base sm:text-lg select-all">
            varnapriya2659@gmail.com
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="mailto:varnapriya2659@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-panel text-slate-100 font-bold rounded-xl hover:bg-slate-800/60 transition-all active:scale-95 border border-slate-700/80 bg-slate-900/60"
          >
            Send Email
          </a>

          <a
            href="https://github.com/varna-priya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-panel text-slate-100 font-bold rounded-xl hover:bg-slate-800/60 transition-all active:scale-95 border border-slate-700/80 bg-slate-900/60"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/varnapriya-k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-panel text-slate-100 font-bold rounded-xl hover:bg-slate-800/60 transition-all active:scale-95 border border-slate-700/80 bg-slate-900/60"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}