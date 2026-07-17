import { motion } from 'framer-motion'

const brands = [
  {
    id: 'firstpective',
    name: 'FirstPective',
    tagline: 'Creative Communications',
    logo: '/logo/Logo_white.png',
    bg: '/bg/BG Futurist.jpg',
    href: 'https://firstpective.vercel.app/',
    tone: 'light' as const,
  },
  {
    id: 'simsami',
    name: 'Simsami',
    tagline: 'AI Powered Content Performance Simulation',
    logo: '/logo/Logo_6.png',
    bg: '/bg/BG simsami.jpg',
    href: 'https://simsami.com/',
    tone: 'dark' as const,
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-[7.5rem]"
      aria-label="Brand Portfolio"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/bg/BG_Red Bawah.jpg"
          alt=""
          className="size-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/[0.18]" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1100px]">
        <motion.h2
          className="mb-8 text-center text-lg font-semibold tracking-wide text-white sm:mb-12 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Brand Portfolio
        </motion.h2>

        <div className="mx-auto grid max-w-[950px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {brands.map((brand, i) => {
            const isLight = brand.tone === 'light'

            return (
              <motion.article
                key={brand.id}
                className="group relative isolate aspect-[1.75/1] overflow-hidden rounded-[10px] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out group-hover:scale-110">
                  <img
                    src={brand.bg}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    aria-hidden="true"
                  />

                  <div className="relative z-[1] flex h-full flex-col px-3 pb-4 sm:px-5 sm:pb-5">
                    <div className="flex flex-1 flex-col items-center justify-center gap-1.5 text-center sm:gap-2">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className={`h-auto object-contain ${
                          isLight
                            ? 'w-[min(280px,78%)]'
                            : 'w-[min(250px,72%)]'
                        }`}
                      />
                      <p
                        className={`max-w-[280px] text-xs leading-snug font-medium sm:text-sm ${
                          isLight ? 'text-white/90' : 'text-simsami'
                        }`}
                      >
                        {brand.tagline}
                      </p>
                    </div>

                    <a
                      href={brand.href || undefined}
                      target={brand.href ? '_blank' : undefined}
                      rel={brand.href ? 'noopener noreferrer' : undefined}
                      className={`mx-auto inline-flex h-9 min-w-[100px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-current px-5 text-sm font-semibold tracking-wide transition-colors sm:h-10 sm:min-w-[108px] ${
                        isLight
                          ? 'text-white hover:bg-white hover:text-simsami-dark'
                          : 'text-simsami hover:bg-simsami hover:text-white'
                      }`}
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
