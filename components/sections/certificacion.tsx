"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const distintivos = [
  {
    name: "Distintivo H",
    image: "/distintivos/Distintivo H.png",
    description: "Garantía de higiene y seguridad en el manejo de alimentos y bebidas.",
  },
  {
    name: "Distintivo M",
    image: "/distintivos/Distintivo M.png",
    description: "Optimización de procesos y calidad en la gestión de PyMES turísticas.",
  },
  {
    name: "Distintivo S",
    image: "/distintivos/Distintivo S.png",
    description: "Reconocimiento a las mejores prácticas de sustentabilidad y responsabilidad ambiental.",
  },
  {
    name: "Punto Limpio",
    image: "/distintivos/Punto Limpio.png",
    description: "Sello de máxima calidad higiénica y protección sanitaria en todas las áreas.",
  },
  {
    name: "Tesoros de México",
    image: "/distintivos/Tesoros Mexico.png",
    description: "Experiencias premium que destacan la gastronomía y arquitectura nacional.",
  },
  {
    name: "Turismo Incluyente",
    image: "/distintivos/Turismo Incluyente.png",
    description: "Servicios e instalaciones con plena accesibilidad para personas con discapacidad.",
  },
  {
    name: "Turismo de Salud",
    image: "/distintivos/Turismo de Salud.png",
    description: "Estándares de calidad especializados en el sector médico y de bienestar.",
  },
  {
    name: "Turismo Comunitario (TC)",
    image: "/distintivos/Turismo Comunitario.png",
    description: "Viajes auténticos gestionados por comunidades que preservan su cultura y entorno.",
  },
  {
    name: "Distintivo Nacional de Calidad Turística",
    image: "/distintivos/Distintivo Nacional De Calidad Turistica.png",
    description: "Máximo galardón a la excelencia operativa de las empresas del sector.",
  },
]

export function CertificacionSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % distintivos.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % distintivos.length
      cards.push(distintivos[index])
    }
    return cards
  }

  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="certificacion" className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--red)] font-extrabold uppercase text-sm tracking-widest block mb-3">
            Certificaciones
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-5">
            Distintivos y Avales
          </h2>
          <p className="text-[var(--text-light)] text-lg max-w-3xl mx-auto">
            Reconocimientos oficiales que garantizan excelencia, calidad y compromiso en el sector turístico mexicano.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisibleCards().map((distintivo, idx) => (
                <div
                  key={`${distintivo.name}-${idx}`}
                  className="bg-white rounded-2xl border border-border shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-48 h-48 mb-6">
                    <Image
                      src={distintivo.image}
                      alt={distintivo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-extrabold text-[var(--navy)] text-xl mb-3">
                    {distintivo.name}
                  </h3>
                  <p className="text-[var(--text-light)] text-base leading-relaxed">
                    {distintivo.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {distintivos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[var(--red)]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info text and CTA */}
        <div className="text-center mt-12 space-y-6">
          <p className="text-[var(--text-light)] text-sm">
            Pausa el carrusel pasando el cursor sobre las tarjetas
          </p>
          <button
            type="button"
            onClick={() =>
              scrollToContact("Solicito información sobre Certificación (distintivos y avales).")
            }
            className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all"
          >
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  )
}
