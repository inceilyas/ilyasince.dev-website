// GDI mark: three rising bars in the three agent colors.
export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="7" className="fill-[#13203a] dark:fill-[#1d2b47]" />
      <rect x="7" y="16" width="4.5" height="9" rx="1.5" fill="#a68cff" />
      <rect x="13.75" y="11" width="4.5" height="14" rx="1.5" fill="#3fc8b2" />
      <rect x="20.5" y="6" width="4.5" height="19" rx="1.5" fill="#f0b443" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="text-lg font-bold tracking-tight">GDI</span>
    </span>
  )
}
