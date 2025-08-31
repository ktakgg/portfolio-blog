'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-4 md:px-10 py-3 bg-neutral-50 relative">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <Image
          src="/logo.png"
          alt="ToDoCoWorks logo"
          width={120}
          height={40}
          className="h-7 w-auto"
          priority
        />
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">ToDoCoWorks</h2>
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
