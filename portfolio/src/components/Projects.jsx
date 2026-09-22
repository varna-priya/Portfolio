import { useState } from 'react';

const projects = [
  {
    title: "Next-Gen Fabric Matching (MatchMyFabric)",
    category: "AI & Computer Vision",
    description: "Fine-tuned ResNet-50 feature extraction pipeline utilizing 2,048-dimensional embeddings and cosine similarity to perform automated fabric matching via a Raspberry Pi camera interface.",
    tech: ["ResNet-50", "Deep Learning", "Python", "MySQL", "Raspberry Pi"],
    github: "https://github.com/varna-priya",
  },
  {
    title: "Placement Eligibility Checker",
    category: "Full-Stack Web Application",
    description: "Enterprise placement evaluation portal built with Spring Boot REST APIs and React. Automates student eligibility verification against multi-tier corporate criteria.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/varna-priya",
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-slate-400 mt-2 text-base sm:text-lg">
          Key architectural and machine learning implementations
        </p>
      </div>

      {/* Slideshow Container */}
      <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md min-h-[360px] flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            {projects[currentIndex].category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-2 mb-4">
            {projects[currentIndex].title}
          </h3>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
            {projects[currentIndex].description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {projects[currentIndex].tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-800 border border-slate-700/60 text-slate-300 text-xs font-medium rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-6 mt-auto">
          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-teal-400" : "w-2.5 bg-slate-700"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition active:scale-95"
              aria-label="Previous Slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition active:scale-95"
              aria-label="Next Slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}