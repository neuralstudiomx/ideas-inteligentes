"use client"

import React from "react"

import { useState } from "react"
import {
  Utensils,
  BarChart3,
  Calculator,
  Users,
  Briefcase,
  Rocket,
  ConciergeBell,
  Wine,
  UtensilsCrossed,
  Bed,
  Brain,
  PenTool,
  Instagram,
  Coins,
  FileText,
  UserCog,
  Handshake,
  LayoutDashboard,
  ClipboardCheck,
  Store,
} from "lucide-react"

type TabKey = "operacion" | "marketing" | "finanzas" | "humano" | "management" | "emprendedor"

const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "operacion", label: "Productos y Servicios Turisticos", icon: Utensils },
  { key: "marketing", label: "Marketing", icon: BarChart3 },
  { key: "finanzas", label: "Administracion y Finanzas", icon: Calculator },
  { key: "humano", label: "Capital Humano", icon: Users },
  { key: "management", label: "Management", icon: Briefcase },
  { key: "emprendedor", label: "Desarrollo Emprendedor", icon: Rocket },
]

const courses: Record<TabKey, { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[]> = {
  operacion: [
    { icon: ConciergeBell, title: "Atencion al cliente y excelencia", desc: "Tecnicas avanzadas para superar expectativas en cada punto de contacto." },
    { icon: Wine, title: "Coord. Alimentos y Bebidas (EC0042)", desc: "Estandar de competencia para supervision de restaurantes." },
    { icon: UtensilsCrossed, title: "Atencion a comensales (EC0038)", desc: "Protocolos de servicio y etiqueta en mesa." },
    { icon: Bed, title: "Preparacion de habitaciones (EC0043)", desc: "Estandares de limpieza para camaristas." },
  ],
  marketing: [
    { icon: Brain, title: "Neuroventas aplicadas al turismo", desc: "Entiende la mente del viajero para vender mas." },
    { icon: PenTool, title: "Diseno de productos turisticos", desc: "De la idea a la venta: metodologia paso a paso." },
    { icon: Instagram, title: "Marketing digital y redes sociales", desc: "Estrategias de pauta, contenido y conversion para destinos y empresas." },
  ],
  finanzas: [
    { icon: Coins, title: "Finanzas para no financieros", desc: "Conceptos basicos contables para duenos de PyMES." },
    { icon: FileText, title: "Costos de alimentos y bebidas", desc: "Control de mermas y costeo de menus rentables." },
  ],
  humano: [
    { icon: UserCog, title: "Liderazgo 360 en turismo", desc: "Habilidades directivas para equipos y operacion turistica." },
    { icon: Handshake, title: "Manejo de conflictos", desc: "Negociacion y solucion de problemas con clientes y colaboradores." },
  ],
  management: [
    { icon: LayoutDashboard, title: "Gestion de proyectos turisticos", desc: "Planificacion, ejecucion y control con enfoque a resultados e impacto." },
    { icon: ClipboardCheck, title: "Gestion de calidad y servicio", desc: "Estandarizacion operativa para elevar satisfaccion y reputacion." },
  ],
  emprendedor: [
    { icon: Rocket, title: "Emprendimiento turistico", desc: "De la idea al modelo de negocio con enfoque turistico y comercial." },
    { icon: Store, title: "Modelos de negocio y validacion", desc: "Propuesta de valor, cliente ideal, pricing y pruebas de mercado." },
  ],
}

export function CapacitacionSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("operacion")

  // Listen for tab change events from navbar submenu
  React.useEffect(() => {
    const handler = (e: Event) => {
      const tabKey = (e as CustomEvent).detail as TabKey
      if (tabKey && courses[tabKey]) {
        setActiveTab(tabKey)
      }
    }
    window.addEventListener('changeCapTab', handler)
    return () => window.removeEventListener('changeCapTab', handler)
  }, [])

  const scrollToContact = (prefill: string) => {
    const msg = document.getElementById("mensaje") as HTMLTextAreaElement | null
    if (msg) {
      msg.value = prefill + "\n\n"
      msg.focus()
    }
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="capacitacion" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Soluciones Formativas
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Capacitacion
          </h2>
          <p className="text-[var(--text-light)]">
            Explora nuestras areas de especialidad. Cada categoria incluye un boton para solicitar
            informacion.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl">
          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 bg-muted p-2.5 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-extrabold transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-[var(--navy)] text-white shadow-lg shadow-blue-900/30"
                    : "text-[var(--text-light)] hover:text-[var(--navy)] hover:bg-[var(--navy)]/5"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
            {courses[activeTab].map((course) => (
              <div
                key={course.title}
                className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--blue-light)] transition-all"
              >
                <course.icon className="h-8 w-8 text-[var(--blue-light)]" />
                <h4 className="font-extrabold text-[var(--navy)] text-base leading-snug">
                  {course.title}
                </h4>
                <p className="text-sm text-[var(--text-light)] leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                scrollToContact(
                  `Solicito informacion sobre Capacitacion: ${tabs.find((t) => t.key === activeTab)?.label}.`
                )
              }
              className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all"
            >
              Solicitar Informacion
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
