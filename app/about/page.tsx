'use client'

export default function AboutPage() {
  return (
    <main className="bg-black text-white px-6 min-h-screen pt-24 pb-24">
      
      {/* PAGE HEADER */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-sm text-blue-500 font-mono tracking-[0.3em] uppercase mb-4">// Origin Story</h1>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          Moja Ścieżka
        </h2>
        <p className="mt-4 text-gray-400 font-mono text-sm max-w-2xl mx-auto">
          Od automatyki przemysłowej i robotów KUKA po interaktywne aplikacje webowe 3D.
        </p>
      </div>

      {/* EDUCATION SECTION */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl font-bold border-b border-gray-800 pb-2 mb-8 uppercase tracking-widest text-blue-400">
          Education_
        </h2>
        
        <div className="space-y-8">
          <div className="relative border-l-2 border-blue-500 pl-8 ml-2">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_15px_#3b82f6]" />
            <h3 className="text-xl font-bold text-white uppercase">MSc in Games and Internet Technologies</h3>
            <p className="text-blue-400 font-mono font-bold mt-1 text-sm">Poznan University of Technology (PUT)</p>
            <p className="text-gray-500 text-xs mt-1">2024 — 2026 | Poznan, Poland</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-lg font-bold text-gray-200 uppercase">BEng in Engineering (Double Degree)</h3>
            <p className="text-gray-400 font-mono mt-1 text-xs">ANS Gniezno (Akademia Nauk Stosowanych)</p>
            <p className="text-gray-500 text-xs mt-1">2021 — 2025 | Gniezno, Poland</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-lg font-bold text-gray-200 uppercase">BEng in Engineering and Pedagogy</h3>
            <p className="text-gray-400 font-mono mt-1 text-xs">Uman State Pedagogical University (USPU)</p>
            <p className="text-gray-500 text-xs mt-1">2021 — 2025 | Uman, Ukraine</p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl font-bold border-b border-gray-800 pb-2 mb-8 uppercase tracking-widest text-blue-400">
          Tech_Stack_
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-mono">
          <div className="p-4 border border-gray-900 bg-gray-950/50 rounded-lg hover:border-blue-900 transition-colors">
            <h4 className="text-white text-xs mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Languages</h4>
            <ul className="text-xs space-y-2 text-gray-400">
              <li>{'>'} C / C++ / C#</li>
              <li>{'>'} JavaScript / TypeScript</li>
              <li>{'>'} Java / Python</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-900 bg-gray-950/50 rounded-lg hover:border-blue-900 transition-colors">
            <h4 className="text-white text-xs mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Game Dev & 3D</h4>
            <ul className="text-xs space-y-2 text-gray-400">
              <li>{'>'} Unreal Engine / Unity</li>
              <li>{'>'} Three.js / WebGL</li>
              <li>{'>'} Browser Games (GPR)</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-900 bg-gray-950/50 rounded-lg hover:border-blue-900 transition-colors">
            <h4 className="text-white text-xs mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Web & Backend</h4>
            <ul className="text-xs space-y-2 text-gray-400">
              <li>{'>'} React / Next.js</li>
              <li>{'>'} Node.js / Express</li>
              <li>{'>'} SQL / MongoDB</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-900 bg-gray-950/50 rounded-lg hover:border-blue-900 transition-colors">
            <h4 className="text-white text-xs mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Testing & Tools</h4>
            <ul className="text-xs space-y-2 text-gray-400">
              <li>{'>'} JMeter (Performance)</li>
              <li>{'>'} App Testing</li>
              <li>{'>'} Git / Project Management</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-900 bg-gray-950/50 rounded-lg hover:border-blue-900 transition-colors">
            <h4 className="text-white text-xs mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Hardware / IoT</h4>
            <ul className="text-xs space-y-2 text-gray-400">
              <li>{'>'} Arduino / Raspberry Pi</li>
              <li>{'>'} LCN Building Automation</li>
              <li>{'>'} KUKA Robotics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold border-b border-gray-800 pb-2 mb-8 uppercase tracking-widest text-blue-400">
          Experience_
        </h2>
        <div className="space-y-8">
          <div className="relative border-l-2 border-gray-600 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-lg font-bold text-white uppercase">Erasmus+ Mobility Program</h3>
            <p className="text-blue-400 font-mono text-xs mt-1">Lithuania | May 2024 — June 2024</p>
            <p className="text-gray-400 mt-2 text-xs italic">Academic exchange and international collaboration experience.</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-lg font-bold text-white uppercase">Manager @ Coding School & Sales</h3>
            <p className="text-gray-500 font-mono text-xs mt-1">2023 — 2024</p>
            <p className="text-gray-400 mt-2 text-xs">Managed operations in a programming school and led sales initiatives.</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-lg font-bold text-white uppercase">Computer Science Teacher</h3>
            <p className="text-gray-500 font-mono text-xs mt-1">2021 — 2023</p>
            <p className="text-gray-400 mt-2 text-xs">Taught fundamental IT concepts and logic to children.</p>
          </div>
        </div>
      </section>

    </main>
  );
}