import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, descRef.current],
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          delay: 0.45,
          ease: 'power3.out',
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative grid min-h-svh place-items-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/bg/Futurist Cyborg_Red.jpg"
          alt=""
          className="size-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.45)_100%),radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      <div className="relative z-[1] flex max-w-[920px] flex-col items-center px-5 pb-16 pt-[calc(68px+2rem)] text-center sm:px-8 sm:pt-[calc(80px+2rem)] lg:px-14">
        <motion.img
          src="/logo/Logo_3.png"
          alt="Futurist"
          className="mb-5 w-[min(280px,82vw)] drop-shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:mb-8 sm:w-[min(420px,78vw)]"
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <h1
          ref={titleRef}
          className="text-2xl leading-[1.15] font-bold tracking-wide text-white opacity-0 sm:text-3xl md:text-[2.35rem]"
        >
          Brand Incubation Lab
        </h1>
        <p
          ref={descRef}
          className="mt-3 text-[15px] leading-normal font-normal text-white/90 opacity-0 sm:mt-4 sm:text-lg"
        >
          We design, build, and grow with the brands.
        </p>
      </div>
    </section>
  )
}
