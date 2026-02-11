"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

const painCards = [
  {
    title: "Pueblos Magicos",
    text: "La calificacion de tu Pueblo Magico requiere mejora?",
  },
  {
    title: "Cadenas Productivas",
    text: "Tu destino turistico no vende?",
  },
  {
    title: "Experiencias",
    text: "Tu destino no sabe como desarrollar experiencias de viaje y comercializarlas?",
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
      className="min-h-screen flex items-center relative pt-40 pb-32"
      style={{
        background: `linear-gradient(135deg, rgba(14, 45, 107, 0.95), rgba(14, 45, 107, 0.75)), url('https://lugares.inah.gob.mx/sites/default/files/2023-04/Tlaxcala.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 w-full py-16">
        <div className="max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold mb-6">
            <CheckCircle className="h-4 w-4" />
            Alineados al Programa Sectorial 2025-2030
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight text-balance">
            Transformamos el turismo con ideas inteligentes
          </h1>

          <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-3xl">
            Impulsamos la competitividad y la innovacion a traves de formacion especializada,
            asesoria estrategica y soluciones creativas que conectan cultura, territorio,
            productividad, tecnologia y experiencia.
          </p>

          {/* Pain cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {painCards.map((card) => (
              <button
                key={card.title}
                type="button"
                onClick={() => scrollToContact(`${card.title}: ${card.text}`)}
                className="bg-[#d7181e] text-white p-5 rounded-xl text-center cursor-pointer hover:-translate-y-0.5 hover:brightness-105 transition-all min-h-[100px] border-none"
              >
                <div className="font-extrabold uppercase text-sm tracking-wide mb-1.5">
                  {card.title}
                </div>
                <div className="text-sm leading-snug">{card.text}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
