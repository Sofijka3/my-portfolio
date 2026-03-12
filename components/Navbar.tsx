'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
        {/* Логотип з відступом справа */}
        <Link href="/" className="font-mono font-bold text-blue-500 tracking-tighter text-xl flex-shrink-0 mr-4">
          SZ //
        </Link>
        
        {/* Контейнер для посилань з автоматичним скролом, якщо екран дуже малий */}
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-sm font-medium text-gray-400 overflow-x-auto no-scrollbar whitespace-nowrap py-2">
          <Link href="#about" className="hover:text-white transition-colors uppercase tracking-widest">Education</Link>
          <Link href="#experience" className="hover:text-white transition-colors uppercase tracking-widest">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors uppercase tracking-widest">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors uppercase tracking-widest">Contact</Link>
        </div>
      </div>
    </nav>
  )
}