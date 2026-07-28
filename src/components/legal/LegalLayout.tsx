import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { legalRoutes, site } from '../../config/site'

export default function LegalLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1100px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <Link to="/" className="shrink-0">
            <img src="/logo/Logo_4.png" alt="Futurist" className="size-9 object-contain sm:size-11" decoding="async" />
          </Link>
          <Link to="/" className="text-[13px] font-medium text-white/70 transition-colors hover:text-white">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">Legal</p>
            <nav className="flex flex-col gap-2" aria-label="Legal pages">
              {legalRoutes.map((item) => {
                const active = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-1.5 text-[13px] font-medium transition-colors sm:text-[14px] ${
                      active ? 'text-brand' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </aside>

          <main id="main-content" className="min-w-0">
            <Outlet />
          </main>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          <p className="text-[12px] text-white/40">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-[12px] text-white/40">{site.legalName}</p>
        </div>
      </footer>
    </div>
  )
}
