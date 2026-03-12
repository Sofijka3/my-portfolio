'use client'

import Scene from '@/components/Scene'

export default function Home() {
  return (
    <main className="bg-black text-white px-6">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl md:text-6xl font-bold italic underline decoration-blue-500 text-center uppercase tracking-tighter">
          Sofiia Zhovnik // Engineer
        </h1>
        <p className="mt-4 text-gray-400 font-mono tracking-[0.3em] text-xs uppercase text-center">
          Games & Internet Technologies // Poznan University of Technology
        </p>
        
        <div className="mt-10 w-full max-w-xl p-2 border border-blue-900/50 rounded-2xl bg-gray-950 shadow-2xl shadow-blue-950/30">
          <Scene />
          <div className="p-4 bg-gray-900 rounded-b-xl border-t border-gray-800 text-center">
             <p className="text-blue-400 font-bold tracking-widest uppercase text-[10px]">
               DevBot v0.1 // Hardware & Software Interaction
             </p>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="about" className="py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 mb-12 uppercase tracking-tighter">
          Education
        </h2>
        
        <div className="space-y-12">
          <div className="relative border-l-2 border-blue-500 pl-8 ml-2">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_15px_#3b82f6]" />
            <h3 className="text-2xl font-bold text-white uppercase">MSc in Games and Internet Technologies</h3>
            <p className="text-blue-400 font-mono font-bold mt-1">Poznan University of Technology (PUT)</p>
            <p className="text-gray-500 text-xs mt-1">2024 — 2026 | Poznan, Poland</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-xl font-bold text-gray-200">BEng in Engineering (Double Degree)</h3>
            <p className="text-blue-500/80 font-mono mt-1 text-sm text-gray-300">ANS Gniezno (Akademia Nauk Stosowanych)</p>
            <p className="text-gray-500 text-xs mt-1">2021 — 2025 | Gniezno, Poland</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-xl font-bold text-gray-200">BEng in Engineering and Pedagogy</h3>
            <p className="text-blue-500/80 font-mono mt-1 text-sm text-gray-300">Uman State Pedagogical University (USPU)</p>
            <p className="text-gray-500 text-xs mt-1 font-mono italic text-[10px]">Faculty of Engineering and Pedagogical Education</p>
            <p className="text-gray-500 text-xs mt-1">2021 — 2025 | Uman, Ukraine</p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 max-w-4xl mx-auto border-t border-gray-900">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 mb-12 uppercase tracking-tighter">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-mono">
          <div>
            <h4 className="text-blue-400 text-xs mb-4 uppercase tracking-widest">// Languages</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>C / C++ / C#</li>
              <li>JavaScript / TypeScript</li>
              <li>Java / Python</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 text-xs mb-4 uppercase tracking-widest">// Game Dev & 3D</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>Unreal Engine / Unity</li>
              <li>Three.js / WebGL</li>
              <li>Browser Games (GPR)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 text-xs mb-4 uppercase tracking-widest">// Web & Backend</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>React / Next.js / Svelte</li>
              <li>Node.js / Express</li>
              <li>SQL / MongoDB / pgAdmin</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 text-xs mb-4 uppercase tracking-widest">// Testing & Tools</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>JMeter (Performance)</li>
              <li>App Testing</li>
              <li>Git / Project Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 text-xs mb-4 uppercase tracking-widest">// Hardware / IoT</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>Arduino / Raspberry Pi</li>
              <li>Sensors & Controllers</li>
              <li>Physical Object Interaction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 max-w-4xl mx-auto border-t border-gray-900">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 mb-12 uppercase tracking-tighter">
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-800 rounded-2xl bg-gray-900/20 hover:border-blue-500 transition-all">
            <h3 className="text-lg font-bold mb-2 uppercase">System Performance Evaluation</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Testing computer system efficiency using <b>JMeter</b>. Analysis of bottlenecks and load handling.
            </p>
            <div className="flex gap-2 text-[10px] text-gray-600 font-mono italic">
              <span>#JMeter</span> <span>#QA</span> <span>#Analysis</span>
            </div>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl bg-gray-900/20 hover:border-blue-500 transition-all">
            <h3 className="text-lg font-bold mb-2 uppercase">3D Game Prototype</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Developed game mechanics in <b>Unreal Engine</b> and <b>Unity</b>, focusing on physics and player interaction.
            </p>
            <div className="flex gap-2 text-[10px] text-gray-600 font-mono italic">
              <span>#UnrealEngine</span> <span>#C++</span> <span>#Unity</span>
            </div>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl bg-gray-900/20 hover:border-blue-500 transition-all">
            <h3 className="text-lg font-bold mb-2 uppercase">IoT Hardware Integration</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Building systems with <b>Arduino</b> and <b>Raspberry Pi</b>, incorporating motion sensors and physical controllers.
            </p>
            <div className="flex gap-2 text-[10px] text-gray-600 font-mono italic">
              <span>#Arduino</span> <span>#Hardware</span> <span>#IoT</span>
            </div>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl bg-gray-900/20 hover:border-blue-500 transition-all">
            <h3 className="text-lg font-bold mb-2 uppercase">Fullstack Web Management</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Creating web applications using <b>React</b> and <b>Svelte</b> with <b>PostgreSQL/MongoDB</b> database management.
            </p>
            <div className="flex gap-2 text-[10px] text-gray-600 font-mono italic">
              <span>#Svelte</span> <span>#Postgres</span> <span>#NodeJS</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 max-w-4xl mx-auto border-t border-gray-900">
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 mb-12 uppercase tracking-tighter">
          Experience
        </h2>
        <div className="space-y-12">
          <div className="relative border-l-2 border-yellow-500/50 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -left-[7.5px] top-1 shadow-[0_0_10px_#eab308]" />
            <h3 className="text-xl font-bold text-white uppercase">Erasmus+ Mobility Program</h3>
            <p className="text-yellow-500 font-mono text-xs">Lithuania | May 2024 — June 2024</p>
            <p className="text-gray-400 mt-2 text-sm italic">Academic exchange and international collaboration experience.</p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-xl font-bold text-white uppercase">Manager @ Coding School & Sales</h3>
            <p className="text-blue-400 font-mono text-xs">2023 — 2024</p>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Managed operations in a programming school and led sales initiatives, improving organizational workflows.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-800 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7.5px] top-1" />
            <h3 className="text-xl font-bold text-white uppercase">Computer Science Teacher</h3>
            <p className="text-blue-400 font-mono text-xs">2021 — 2023</p>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Taught fundamental IT concepts and logic to children, simplifying complex technical topics.
            </p>
          </div>

          <div className="relative border-l-2 border-green-500/50 pl-8 ml-2">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7.5px] top-1 shadow-[0_0_10px_#22c55e]" />
            <h3 className="text-xl font-bold text-white uppercase">Network Engineering Intern</h3>
            <p className="text-green-500 font-mono text-xs">"Team" ISP | Summer 2023</p>
            <p className="text-gray-400 mt-2 text-sm italic">Assisted in network infrastructure maintenance and service deployment.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 text-center border-t border-gray-900 bg-gradient-to-b from-black to-blue-950/20 px-4">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-white">Get in touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <a href="https://github.com/Sofijka3" target="_blank" rel="noopener noreferrer" 
             className="p-6 border border-gray-800 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm uppercase">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sofiia-zhovnik/" target="_blank" rel="noopener noreferrer"
             className="p-6 border border-gray-800 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 font-mono text-sm uppercase text-gray-300">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026111075149" target="_blank" rel="noopener noreferrer"
             className="p-6 border border-gray-800 rounded-xl hover:bg-blue-800 transition-all duration-300 font-mono text-sm uppercase text-gray-300">
            Facebook
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('sofiia.zhovnik@student.put.poznan.pl');
              alert('Mail copied to clipboard!');
            }}
            className="p-6 border border-gray-800 rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-300 font-mono text-xs relative group uppercase text-gray-300"
          >
            <span className="group-hover:hidden">Email</span>
            <span className="hidden group-hover:inline text-[10px]">Copy address</span>
          </button>
        </div>
        <p className="mt-20 text-gray-600 text-[10px] font-mono tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} // Designed & Engineered by Sofiia Zhovnik
        </p>
      </section>
    </main>
  );
}