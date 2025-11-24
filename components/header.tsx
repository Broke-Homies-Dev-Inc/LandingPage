'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-xl text-foreground">BlitSeven</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition">
            About
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-card border-t border-border px-6 py-4 space-y-4">
          <Link href="#features" className="block text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="#about" className="block text-muted-foreground hover:text-foreground transition">
            About
          </Link>
          <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
