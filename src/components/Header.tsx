'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EB</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Efficiency Boost</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </nav>

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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 font-medium">
                Portfolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium">
                Blog
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
              <Link href="/contact" className="btn-primary inline-block text-center mt-4">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
