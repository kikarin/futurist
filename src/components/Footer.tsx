import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      id="connect"
      className="bg-black px-5 pt-16 pb-8 sm:px-8 sm:pt-24 sm:pb-12 lg:px-14"
    >
      <motion.div
        className="mx-auto flex max-w-[640px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/logo/Logo_3.png"
          alt="Futurist"
          className="mb-4 w-[min(220px,58vw)]"
        />

        <p className="mb-8 text-[11px] font-medium tracking-[0.14em] text-[#a8a8a8] uppercase sm:mb-11 sm:text-xs">
          PT FUTURIST CIRCLE INDONESIA
        </p>

        <h2 className="mb-3.5 text-xl font-bold text-brand sm:text-[1.65rem]">
          Connect
        </h2>

        <div className="mb-10 flex flex-col gap-1.5 sm:mb-14">
          <a
            href="https://wa.me/6282310105531"
            className="text-[15px] text-white/90 transition-colors hover:text-white sm:text-base"
          >
            (WA) +62 823 1010 5531
          </a>
          <a
            href="mailto:connect@futurist.co.id"
            className="text-[15px] text-white/90 transition-colors hover:text-white sm:text-base"
          >
            connect@futurist.co.id
          </a>
        </div>

        <p className="text-[13px] font-medium tracking-wide text-brand-deep">
          Futurist 2026
        </p>
      </motion.div>
    </footer>
  )
}
