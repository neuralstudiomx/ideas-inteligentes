"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

const painCards = [
  {
    title: "Pueblos Mágicos",
    text: "¿La calificación de tu Pueblo Mágico requiere mejora?",
  },
  {
    title: "Cadenas Productivas",
    text: "¿Tu destino turístico no vende?",
  },
  {
    title: "Experiencias",
    text: "¿Tu destino no sabe cómo desarrollar experiencias de viaje y comercializarlas?",
  },
]

export function HeroSection() {
  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      id="inicio"
      className="min-h-screen flex items-center relative pt-48 pb-40"
      style={{
        background: `linear-gradient(135deg, rgba(51, 78, 132, 0.95), rgba(93, 114, 158, 0.85)), url('/distintivos/FotoStock.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 w-full py-16">
        <div className="max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold mb-10">
            <CheckCircle className="h-4 w-4" />
            Alineados al Programa Sectorial 2025-2030
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tight text-balance">
            Transformamos destinos emergentes en destinos consolidados
          </h1>

          <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-12 max-w-3xl">
            Impulsamos la competitividad y la innovación a través de formación especializada, 
            asesoría estratégica y soluciones creativas que conectan cultura, territorio, 
            productividad, tecnología y experiencia.
          </p>

          {/* Pain cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {painCards.map((card) => (
              <button
                key={card.title}
                type="button"
                onClick={() => scrollToContact(`${card.title}: ${card.text}`)}
                className="bg-[#d7181e] text-white p-6 rounded-xl text-center cursor-pointer hover:-translate-y-0.5 hover:brightness-105 transition-all min-h-[160px] border-none"
              >
                <div className="font-extrabold uppercase text-base tracking-wide mb-2.5">
                  {card.title}
                </div>
                <div className="text-base leading-relaxed">{card.text}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
