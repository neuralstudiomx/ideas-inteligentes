"use client"

const cards = [
  {
    title: "Diagnostico y alineacion",
    items: [
      "Lectura territorial y vocacion turistica",
      "Priorizacion de proyectos con enfoque 2025-2030",
      "Metricas e indicadores de seguimiento",
    ],
  },
  {
    title: "Cadenas productivas",
    items: [
      "Articulacion de actores y proveedores locales",
      "Integracion de oferta y mejora operativa",
      "Ruta critica de implementacion",
    ],
  },
  {
    title: "Producto y comercializacion",
    items: [
      "Diseno de experiencias y empaquetamiento",
      "Plan de promocion y embudos de conversion",
      "Capacitacion y acompanamiento",
    ],
  },
]

export function ProgramaSectorialSection() {
  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="pst" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Programa Sectorial del Turismo 2025 - 2030
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Servicios al Programa Sectorial
          </h2>
          <p className="text-[var(--text-light)]">
            Intervenciones orientadas a impulsar competitividad, productividad y comercializacion en
            destinos y empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative bg-gradient-to-b from-white to-[#fbfdff] border border-border rounded-2xl p-7 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[var(--blue-light)]/10" />
              <h3 className="font-serif text-xl text-[var(--navy)] mb-4 relative">{card.title}</h3>
              <ul className="flex flex-col gap-3 relative">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-[var(--text-light)] text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--red)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() =>
              scrollToContact(
                "Solicito informacion sobre Servicios al Programa Sectorial del Turismo 2025-2030."
              )
            }
            className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all"
          >
            Solicitar Informacion
          </button>
        </div>
      </div>
    </section>
  )
}
