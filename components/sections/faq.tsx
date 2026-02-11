"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"

const faqs = [
  {
    q: "Sus cursos tienen validez oficial?",
    a: "Si, nuestros programas se alinean a la STPS y estandares CONOCER, segun corresponda al proyecto.",
    prefill: "Hola, me gustaria saber mas sobre la validez oficial de sus cursos y certificaciones.",
  },
  {
    q: "Trabajan fuera de CDMX?",
    a: "Si, tenemos cobertura nacional y modalidad hibrida (presencial/remoto) segun el alcance.",
    prefill: "Hola, me interesa saber si ofrecen servicios en mi localidad fuera de CDMX.",
  },
  {
    q: "Como solicito una cotizacion?",
    a: 'Da clic en "Solicitar Informacion" en la seccion de tu interes o escribe en el formulario de contacto.',
    prefill: "Hola, me gustaria solicitar una cotizacion para los servicios de Ideas Inteligentes.",
  },
  {
    q: "Ofrecen capacitacion a la medida?",
    a: "Si, disenamos programas personalizados segun el perfil del destino, empresa o dependencia.",
    prefill: "Hola, me interesa un programa de capacitacion a la medida para mi organizacion.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Soporte
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-[var(--text-light)]">
            Resolvemos dudas comunes sobre nuestros servicios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-extrabold text-[var(--navy)] bg-transparent border-none cursor-pointer"
              >
                <span>{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="h-5 w-5 text-[var(--red)] shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[var(--red)] shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-border pt-4">
                  <p className="text-[var(--text-light)] leading-relaxed mb-3">{faq.a}</p>
                  <button
                    type="button"
                    onClick={() => scrollToContact(faq.prefill)}
                    className="inline-flex items-center gap-2 text-[var(--red)] font-bold text-sm hover:underline transition-all"
                  >
                    Enviar solicitud <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
