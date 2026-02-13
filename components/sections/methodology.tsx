const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Análisis del territorio, vocación turística y mapeo de la cadena de valor.",
  },
  {
    num: "02",
    title: "Diseño",
    desc: "Creación de producto turístico experiencial y plan de capacitación a la medida.",
  },
  {
    num: "03",
    title: "Implementación",
    desc: "Capacitación in-situ, certificación de estándares y workshops.",
  },
  {
    num: "04",
    title: "Comercialización",
    desc: "Digitalización, embudos de venta y promoción en redes sociales.",
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Cómo trabajamos
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Metodología de Intervención Integral
          </h2>
          <p className="text-[var(--text-light)]">
            Nuestro proceso garantiza resultados medibles, desde el diagnóstico hasta la
            comercialización digital.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[40px] left-[50px] right-[50px] h-0.5 bg-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-8 rounded-2xl shadow-xl text-center hover:-translate-y-2.5 hover:border-b-4 hover:border-[var(--red)] transition-all"
              >
                <div className="w-20 h-20 bg-[var(--navy)] text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5 border-4 border-white shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-extrabold text-[var(--navy)] mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--text-light)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
