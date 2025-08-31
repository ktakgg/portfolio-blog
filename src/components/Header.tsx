'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Hide header while scrolling down; reveal after scroll stop or when scrolling up
  const [showHeader, setShowHeader] = useState(true)
  const [animateReveal, setAnimateReveal] = useState(false)
  const lastScrollY = useRef(0)
  const scrollStopTimer = useRef<number | null>(null)
  const THRESHOLD = 2
  const downAccum = useRef(0)
  const lastToggleY = useRef(0)
  const showRef = useRef(true)

  useEffect(() => {
    let raf = 0
    const handleScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const delta = y - lastScrollY.current

        // Always show near the top to avoid flicker
        if (y < 16) {
          setShowHeader(true)
          lastToggleY.current = y
          lastScrollY.current = y
          raf = 0
          return
        }

        // Hide on downward scroll beyond small threshold
        if (delta > THRESHOLD) {
          setShowHeader(false)
        }

        // Upward scroll beyond threshold -> show immediately with animation
        if (delta < -THRESHOLD) {
          setShowHeader(true)
          setAnimateReveal(true)
          window.setTimeout(() => setAnimateReveal(false), 300)
        }

        lastScrollY.current = y

        // Reveal after user stops scrolling for 0.3s (only if currently hidden)
        if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current)
        scrollStopTimer.current = window.setTimeout(() => {
          if (!showRef.current) {
            setShowHeader(true)
            setAnimateReveal(true)
            lastToggleY.current = window.scrollY || 0
            window.setTimeout(() => setAnimateReveal(false), 300)
          }
        }, 300)

        raf = 0
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  // Keep a live ref of current visibility to avoid stale state in timers
  useEffect(() => {
    showRef.current = showHeader
  }, [showHeader])

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const getLinkClassName = (path: string) => {
    return isActive(path)
      ? "text-blue-600 text-sm font-bold leading-normal"
      : "text-[#141414] text-sm font-medium leading-normal hover:text-blue-600 transition-colors"
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-4 md:px-10 py-3 bg-neutral-50 transition-transform duration-300 transform-gpu will-change-transform ${showHeader ? 'translate-y-0' : '-translate-y-full'} ${animateReveal ? '' : ''}`}>
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <Image
          src="/logo.png"
          alt="ToDoCoWorks logo"
          width={120}
          height={40}
          className="h-7 w-auto"
          priority
        />
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">todocoworks</h2>
      </Link>
      
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <Link className={getLinkClassName('/')} href="/">
            {isActive('/') ? <span className="truncate">Home</span> : 'Home'}
          </Link>
          <Link className={getLinkClassName('/works')} href="/works">
            {isActive('/works') ? <span className="truncate">Works</span> : 'Works'}
          </Link>
          <Link className={getLinkClassName('/contact')} href="/contact">
            {isActive('/contact') ? <span className="truncate">Contact</span> : 'Contact'}
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-3 -mr-3 z-50 relative bg-neutral-50 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden py-4 border-t bg-neutral-50 z-50 shadow-lg">
          <nav className="flex flex-col space-y-4 px-10">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-blue-600 font-bold' : 'text-[#141414]'} text-sm font-medium leading-normal`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/works" 
              className={`${isActive('/works') ? 'text-blue-600 font-bold' : 'text-[#141414]'} text-sm font-medium leading-normal`}
              onClick={() => setIsMenuOpen(false)}
            >
              Works
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-blue-600 font-bold' : 'text-[#141414]'} text-sm font-medium leading-normal`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
