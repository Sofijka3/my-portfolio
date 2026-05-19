'use client'

import { useState, useEffect } from 'react'
import Scene from '@/components/Scene'
import Link from 'next/link'

const testimonials = [
  {
    name: "dr inż. Mariusz Nowak",
    role: "Wykładowca / Instytut Nauk Technicznych ANS Gniezno",
    text: "Pani Sofiia wyróżnia się wysokim poziomem merytorycznym, dojrzałością badawczą oraz rozwiniętymi zdolnościami analitycznymi. Wykazuje się doskonałym przygotowaniem praktycznym w realizacji złożonych produktów informatycznych i samodzielnością w poszukiwaniu rozwiązań.",
    avatar: "MN"
  },
  {
    name: "Pontus Ambros",
    role: "Project Coordinator / Baltic University Programme, Uppsala",
    text: "Sofiia wykazuje niesamowitą inicjatywę naukową na arenie międzynarodowej. Jej badania nad autonomicznymi systemami roju (Swarm Intelligence) oraz implementacją lekkich modeli Edge AI otwierają nowe możliwości w monitoringu środowiska i ratownictwie wodnym.",
    avatar: "PA"
  }
];

const faqItems = [
  {
    question: "Jakie jest Twoje zaplecze inżynierskie i naukowe?",
    answer: "Ukończyłam studia inżynierskie z wyróżnieniem, tworząc aplikację medyczną EASY MED. Obecnie kontynuuję studia magisterskie na Politechnice Poznańskiej, specjalizując się w technologiach internetowych oraz grach. Moje badania naukowe skupiają się na Edge AI, komputerowym wzroku (YOLOv8, RT-DETR) oraz systemach wieloagentowych (MAS)."
  },
  {
    question: "Dlaczego łączysz sztuczną inteligencję (AI) z technologiami webowymi 3D?",
    answer: "Współczesny e-marketing i systemy przemysłowe wymagają interaktywności. Praca z modelami 3D (Three.js/React Three Fiber) pozwala mi na wizualizację złożonych procesów inżynierskich bezpośrednio w przeglądarce, co drastycznie poprawia User Experience (UX) i zaangażowanie użytkowników (Etap Attention/Interest)."
  },
  {
    question: "W jakich językach prowadzisz komunikację projektową?",
    answer: "Pracuję w środowisku międzynarodowym (współpraca m.in. z instytutami w Szwecji). Biegle posługuję się językiem polskim, angielskim oraz ukraińskim, co pozwala mi na bezproblemową pracę w zespołach rozproszonych (Scrum/Agile)."
  },
  {
    question: "Jakiej formy współpracy obecnie poszukujesz?",
    answer: "Jestem otwarta na oferty pracy jako Junior Frontend Developer, AI/Web Engineer oraz staże (Trainee). Chętnie podejmę się również ciekawych zleceń typu freelance w obszarze interaktywnych stron 3D. Elastycznie dostosowuję wymiar godzin do wymagań projektowych."
  }
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <main className="bg-black text-white px-6 min-h-screen flex flex-col items-center justify-start md:justify-center pt-28 pb-24 relative overflow-x-hidden w-full">
      
      <h1 className="text-3xl md:text-6xl font-bold italic underline decoration-blue-500 text-center uppercase tracking-tighter w-full max-w-4xl breakdown-words">
        Sofiia Zhovnik // Engineer
      </h1>
      <p className="mt-4 text-gray-400 font-mono tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase text-center max-w-2xl">
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

      <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center items-center max-w-md sm:max-w-none">
        <Link 
          href="/portfolio" 
          className="w-full sm:w-auto px-8 py-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] text-center text-sm"
        >
          [ Uruchom Projekty ]
        </Link>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          className="w-full sm:w-auto px-8 py-3 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-gray-700 hover:border-gray-400 text-center text-sm"
        >
          [ Pobierz CV.pdf ]
        </a>
      </div>

      <section className="mt-24 w-full max-w-4xl border-t border-blue-950/40 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold font-mono tracking-wider uppercase text-blue-400">
            // OPINIE I REFERENCJE
          </h2>
          <p className="mt-2 text-gray-500 font-mono tracking-widest text-[9px] md:text-[10px] uppercase">
            Etap: Desire (AIDA) — Weryfikacja społeczna marki osobistej
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-gray-950 border border-blue-950/40 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group relative shadow-lg shadow-black"
            >
              <div className="absolute top-4 right-4 text-blue-950 font-mono text-xs font-bold group-hover:text-blue-500/20 transition-colors duration-300">
                // SYS_REF_{t.avatar}
              </div>
              
              <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6 italic pt-2">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 border border-blue-900/50 flex items-center justify-center text-[10px] font-mono font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-200 font-mono uppercase tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 w-full max-w-3xl border-t border-blue-950/40 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold font-mono tracking-wider uppercase text-blue-400">
            // FAQ — CZĘSTO ZADAWANE PYTANIA
          </h2>
          <p className="mt-2 text-gray-500 font-mono tracking-widest text-[9px] md:text-[10px] uppercase">
            Dodatkowe elementy marketingowe — Przełamywanie obaw rekrutera
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {faqItems.map((item, idx) => (
            <details 
              key={idx} 
              className="bg-gray-950 border border-blue-950/30 rounded-xl group overflow-hidden transition-all duration-300 hover:border-blue-500/30 shadow-md [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="p-4 md:p-5 font-mono text-xs md:text-sm font-bold text-gray-300 cursor-pointer flex justify-between items-center select-none list-none uppercase tracking-wide group-open:text-blue-400 group-open:bg-gray-900/40 transition-all">
                <span className="pr-4">{`> `}{item.question}</span>
                <span className="text-blue-500 font-bold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="p-4 md:p-5 border-t border-blue-950/20 text-gray-400 font-mono text-xs leading-relaxed bg-black/40">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-32 w-full max-w-4xl border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Sofiia Zhovnik. All rights reserved.
          </p>
          <p className="text-blue-950 font-mono text-[9px] uppercase tracking-wider mt-1">
            Built with Next.js & Tailwind CSS // Optimization: Active
          </p>
        </div>
        
        <div className="bg-gray-950 border border-blue-950/20 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 shadow-inner w-full sm:w-auto">
          <div className="text-center sm:text-left">
            <h5 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wide">// PRESS KIT</h5>
            <p className="text-gray-600 font-mono text-[9px] mt-0.5">Materiały dla rekruterów i mediów (CV, Avatar, Logos)</p>
          </div>
          <a 
            href="/press-kit.zip" 
            download
            className="w-full sm:w-auto px-4 py-2 bg-blue-950/40 hover:bg-blue-600 text-blue-400 hover:text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded border border-blue-900/50 transition-all duration-300 text-center"
          >
            [ Pobierz .ZIP ]
          </a>
        </div>
      </footer>

      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gray-950 border-2 border-blue-500 rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl shadow-blue-950/50 text-center">
            <div className="absolute top-3 left-4 text-blue-500/30 font-mono text-[9px] uppercase tracking-widest">
              System_Trigger // Exit_Intent_Detected
            </div>

            <h3 className="text-xl font-bold font-mono text-blue-400 uppercase tracking-wide mt-2">
              Zaczekaj chwilę!
            </h3>
            
            <p className="mt-4 text-gray-400 font-mono text-xs leading-relaxed">
              Nie wychodź z pustymi rękami. Zanim zamkniesz kartę, pobierz moje oficjalne 
              <span className="text-white font-bold"> CV w formacie PDF</span> lub sprawdź kod źródłowy tego projektu na GitHubie!
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a 
                href="/cv.pdf" 
                target="_blank"
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold tracking-widest uppercase text-xs transition-all rounded-xl shadow-lg shadow-blue-600/20 text-center"
              >
                [ Pobierz CV.pdf ]
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-gray-950 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white font-mono font-bold tracking-widest uppercase text-xs transition-all rounded-xl text-center"
              >
                [ Zobacz GitHub ]
              </a>
            </div>

            <button 
              onClick={() => setShowPopup(false)}
              className="mt-4 text-gray-600 hover:text-gray-400 font-mono text-[10px] uppercase tracking-wider underline cursor-pointer"
            >
              Zamknij i kontynuuj przeglądanie
            </button>
          </div>
        </div>
      )}

    </main>
  );
}