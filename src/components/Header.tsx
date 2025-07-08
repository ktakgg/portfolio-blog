'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3 bg-neutral-50">
      <div className="flex items-center gap-4 text-[#141414]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Efficiency Boost</h2>
      </div>
      
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/services">Services</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/portfolio">Portfolio</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/blog">Blog</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal" href="/contact">Contact</Link>
        </div>
        <Link
          href="/contact"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#535353] text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Get Started</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden py-4 border-t bg-neutral-50 z-50">
          <nav className="flex flex-col space-y-4 px-10">
            <Link href="/services" className="text-[#141414] text-sm font-medium leading-normal">
              Services
            </Link>
            <Link href="/portfolio" className="text-[#141414] text-sm font-medium leading-normal">
              Portfolio
            </Link>
            <Link href="/blog" className="text-[#141414] text-sm font-medium leading-normal">
              Blog
            </Link>
            <Link href="/contact" className="text-[#141414] text-sm font-medium leading-normal">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
