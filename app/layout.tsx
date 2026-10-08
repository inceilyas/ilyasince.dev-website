import type { Metadata, Viewport } from 'next'
import { Schibsted_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/hooks/use-language'
import { content, site } from '@/lib/content'
import './globals.css'

const sans = Schibsted_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-schibsted',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: content.en.meta.title,
  description: content.en.meta.description,
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: content.en.meta.title,
    description: content.en.meta.description,
    url: site.url,
    siteName: site.fullName,
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: content.en.meta.title,
    description: content.en.meta.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f7fa' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1422' },
  ],
}

// Applies the saved or system theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
