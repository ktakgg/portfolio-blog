import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove('opacity-0', 'translate-y-8')
                            entry.target.classList.add('opacity-100', 'translate-y-0')
                            if (observerRef.current) {
                                observerRef.current.unobserve(entry.target)
                            }
                        }
                    })
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px',
                    root: null,
                }
            )

            setTimeout(() => {
                const animateElements = document.querySelectorAll('.animate-on-scroll')
                animateElements.forEach((el) => {
                    if (observerRef.current) {
                        observerRef.current.observe(el)
                    }
                })
            }, 100)
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [])
}
