import React from "react"
import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Ideas Inteligentes | Consultoría Estratégica Turística',
  description:
    'Impulsamos la competitividad y la innovación turística a través de formación especializada, asesoría estratégica y soluciones creativas.',
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
