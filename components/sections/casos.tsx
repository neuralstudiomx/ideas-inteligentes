"use client"

import { ArrowRight } from "lucide-react"

const projects = [
  {
    url: "impulsotlaxco.com",
    link: "https://impulsotlaxco.com/",
    img: "/ImpulsoTlaxco.png",
    tag: "Pueblo Magico",
    title: "Tlaxco, Tlaxcala",
    desc: "Integracion de cadena productiva y diseno de experiencia turistica con oferta local.",
    prefill: "Quiero conocer el caso Tlaxco, Tlaxcala.",
  },
  {
    url: "huamantlamagico.com",
    link: "https://huamantlamagico.com/",
    img: "/Huamantla.png",
    tag: "Desarrollo de Producto",
    title: "Huamantla, Tlaxcala",
    desc: "Diseno de experiencias y articulacion cultural para comercializacion de producto turistico.",
    prefill: "Quiero conocer el caso Huamantla, Tlaxcala.",
  },
  {
    url: "vivemexicomagico.com.mx",
    link: "",
    img: "/placeholder.svg",
    tag: "Plataforma Digital",
    title: "Vive Mexico Magico",
    desc: "Ecosistema digital de comercializacion para experiencias y destinos turisticos.",
    prefill: "Quiero conocer el caso Vive Mexico Magico.",
  },
]

export function CasosSection() {
  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="casos" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Trayectoria Probada
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Casos de Exito
          </h2>
          <p className="text-[var(--text-light)]">
            Proyectos destacados con imagen en cada caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border/50 hover:-translate-y-3 hover:shadow-2xl transition-all group"
            >
              {/* Browser mockup */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500" />
                <div className="flex-1 ml-2 h-5 bg-white rounded text-[10px] text-[var(--text-light)] flex items-center px-2 shadow-inner">
                  {project.url}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.img || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[var(--blue-light)] block mb-2">
                  {project.tag}
                </span>
                <h3 className="font-serif text-xl text-[var(--navy)] font-extrabold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-light)] mb-4 leading-relaxed">
                  {project.desc}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-extrabold text-[var(--red)] inline-flex items-center gap-1.5 hover:gap-3 transition-all"
                  >
                    Ver caso <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => scrollToContact(project.prefill)}
                    className="text-sm font-extrabold text-[var(--red)] inline-flex items-center gap-1.5 hover:gap-3 transition-all bg-transparent border-none cursor-pointer"
                  >
                    Ver caso <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
