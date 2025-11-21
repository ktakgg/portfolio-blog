'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import HamburgerMenu from './ui/HamburgerMenu'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-background/50 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <Link href="/" className="relative z-50 flex items-center gap-3 group">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src="/logo.png"
            alt="ToDoCoWorks logo"
            width={120}
            height={40}
            className="h-8 w-auto relative"
            priority
          />
        </div>
        <span className="text-xl font-heading font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
          ToDoCoWorks
        </span>
      </Link>

      {/* Desktop Navigation - Optional, keeping it minimal or hidden since we have the hamburger */}
      <div className="hidden md:flex items-center gap-8 mr-16">
        {['/', '/works', '/blog', '/contact'].map((path) => {
          const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(1).slice(1);
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-400 hover:text-white'
                }`}
            >
              {label}
            </Link>
          )
        })}
      </div>

      <HamburgerMenu />
    </header>
  )
}
