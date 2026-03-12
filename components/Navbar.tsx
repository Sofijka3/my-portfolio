'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono font-bold text-blue-500 tracking-tighter text-xl">
          SZ 
        </span>
        
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#about" className="hover:text-white transition-colors">Education</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contacts</Link>
        </div>
      </div>
    </nav>
  )
}