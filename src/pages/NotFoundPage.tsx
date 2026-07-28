import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/site'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = `Page Not Found — ${site.name}`
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-5 text-center">
      <img src="/logo/Logo_4.png" alt={site.name} className="mb-8 size-11 object-contain" decoding="async" />
      <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-brand">404</p>
      <h1 className="mb-3 text-[28px] font-bold text-white sm:text-[36px]">Page not found</h1>
      <p className="mb-8 max-w-md text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        Back to Home
      </Link>
    </div>
  )
}
