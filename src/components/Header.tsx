'use client'

import Link from 'next/link'
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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-4 md:px-10 py-3 bg-neutral-50 relative">
      <Link href="/" className="flex items-center gap-4 text-[#141414] hover:opacity-80 transition-opacity">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Efficiency Boost</h2>
      </Link>
      
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <Link className={getLinkClassName('/')} href="/">
            {isActive('/') ? <span className="truncate">Home</span> : 'Home'}
          </Link>
          <Link className={getLinkClassName('/portfolio')} href="/portfolio">
            {isActive('/portfolio') ? <span className="truncate">Portfolio</span> : 'Portfolio'}
          </Link>
          <Link className={getLinkClassName('/blog')} href="/blog">
            {isActive('/blog') ? <span className="truncate">Blog</span> : 'Blog'}
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
              href="/portfolio" 
              className={`${isActive('/portfolio') ? 'text-blue-600 font-bold' : 'text-[#141414]'} text-sm font-medium leading-normal`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              className={`${isActive('/blog') ? 'text-blue-600 font-bold' : 'text-[#141414]'} text-sm font-medium leading-normal`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
