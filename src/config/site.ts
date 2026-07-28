export const site = {
  name: 'Futurist',
  legalName: 'PT Futurist Circle Indonesia',
  domain: 'https://futurist.co.id',
  email: 'connect@futurist.co.id',
  phone: '+62 823 1010 5531',
  phoneHref: 'https://wa.me/6282310105531',
  tagline: 'Brand Incubation Lab',
  updated: 'July 28, 2026',
} as const

export const legalRoutes = [
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/ai-disclaimer', label: 'AI Disclaimer' },
  { path: '/data-usage', label: 'Data Usage Policy' },
] as const
