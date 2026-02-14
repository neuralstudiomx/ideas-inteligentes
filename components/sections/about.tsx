import {
  Rocket,
  FileText,
  Eye,
  Gem,
  CheckCircle,
  Compass,
  UsersRound,
  Lightbulb,
  BarChart3,
} from "lucide-react"

const values = [
  {
    icon: Compass,
    title: "Integridad",
    desc: "Actuamos con transparencia y responsabilidad en cada intervención.",
  },
  {
    icon: UsersRound,
    title: "Colaboración",
    desc: "Construimos soluciones con actores locales: gobierno, empresa y comunidad.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    desc: "Aplicamos herramientas y metodologías actuales para resultados medibles.",
  },
  {
    icon: BarChart3,
    title: "Orientación a resultados",
    desc: "Priorizamos impacto, productividad y comercialización real.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Sobre la Firma
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Arquitectos de Experiencias Turísticas
          </h2>
          <p className="text-[var(--text-light)]">
            Más que consultores, somos aliados estratégicos dedicados a elevar la competitividad de
            los destinos turísticos en México.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission - large */}
          <div className="md:col-span-2 bg-[var(--navy)] text-white rounded-3xl p-10 shadow-xl">
            <Rocket className="h-12 w-12 mb-5" />
            <h3 className="text-2xl font-extrabold text-white mb-4">Nuestra Misión</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Ofrecer servicios de capacitación, asesoría y acompañamiento técnico para impulsar la
              competitividad de empresas y destinos, generando impactos positivos económicos y
              sociales.
            </p>
          </div>

          {/* Registros - tall */}
          <div
            className="md:row-span-2 rounded-3xl p-10 text-white shadow-xl"
            style={{ background: "linear-gradient(180deg, var(--red) 0%, #b01212 100%)" }}
          >
            <FileText className="h-12 w-12 mb-5" />
            <h3 className="text-2xl font-extrabold text-white mb-4">Registros y Avales</h3>
            <p className="text-sm text-white/90 mb-5">
              Cumplimos con toda la normativa para operar con Gobiernos:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                { label: "STPS:", desc: "Agente Capacitador Externo (IIC110228-6PA-0013)" },
                { label: "SECTUR - ICTUR:", desc: "Registro Nacional" },
                { label: "CONOCER:", desc: "Estándares de Competencia" },
                { label: "COMPRANET:", desc: "Proveedor de Gobierno" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-2 border-b border-white/20 pb-3 last:border-0 text-sm"
                >
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    <strong>{item.label}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-border">
            <Eye className="h-12 w-12 text-[var(--navy)] mb-5" />
            <h3 className="text-xl font-extrabold text-[var(--navy)] mb-3">Visión Global</h3>
            <p className="text-[var(--text-light)]">
              Posicionarnos como la consultora referente para el desarrollo turístico sostenible.
            </p>
          </div>

          {/* Excelencia */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-border">
            <Gem className="h-12 w-12 text-[var(--navy)] mb-5" />
            <h3 className="text-xl font-extrabold text-[var(--navy)] mb-3">Excelencia</h3>
            <p className="text-[var(--text-light)]">
              Compromiso con la calidad. El cliente es nuestra mayor posesión y superamos sus
              expectativas.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl border border-border shadow-lg p-10 flex gap-5 items-start hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <v.icon className="h-9 w-9 text-[var(--red)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-[var(--navy)] mb-2 text-lg">{v.title}</h4>
                <p className="text-[var(--text-light)] text-base leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
