"use client"

export function ServiciosEditorialesSection() {
  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="servicios-editoriales" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Servicios Editoriales
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Un bloque, un objetivo
          </h2>
          <p className="text-[var(--text-light)]">
            Edición, redacción y diseño editorial para proyectos turísticos y gubernamentales.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-xl p-10 border border-border overflow-hidden max-w-3xl mx-auto">
          <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-[var(--red)]/10" />
          <h3 className="font-serif text-2xl text-[var(--navy)] mb-3 relative">Editorial</h3>
          <p className="text-[var(--text-light)] mb-4 relative">
            Apoyo integral para documentos tecnicos, reportes, manuales, guias y material
            institucional.
          </p>
          <ul className="flex flex-col gap-3 relative mb-6">
            {[
              "Redaccion y correccion de estilo",
              "Diseno editorial (PDF listo para impresion o web)",
              "Presentaciones (pitch/diagnostico/planes)",
            ].map((item) => (
              <li
                key={item}
                className="text-[var(--text-light)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--red)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-center relative">
            <button
              type="button"
              onClick={() => scrollToContact("Solicito información sobre Servicios Editoriales.")}
              className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
