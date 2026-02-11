"use client"

const badges = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Seal_of_the_United_Mexican_States.svg/512px-Seal_of_the_United_Mexican_States.svg.png",
    title: "Distintivo H",
    desc: "Manejo higienico de alimentos y buenas practicas operativas.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_SECTUR_Mexico.svg/512px-Logo_SECTUR_Mexico.svg.png",
    title: "Distintivo M",
    desc: "Modernizacion y gestion para PyMES turisticas.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Leaf_icon_03.svg/512px-Leaf_icon_03.svg.png",
    title: "Distintivo S",
    desc: "Buenas practicas de sustentabilidad y responsabilidad.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Document_icon_%28the_Noun_Project_211%29.svg/512px-Document_icon_%28the_Noun_Project_211%29.svg.png",
    title: "Registros",
    desc: "STPS, CONOCER, SECTUR/ICTUR y cumplimiento para gobierno.",
  },
]

export function CertificacionSection() {
  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="certificacion" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Certificacion
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Distintivos y Avales
          </h2>
          <p className="text-[var(--text-light)]">
            Presentacion limpia y organica para distintivos, programas y registros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="bg-white rounded-2xl border border-border shadow-xl p-5 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="bg-muted rounded-xl h-28 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={badge.img || "/placeholder.svg"}
                  alt={badge.title}
                  className="w-full h-full object-contain p-3"
                  crossOrigin="anonymous"
                />
              </div>
              <h4 className="font-extrabold text-[var(--navy)] mb-1">{badge.title}</h4>
              <p className="text-sm text-[var(--text-light)]">{badge.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() =>
              scrollToContact("Solicito informacion sobre Certificacion (distintivos y avales).")
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
