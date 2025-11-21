'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onToggle?: () => void
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-6 text-left transition-all hover:text-primary group"
            >
                <span className="text-xl font-medium text-slate-200 group-hover:text-primary transition-colors">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 text-slate-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
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
                        <div className="pb-6 text-slate-400 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface AccordionProps {
    items: {
        title: string
        content: React.ReactNode
    }[]
    allowMultiple?: boolean
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            )
        } else {
            setOpenIndexes(prev =>
                prev.includes(index) ? [] : [index]
            )
        }
    }

    return (
        <div className="w-full max-w-3xl mx-auto glass-dark rounded-2xl p-8">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    )
}
