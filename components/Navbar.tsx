'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: '// INIT' },
    { href: '/about', label: '// ORIGIN' },
    { href: '/portfolio', label: '// LABS' },
    { href: '/gallery', label: '// MEDIA' },
    { href: '/contact', label: '// SIGNAL' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-blue-900/30 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-mono font-bold text-white hover:text-blue-400 transition-colors tracking-widest text-sm uppercase">
          <span className="text-blue-500">SYS</span>.Zhovnik
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                  isActive 
                    ? 'text-blue-400 font-bold border-b border-blue-400 pb-1' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          
          {/* CTA BUTTON */}
          <Link 
            href="/contact" 
            className="font-mono text-[10px] uppercase font-bold tracking-widest bg-blue-600/10 text-blue-400 border border-blue-500/50 px-4 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            [ Execute_Hire ]
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-400 font-mono text-xs border border-blue-500/30 px-3 py-1 rounded bg-blue-950/20 active:bg-blue-600 active:text-white transition-all cursor-pointer"
        >
          {isOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden w-full bg-black/95 border-b border-blue-900/30 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-xs tracking-widest uppercase py-1 ${
                  isActive ? 'text-blue-400 font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="font-mono text-[10px] uppercase font-bold tracking-widest bg-blue-600/20 text-blue-400 border border-blue-500 text-center py-2.5 mt-2 transition-all"
          >
            [ Execute_Hire ]
          </Link>
        </div>
      )}
    </nav>
  )
}