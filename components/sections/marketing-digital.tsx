"use client"

export function MarketingEditorialSection() {
  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="marketing-editorial" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Marketing Digital y Editorial
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Visibilidad, reputacion y contenido
          </h2>
          <p className="text-[var(--text-light)]">
            Estrategias digitales y editoriales para destinos y empresas turisticas: contenido, pauta, conversion y publicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Marketing Digital */}
          <div className="lg:col-span-2 relative bg-white rounded-3xl shadow-xl p-10 border border-border overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-[var(--red)]/10" />
            <h3 className="font-serif text-2xl text-[var(--navy)] mb-3 relative">
              Marketing Digital
            </h3>
            <p className="text-[var(--text-light)] mb-4 relative">
              Planificacion y ejecucion con enfoque a resultados y medicion.
            </p>
            <ul className="flex flex-col gap-3 relative mb-6">
              {[
                "Gestion de redes sociales (contenido + calendario)",
                "Pauta digital (Meta/Google) con segmentacion turistica",
                "Landing pages y embudos de conversion",
                "Analitica y optimizacion mensual",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[var(--text-light)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--red)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => scrollToContact("Solicito informacion sobre Marketing Digital.")}
              className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all relative"
            >
              Solicitar Informacion
            </button>
          </div>

          {/* Servicios Editoriales */}
          <div className="relative bg-white rounded-3xl shadow-xl p-10 border border-border overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-[var(--red)]/10" />
            <h3 className="font-serif text-2xl text-[var(--navy)] mb-3 relative">
              Servicios Editoriales
            </h3>
            <p className="text-[var(--text-light)] mb-4 relative">
              Apoyo integral para documentos tecnicos, reportes, manuales, guias y material institucional.
            </p>
            <ul className="flex flex-col gap-3 relative mb-6">
              {[
                "Redaccion y correccion de estilo",
                "Diseno editorial (PDF listo para impresion o web)",
                "Presentaciones (pitch/diagnostico/planes)",
                "Diagnostico digital y benchmarking",
                "Guia de identidad visual para redes",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[var(--text-light)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--red)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => scrollToContact("Solicito informacion sobre Servicios Editoriales.")}
              className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all relative"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
