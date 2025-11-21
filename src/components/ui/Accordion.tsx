'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
    title: string
    content: React.ReactNode
}

interface AccordionProps {
    items: AccordionItem[]
    allowMultiple?: boolean
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(current =>
                current.includes(index)
                    ? current.filter(i => i !== index)
                    : [...current, index]
            )
        } else {
            setOpenIndexes(current =>
                current.includes(index) ? [] : [index]
            )
        }
    }

    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index)
                return (
                    <div
                        key={index}
                        className={cn(
                            "rounded-2xl border transition-all duration-300 overflow-hidden",
                            isOpen
                                ? "bg-white border-slate-200 shadow-md"
                                : "bg-white/50 border-slate-200/50 hover:bg-white hover:border-slate-200"
                        )}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className={cn(
                                "text-lg font-medium transition-colors duration-300",
                                isOpen ? "text-slate-900" : "text-slate-600"
                            )}>
                                {item.title}
                            </span>
                            <ChevronDown
                                className={cn(
                                    "w-5 h-5 text-slate-400 transition-transform duration-300",
                                    isOpen && "transform rotate-180 text-slate-900"
                                )}
                            />
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
