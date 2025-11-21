'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Works', href: '/works' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
]

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="relative z-50 p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 hover:bg-white transition-colors shadow-sm"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 transition-colors"
                                aria-label="Close Menu"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <nav className="flex flex-col items-center gap-8">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl md:text-6xl font-heading font-bold text-slate-900 hover:text-slate-500 transition-all duration-300"
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}
