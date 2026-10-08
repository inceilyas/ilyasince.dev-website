'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import HeroDemo from '@/components/hero-demo'
import { LogoMark } from '@/components/logo'
import { useLanguage } from '@/hooks/use-language'
import { site, type AgentKey, type Audience } from '@/lib/content'

const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8'
const h2 = 'text-[2rem] font-bold leading-[1.08] tracking-[-0.025em] text-balance sm:text-[2.6rem]'
const lead = 'mt-4 max-w-[62ch] text-lg leading-relaxed text-muted-foreground'

const agentTone: Record<AgentKey, { bar: string; soft: string; text: string }> = {
  scientist: { bar: 'bg-scientist', soft: 'bg-scientist-soft', text: 'text-scientist' },
  analysis: { bar: 'bg-analysis', soft: 'bg-analysis-soft', text: 'text-analysis' },
  engineer: { bar: 'bg-engineer', soft: 'bg-engineer-soft', text: 'text-engineer' },
}

const audienceTone: Record<Audience, string> = {
  business: 'border-primary/30 text-primary',
  admin: 'border-analysis/40 text-analysis',
  both: 'border-border text-muted-foreground',
}

export default function Home() {
  const { c } = useLanguage()

  return (
    <div id="top" className="min-h-screen overflow-x-clip">
      <Navbar />

      <main>
        {/* Hero */}
        <section className={`${container} grid items-center gap-12 pb-20 pt-28 sm:pt-32 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-28 lg:pt-36`}>
          <div>
            <p className="mb-6 text-[0.95rem] font-medium text-muted-foreground">{site.fullName}</p>
            <h1 className="max-w-[14ch] text-[2.85rem] font-bold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.1rem]">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">{c.hero.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {c.hero.primary}
              </a>
              <a
                href="#how"
                className="rounded-md border border-input px-5 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {c.hero.secondary}
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{c.hero.note}</p>
          </div>
          <HeroDemo />
        </section>

        {/* Statement + problem/solution */}
        <section className="border-t border-border">
          <div className={`${container} py-20 md:py-28`}>
            <p className="max-w-[30ch] text-[1.75rem] font-semibold leading-[1.18] tracking-[-0.02em] text-balance sm:text-[2.35rem]">
              {c.problem.statement}
            </p>
            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-lg font-semibold">{c.problem.problemTitle}</h2>
                <p className="mt-3 max-w-[56ch] text-[1.05rem] leading-relaxed text-muted-foreground">{c.problem.problem}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{c.problem.solutionTitle}</h2>
                <p className="mt-3 max-w-[56ch] text-[1.05rem] leading-relaxed text-muted-foreground">{c.problem.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agents: three stacked layers */}
        <section id="agents" className="border-t border-border bg-card">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.agents.title}</h2>
            <p className={lead}>{c.agents.lead}</p>

            <ol className="mt-12 space-y-3">
              {c.agents.items.map((a, i) => {
                const tone = agentTone[a.key]
                return (
                  <li
                    key={a.key}
                    className={`relative grid gap-4 overflow-hidden rounded-lg ${tone.soft} py-6 pl-7 pr-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-10 md:py-7 md:pl-9`}
                  >
                    <span className={`absolute inset-y-0 left-0 w-1.5 ${tone.bar}`} aria-hidden />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {i + 1} / 3
                      </p>
                      <h3 className={`mt-1 text-xl font-bold tracking-tight ${tone.text}`}>{a.name}</h3>
                      <p className="mt-1 font-medium">{a.role}</p>
                    </div>
                    <ul className="space-y-2 self-center">
                      {a.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-relaxed text-foreground/85">
                          <span className={`mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full ${tone.bar}`} aria-hidden />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-border">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.how.title}</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {c.how.steps.map((s, i) => (
                <li key={s.title} className="border-t-2 border-foreground pt-5">
                  <span className="text-sm font-semibold tabular-nums text-primary">{i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-border bg-card">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.features.title}</h2>
            <p className={lead}>{c.features.lead}</p>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {c.features.groups.map((g) => (
                <div key={g.name} className="grid gap-4 py-7 md:grid-cols-[14rem_1fr] md:gap-10">
                  <h3 className="text-base font-semibold text-muted-foreground">{g.name}</h3>
                  <ul className="space-y-6">
                    {g.items.map((f) => (
                      <li key={f.name}>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className="text-lg font-semibold tracking-tight">{f.name}</span>
                          <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${audienceTone[f.audience]}`}>
                            {c.features.audience[f.audience]}
                          </span>
                        </div>
                        <p className="mt-1.5 max-w-[68ch] leading-relaxed text-muted-foreground">{f.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="border-t border-border">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.impact.title}</h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
              {c.impact.items.map((it) => (
                <div key={it.title}>
                  <h3 className="text-xl font-bold tracking-tight">{it.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{it.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {it.results.map((r) => (
                      <li key={r} className="flex gap-2.5 leading-snug">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-analysis" aria-hidden />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare + market */}
        <section id="compare" className="border-t border-border bg-card">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.compare.title}</h2>
            <p className={lead}>{c.compare.lead}</p>

            {/* Mobile: one block per topic so the GDI column is never scrolled out of view */}
            <dl className="mt-10 divide-y divide-border border-y border-border md:hidden">
              {c.compare.rows.map(([topic, bi, gdi]) => (
                <div key={topic} className="py-5">
                  <dt className="font-semibold">{topic}</dt>
                  <dd className="mt-2 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1.5 text-[0.95rem]">
                    <span className="text-muted-foreground">{c.compare.colBiShort}</span>
                    <span className="text-muted-foreground">{bi}</span>
                    <span className="font-semibold text-primary">{c.compare.colGdi}</span>
                    <span className="font-medium">{gdi}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 hidden md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th scope="col" className="w-[24%] py-3 pr-4 text-sm font-medium text-muted-foreground">
                      {c.compare.colFeature}
                    </th>
                    <th scope="col" className="w-[38%] py-3 pr-4 text-sm font-medium text-muted-foreground">
                      {c.compare.colBi}
                    </th>
                    <th scope="col" className="py-3 text-sm font-bold text-primary">
                      {c.compare.colGdi}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.compare.rows.map(([topic, bi, gdi]) => (
                    <tr key={topic} className="border-b border-border align-top">
                      <th scope="row" className="py-4 pr-4 font-semibold">
                        {topic}
                      </th>
                      <td className="py-4 pr-4 text-muted-foreground">{bi}</td>
                      <td className="py-4 font-medium">{gdi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16 max-w-3xl">
              <h3 className="text-lg font-semibold">{c.compare.marketTitle}</h3>
              <div className="mt-5 space-y-4">
                {[
                  { label: c.compare.marketLabel2025, value: c.compare.market2025, pct: 48, cls: 'bg-muted-foreground/40' },
                  { label: c.compare.marketLabel2030, value: c.compare.market2030, pct: 100, cls: 'bg-primary' },
                ].map((m) => (
                  <div key={m.label} className="grid grid-cols-[6.5rem_1fr] items-center gap-4 sm:grid-cols-[8rem_1fr]">
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                    <div className="flex items-center gap-3">
                      <div className={`h-7 rounded-[4px] ${m.cls}`} style={{ width: `${m.pct * 0.72}%` }} aria-hidden />
                      <span className="whitespace-nowrap font-semibold tabular-nums">{m.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={site.marketSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
              >
                {c.compare.marketSource}
              </a>
            </div>
          </div>
        </section>

        {/* Pricing model */}
        <section className="border-t border-border">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.model.title}</h2>
            <p className={lead}>{c.model.lead}</p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {c.model.plans.map((p) => (
                <div key={p.name} className="rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="border-t border-border bg-card">
          <div className={`${container} py-20 md:py-28`}>
            <h2 className={h2}>{c.roadmap.title}</h2>
            <ol className="relative mt-12 max-w-3xl">
              {c.roadmap.items.map((r, i) => {
                const last = i === c.roadmap.items.length - 1
                const dot =
                  r.status === 'done'
                    ? 'border-analysis bg-analysis'
                    : r.status === 'active'
                      ? 'border-primary bg-card ring-4 ring-primary/15'
                      : 'border-input bg-card'
                const pill =
                  r.status === 'done'
                    ? 'bg-analysis-soft text-analysis'
                    : r.status === 'active'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                return (
                  <li key={r.title} className="relative grid grid-cols-[1.5rem_1fr] gap-5 pb-10 last:pb-0">
                    {!last && <span className="absolute bottom-0 left-[0.6875rem] top-6 w-0.5 bg-border" aria-hidden />}
                    <span className={`relative mt-1 h-6 w-6 rounded-full border-2 ${dot}`} aria-hidden>
                      {r.status === 'done' && <Check className="absolute inset-0 m-auto h-3.5 w-3.5 text-card" strokeWidth={3} />}
                    </span>
                    <div>
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${pill}`}>
                        {c.roadmap.status[r.status]}
                      </span>
                      <h3 className="mt-2 text-xl font-bold tracking-tight">{r.title}</h3>
                      <p className="mt-2 max-w-[60ch] leading-relaxed text-muted-foreground">{r.text}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* Team + contact */}
        <section id="contact" className="border-t border-border">
          <div className={`${container} grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <h2 className={h2}>{c.contact.title}</h2>
              <p className={lead}>{c.contact.lead}</p>
              <div className="mt-12 border-t border-border pt-8">
                <h3 className="text-lg font-semibold">{c.team.title}</h3>
                <p className="mt-3 max-w-[56ch] leading-relaxed text-muted-foreground">{c.team.text}</p>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                {c.contact.direct}{' '}
                <a href={`mailto:${site.email}`} className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                  {site.email}
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className={`${container} flex flex-col gap-3 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between`}>
          <span className="flex items-center gap-2.5">
            <LogoMark className="h-5 w-5" />
            {site.fullName} ({site.name})
          </span>
          <span>
            © {new Date().getFullYear()} {site.name}. {c.footer.rights}
          </span>
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const { c } = useLanguage()
  const f = c.contact
  const [data, setData] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  const field =
    'mt-1.5 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }))

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setStatus('error')
      return
    }
    const body = [`${f.name}: ${data.name}`, `${f.company}: ${data.company}`, `${f.email}: ${data.email}`, '', data.message].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(f.mailSubject)}&body=${encodeURIComponent(body)}`
    setStatus('sent')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          {f.name}
          <input name="name" autoComplete="name" required value={data.name} onChange={onChange} className={field} />
        </label>
        <label className="block text-sm font-medium">
          {f.company}
          <input name="company" autoComplete="organization" value={data.company} onChange={onChange} className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        {f.email}
        <input name="email" type="email" autoComplete="email" required value={data.email} onChange={onChange} className={field} />
      </label>
      <label className="block text-sm font-medium">
        {f.message}
        <textarea name="message" rows={5} required value={data.message} onChange={onChange} className={`${field} resize-y`} />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        {f.submit}
      </button>
      <p role="status" className={`text-sm ${status === 'error' ? 'text-destructive' : 'text-muted-foreground'}`}>
        {status === 'sent' ? f.sent : status === 'error' ? f.required : ''}
      </p>
    </form>
  )
}
