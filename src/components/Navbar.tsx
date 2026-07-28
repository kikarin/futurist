import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-[100] flex h-[68px] items-center justify-between px-5 transition-[background,backdrop-filter,border-color] duration-300 ease-out sm:h-20 sm:px-8 lg:px-70 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-black/35 backdrop-blur-[3px]'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <a href="#hero" className=" flex items-center" aria-label="Futurist home">
        <img
          src="/logo/Logo_4.png"
          alt="Futurist"
          decoding="async"
          className="size-9 object-contain sm:size-11"
        />
      </a>
      <nav className="flex items-center gap-4 sm:gap-7" aria-label="Primary">
        <a
          href="#connect"
          className="text-[13px] font-medium tracking-wide text-white/90 transition-opacity hover:text-white sm:text-[15px]"
        >
          Investor Relation
        </a>
        <a
          href="#connect"
          className="inline-flex h-9 min-w-24 items-center justify-center rounded-full bg-brand px-4 text-[13px] font-semibold tracking-wide text-white transition hover:-translate-y-px hover:bg-brand-hover sm:h-[42px] sm:min-w-[118px] sm:px-6 sm:text-[15px]"
        >
          Connect
        </a>
      </nav>
    </motion.header>
  )
}
