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

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:varnapriya2659@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-teal-500/20 active:scale-95"
          >
            Send Email
          </a>

          <a
            href="https://github.com/varna-priya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 border border-slate-700 bg-slate-800/80 text-slate-200 font-bold rounded-xl hover:bg-slate-700 transition-all active:scale-95"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/varnapriya-k-a72021295/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 border border-slate-700 bg-blue-600/20 text-blue-300 border-blue-500/40 font-bold rounded-xl hover:bg-blue-600/30 transition-all active:scale-95"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}