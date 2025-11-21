'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
]

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

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
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
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
                                        className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 hover:to-primary transition-all duration-300"
                                    >
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
