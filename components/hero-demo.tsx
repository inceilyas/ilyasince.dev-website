'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import type { AgentKey } from '@/lib/content'

// Illustrative numbers for the sample conversation (churn %, Q1 vs Q2).
const CHART = [
  { q1: 3.2, q2: 3.4 },
  { q1: 4.1, q2: 6.8 },
  { q1: 2.9, q2: 3.0 },
  { q1: 3.6, q2: 3.9 },
]
const CHART_MAX = 8

const SQL = `SELECT region, quarter,
       AVG(churned) AS churn_rate
FROM   customers_quarterly
WHERE  quarter IN ('2026Q1', '2026Q2')
GROUP  BY region, quarter;`

// Steps after the question is typed: 1 scientist, 2 analysis + sql, 3 chart, 4 engineer, 5 decision
const FINAL_STEP = 5

const agentStyles: Record<AgentKey, { dot: string; name: string }> = {
  scientist: { dot: 'bg-scientist', name: 'text-scientist' },
  analysis: { dot: 'bg-analysis', name: 'text-analysis' },
  engineer: { dot: 'bg-engineer', name: 'text-engineer' },
}

const agentNames: Record<AgentKey, string> = {
  scientist: 'Scientist Agent',
  analysis: 'Analysis Agent',
  engineer: 'Engineer Agent',
}

function AgentLine({ agent, text, on }: { agent: AgentKey; text: string; on: boolean }) {
  return (
    <div className="demo-reveal flex gap-3" data-on={on}>
      <span className={`mt-[0.45rem] h-2 w-2 shrink-0 rounded-full ${agentStyles[agent].dot}`} aria-hidden />
      <p className="text-sm leading-relaxed">
        <span className={`font-semibold ${agentStyles[agent].name}`}>{agentNames[agent]}</span>
        <span className="text-muted-foreground"> </span>
        <span className="text-foreground/85">{text}</span>
      </p>
    </div>
  )
}

export default function HeroDemo() {
  const { c, language } = useLanguage()
  const d = c.demo
  const [typed, setTyped] = useState(0)
  const [step, setStep] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const play = useCallback(() => {
    clear()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const q = d.question
    if (reduce) {
      setTyped(q.length)
      setStep(FINAL_STEP)
      return
    }
    setTyped(0)
    setStep(0)
    const start = 500
    const perChar = 26
    for (let i = 1; i <= q.length; i++) {
      timers.current.push(setTimeout(() => setTyped(i), start + i * perChar))
    }
    const afterTyping = start + q.length * perChar + 450
    const gaps = [0, 900, 900, 1100, 900]
    let t = afterTyping
    gaps.forEach((gap, i) => {
      t += gap
      timers.current.push(setTimeout(() => setStep(i + 1), t))
    })
  }, [d.question])

  useEffect(() => {
    play()
    return clear
  }, [play, language])

  const typing = typed < d.question.length

  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_0_rgba(19,32,58,0.04),0_24px_48px_-24px_rgba(19,32,58,0.25)] dark:shadow-none">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5 sm:px-5">
          <span className="text-sm font-medium text-muted-foreground">{d.label}</span>
          <button
            type="button"
            onClick={play}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            {d.replay}
          </button>
        </div>

        <div className="space-y-4 p-4 sm:p-5" aria-live="off">
          {/* Question */}
          <div className="flex justify-end">
            <p className="max-w-[88%] rounded-lg rounded-br-sm bg-primary px-3.5 py-2.5 text-[0.95rem] leading-snug text-primary-foreground">
              <span className="sr-only">{d.question}</span>
              <span aria-hidden>
                {d.question.slice(0, typed)}
                {typing && <span className="demo-caret" />}
              </span>
            </p>
          </div>

          <AgentLine agent="scientist" text={d.steps.scientist} on={step >= 1} />
          <AgentLine agent="analysis" text={d.steps.analysis} on={step >= 2} />

          <div className="demo-reveal ml-5 space-y-3" data-on={step >= 2}>
            <pre className="overflow-x-auto rounded-md bg-code px-3.5 py-3 font-mono text-[0.72rem] leading-relaxed text-code-foreground sm:text-xs">
              <code>{SQL}</code>
            </pre>

            <div className="demo-reveal rounded-md border border-border p-3.5" data-on={step >= 3}>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-xs font-medium text-foreground/80">{d.chartTitle}</span>
                <span className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-[2px] bg-muted-foreground/40" aria-hidden />
                    {d.q1}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-[2px] bg-analysis" aria-hidden />
                    {d.q2}
                  </span>
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3" role="img" aria-label={d.chartTitle}>
                {CHART.map((v, i) => {
                  const hot = i === 1
                  return (
                    <div key={i} className="flex flex-col items-center gap-1.5">
                      <div className="flex h-24 w-full items-end justify-center gap-1">
                        <div
                          className="demo-bar w-[38%] rounded-t-[3px] bg-muted-foreground/35"
                          style={{ height: `${(v.q1 / CHART_MAX) * 100}%`, transitionDelay: `${i * 70}ms` }}
                          data-on={step >= 3}
                        />
                        <div
                          className={`demo-bar w-[38%] rounded-t-[3px] ${hot ? 'bg-analysis' : 'bg-analysis/45'}`}
                          style={{ height: `${(v.q2 / CHART_MAX) * 100}%`, transitionDelay: `${i * 70 + 40}ms` }}
                          data-on={step >= 3}
                        />
                      </div>
                      <span className={`text-center text-[0.68rem] leading-tight ${hot ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                        {d.regions[i]}
                        <span className="block tabular-nums">
                          {v.q2.toLocaleString(language === 'tr' ? 'tr-TR' : 'en-US', { minimumFractionDigits: 1 })}%
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <AgentLine agent="engineer" text={d.steps.engineer} on={step >= 4} />

          <div className="demo-reveal rounded-md border-l-[3px] border-primary bg-secondary/70 px-3.5 py-3" data-on={step >= 5}>
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-primary">{d.decisionLabel}: </span>
              {d.decision}
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted-foreground">{d.caption}</figcaption>
    </figure>
  )
}
