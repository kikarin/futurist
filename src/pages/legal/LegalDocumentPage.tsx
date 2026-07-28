import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { legalDocuments } from '../../content/legal'
import { site } from '../../config/site'

export default function LegalDocumentPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const doc = legalDocuments[slug]

  useEffect(() => {
    if (doc) {
      document.title = `${doc.title} — ${site.name}`
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', doc.description)
    }
  }, [doc])

  if (!doc) return null

  return (
    <article>
      <h1 className="mb-4 text-[28px] font-bold tracking-tight text-white sm:text-[34px]">{doc.title}</h1>
      {doc.intro ? (
        <p className="mb-8 text-[14px] leading-[1.7] text-white/70 sm:text-[15px]">{doc.intro}</p>
      ) : null}

      <div className="flex flex-col gap-8">
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-[18px] font-semibold text-white sm:text-[20px]">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-3 text-[14px] leading-[1.7] text-white/70 last:mb-0 sm:text-[15px]">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                {section.list.map((item) => (
                  <li key={item} className="text-[14px] leading-[1.7] text-white/70 sm:text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-white/50">
        Questions? Contact us at{' '}
        <a href={`mailto:${site.email}`} className="text-brand hover:underline">
          {site.email}
        </a>
        .
      </p>
    </article>
  )
}
