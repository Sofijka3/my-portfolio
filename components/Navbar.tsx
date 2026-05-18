'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: '// INIT' },
    { href: '/about', label: '// ORIGIN' },
    { href: '/portfolio', label: '// LABS' },
    { href: '/gallery', label: '// MEDIA' },
    { href: '/contact', label: '// SIGNAL' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-blue-900/30 z-50">
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

        {/* MOBILE MENU BUTTON (Placeholder) */}
        <button className="md:hidden text-blue-400 font-mono text-xs">
          [ MENU ]
        </button>

      </div>
    </nav>
  )
}