'use client'

import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownPopup]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="bg-black text-white px-6 min-h-screen pt-24 pb-24 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,30,80,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-sm text-blue-500 font-mono tracking-[0.3em] uppercase mb-4">// Signal</h1>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Establish Connection
          </h2>
          <p className="mt-4 text-gray-400 font-mono text-sm">
            Szukasz inżyniera do zespołu lub potrzebujesz wyceny projektu? Zostaw wiadomość.
          </p>
        </div>

        {/* LEAD GENERATION FORM */}
        {isSubmitted ? (
          <div className="p-8 border border-green-500 bg-green-900/20 rounded-xl text-center mb-12">
            <h3 className="text-2xl font-bold text-green-400 mb-2 uppercase">Wiadomość wysłana!</h3>
            <p className="text-gray-300 font-mono text-sm">Sygnał odebrany. Odpowiem w ciągu 24 godzin.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-gray-800 bg-gray-950 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-blue-400 font-mono uppercase tracking-widest">Imię / Firma</label>
                <input required type="text" className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-blue-400 font-mono uppercase tracking-widest">E-mail</label>
                <input required type="email" className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono text-sm" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-blue-400 font-mono uppercase tracking-widest">Cel kontaktu</label>
              <select className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono text-sm">
                <option>Oferta pracy (Rekrutacja)</option>
                <option>Projekt Freelance / Wycena</option>
                <option>Pytanie techniczne / Inne</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-blue-400 font-mono uppercase tracking-widest">Wiadomość</label>
              <textarea required rows={4} className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors font-mono text-sm" placeholder="Inicjalizacja transmisji..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              [ Wyślij Sygnał ]
            </button>
          </form>
        )}

        {/* SOCIAL LINKS (Повернули!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <a href="https://github.com/Sofijka3" target="_blank" rel="noopener noreferrer" 
             className="p-6 border border-gray-800 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm uppercase text-center">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sofiia-zhovnik/" target="_blank" rel="noopener noreferrer"
             className="p-6 border border-gray-800 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 font-mono text-sm uppercase text-gray-300 text-center">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026111075149" target="_blank" rel="noopener noreferrer"
             className="p-6 border border-gray-800 rounded-xl hover:bg-blue-800 transition-all duration-300 font-mono text-sm uppercase text-gray-300 text-center">
            Facebook
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('sofiia.zhovnik@student.put.poznan.pl');
              alert('Mail copied to clipboard!');
            }}
            className="p-6 border border-gray-800 rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-300 font-mono text-xs relative group uppercase text-gray-300 text-center"
          >
            <span className="group-hover:hidden">Email</span>
            <span className="hidden group-hover:inline text-[10px]">Copy address</span>
          </button>
        </div>
      </div>

      {/* MARKETING EXIT-INTENT POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border-2 border-blue-500 p-8 rounded-2xl max-w-md w-full relative shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white font-mono">
              [X]
            </button>
            <h3 className="text-2xl font-black uppercase mb-2 text-white">Zaczekaj chwilę!</h3>
            <p className="text-gray-400 text-sm mb-6">
              Zanim opuścisz stronę, nie zapomnij pobrać mojego interaktywnego CV. Zawiera ono pełne zestawienie moich umiejętności i projektów.
            </p>
            <div className="flex gap-4">
              <a 
                href="/cv.pdf" 
                download="Sofiia_Zhovnik_CV.pdf"
                onClick={() => setShowPopup(false)} 
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-center uppercase text-sm rounded transition-colors"
              >
                Pobierz CV.pdf
              </a>
              <button onClick={() => setShowPopup(false)} className="flex-1 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 text-center uppercase text-sm rounded transition-colors">
                Zostaję
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}