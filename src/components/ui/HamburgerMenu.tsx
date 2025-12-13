'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

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
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-[101] p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 hover:bg-white transition-colors shadow-sm"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                animate={isOpen ? "open" : "closed"}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M4 6h16", rotate: 0, translateY: 0 },
                            open: { d: "M4 6h16", rotate: 45, translateY: 6 } // Top line moves down and rotates
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        d="M4 12h16"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M4 18h16", rotate: 0, translateY: 0 },
                            open: { d: "M4 18h16", rotate: -45, translateY: -6 } // Bottom line moves up and rotates
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </svg>
            </motion.button>

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center"
                        >
                            {/* Close button removed as the main button now handles toggling */}

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
