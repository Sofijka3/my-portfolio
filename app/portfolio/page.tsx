'use client'

export default function PortfolioPage() {
  const projects = [
    {
      title: "System Performance Evaluation",
      problem: "Potrzeba weryfikacji wydajności i stabilności systemu pod dużym obciążeniem.",
      stack: ["JMeter", "QA", "Analysis"],
      solution: "Przeprowadzenie testów wydajnościowych, analiza wąskich gardeł (bottlenecks) oraz optymalizacja obsługi żądań."
    },
    {
      title: "3D Game Prototype",
      problem: "Zaprojektowanie angażującej mechaniki gry z zaawansowaną fizyką.",
      stack: ["Unreal Engine", "C++", "Unity"],
      solution: "Stworzenie w pełni grywalnego prototypu z autorskimi skryptami interakcji fizycznych i płynnym sterowaniem."
    },
    {
      title: "IoT Hardware Integration",
      problem: "Brak fizycznego interfejsu do sterowania cyfrowymi systemami.",
      stack: ["Arduino", "Raspberry Pi", "Sensors"],
      solution: "Zbudowanie układu opartego na mikrokontrolerach, integrującego czujniki ruchu i kontrolery fizyczne z aplikacją."
    },
    {
      title: "Fullstack Web Management",
      problem: "Konieczność stworzenia wydajnego panelu do zarządzania danymi w czasie rzeczywistym.",
      stack: ["React", "Svelte", "Node.js", "PostgreSQL"],
      solution: "Zaprojektowanie responsywnego frontendu i stabilnego API, połączonego z relacyjną bazą danych."
    }
  ];

  return (
    <main className="bg-black text-white px-6 min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-sm text-blue-500 font-mono tracking-[0.3em] uppercase mb-4">// Labs</h1>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          Case Studies
        </h2>
        <p className="mt-4 text-gray-400 font-mono text-sm max-w-2xl mx-auto">
          Przegląd zrealizowanych projektów inżynierskich i programistycznych.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border border-gray-800 rounded-2xl bg-gray-900/20 hover:border-blue-500 transition-all group">
            <h3 className="text-xl font-bold mb-4 uppercase text-gray-200 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <div className="space-y-3 mb-6">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Problem:</span>
                <p className="text-gray-400 text-sm mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Rozwiązanie:</span>
                <p className="text-gray-300 text-sm mt-1">{project.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] text-blue-500 font-mono italic mt-auto border-t border-gray-800 pt-4">
              {project.stack.map((tech, i) => (
                <span key={i} className="bg-blue-900/20 px-2 py-1 rounded">#{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}