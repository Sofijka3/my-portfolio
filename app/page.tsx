'use client'

import Scene from '@/components/Scene'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black text-white px-6 min-h-screen flex flex-col items-center justify-center pt-16 pb-24">
      
      {/* HERO SECTION */}
      <h1 className="text-4xl md:text-6xl font-bold italic underline decoration-blue-500 text-center uppercase tracking-tighter">
        Sofiia Zhovnik // Engineer
      </h1>
      <p className="mt-4 text-gray-400 font-mono tracking-[0.3em] text-xs uppercase text-center max-w-2xl">
        Games & Internet Technologies // Poznan University of Technology
      </p>
      
      {/* 3D SCENE CONTAINER */}
      <div className="mt-10 w-full max-w-xl p-2 border border-blue-900/50 rounded-2xl bg-gray-950 shadow-2xl shadow-blue-950/30">
        <Scene />
        <div className="p-4 bg-gray-900 rounded-b-xl border-t border-gray-800 text-center">
            <p className="text-blue-400 font-bold tracking-widest uppercase text-[10px]">
              DevBot v0.1 // Hardware & Software Interaction
            </p>
        </div>
      </div>

      {/* MARKETING CTA BUTTONS (Zgodnie z lejkiem AIDA) */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6">
        <Link 
          href="/portfolio" 
          className="px-8 py-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] text-center text-sm"
        >
          [ Uruchom Projekty ]
        </Link>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          className="px-8 py-3 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-mono font-bold tracking-widest uppercase transition-all duration-300 border border-gray-700 hover:border-gray-400 text-center text-sm"
        >
          [ Pobierz CV.pdf ]
        </a>
      </div>

    </main>
  );
}