export default function Hero() {
  return (
    <section id="about" className="min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium tracking-wide">
            AI & Deep Learning Engineer
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Varnapriya K</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            Undergraduate Engineering student specializing in Deep Learning, Computer Vision, and full-stack software development. Passionate about building high-performance AI architectures and scalable systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-teal-500/20 active:scale-95"
            >
              View Featured Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 border border-slate-700 bg-slate-900/60 text-slate-200 font-semibold rounded-xl hover:bg-slate-800 transition-all active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column: Professional Profile Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900">
              <img
                src="/profile.jpeg"
                alt="Varnapriya K"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}