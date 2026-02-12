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
  Building,
  Network,
  CheckCircle2,
} from "lucide-react"

type MainTabKey = "operativo" | "gerentes" | "funcionarios" | "talleres"
type GerentesTabKey = "productos" | "marketing" | "finanzas" | "humano" | "management" | "emprendedor"

const mainTabs: { key: MainTabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "operativo", label: "Personal Operativo", icon: Users },
  { key: "gerentes", label: "Gerentes", icon: Briefcase },
  { key: "funcionarios", label: "Funcionarios Públicos", icon: Building },
  { key: "talleres", label: "Talleres", icon: Network },
]

const gerentesTabs: { key: GerentesTabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "productos", label: "Productos y Servicios", icon: Utensils },
  { key: "marketing", label: "Marketing", icon: BarChart3 },
  { key: "finanzas", label: "Finanzas", icon: Calculator },
  { key: "humano", label: "Capital Humano", icon: Users },
  { key: "management", label: "Management", icon: Briefcase },
  { key: "emprendedor", label: "Desarrollo Emprendedor", icon: Rocket },
]

const operativoContent = {
  intro: "CURSOS PARA PERSONAL OPERATIVO Y SUPERVISOR DE EMPRESAS TURÍSTICAS Y CERTIFICACIONES TURÍSTICAS. Son cursos cuyo contenido se alinea a los estándares de competencia (EC), que dotan de saberes a aquellas personas o empresas interesadas en la certificación en las competencias que impulsa el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).",
  courses: [
    "EC0038: Atención a comensales.",
    "EC0042: Coordinación de los servicios de alimentos y bebidas.",
    "EC0043: Preparación de habitaciones para alojamiento temporal.",
    "EC0044: Coordinación de los servicios de limpieza de habitaciones y áreas de estancia para alojamiento temporal.",
    "EC0045: Prestación del servicio de recepción y atención al huésped para su alojamiento temporal.",
    "EC0072: Atención in situ a visitantes durante recorridos turísticos.",
    "EC0081: Manejo higiénico de alimentos.",
  ]
}

const gerentesContent: Record<GerentesTabKey, { intro: string; courses: string[] }> = {
  productos: {
    intro: "Cursos dirigidos a las pequeñas y medianas empresas turísticas para solucionar sus problemas funcionales y desarrollar ventajas competitivas.",
    courses: [
      "Atención al cliente y excelencia en el servicio.",
      "Relaciones públicas y gestión de quejas.",
      "Claves para la seguridad al turista y personal.",
      "Desarrollo de productos y servicios turísticos.",
      "Creatividad e innovación turística.",
      "Modelos de desarrollo de productos.",
      "Uso de herramientas de calidad para la mejora continua.",
      "Idiomas: Inglés, alemán, francés y japonés turístico.",
      "Inglés comercial para personal hotelero, restaurantero, de bares, guías y centros ecoturísticos.",
      "Operación y servicio hotelero, restaurantero y de bebidas.",
      "Taller de estructuración y adecuación de experiencias turísticas.",
      "Primeros auxilios elementales y en áreas remotas.",
      "Cultura turística y desarrollo de productos culturales creativos.",
      "Manejo de proyectos culturales y su financiamiento.",
      "Preparación de inventario e introducción al patrimonio cultural.",
      "Derechos de autor y creación de platillos con identidad.",
    ]
  },
  marketing: {
    intro: "Estrategias comerciales y de promoción para el sector turístico.",
    courses: [
      "Diseño de productos turísticos: de la idea a la propuesta de valor y al modelo de negocios.",
      "Modelos para el establecimiento de precios y tarifas en pymes turísticas.",
      "Comercialización turística y Outbound Marketing.",
      "Técnicas de negociación de precios y tarifas para OTA'S.",
      "Comercio electrónico y desarrollo de marca para pymes turísticas.",
      "Marketing experiencial y sensorial.",
      "Identificación de perfiles del turista y cálculo de valor de segmentos.",
      "Marketing por redes sociales y estrategias de emailing.",
      "Estrategias y tácticas para la fijación de precios.",
      "Tendencias del mercado turístico.",
      "Técnicas de venta e introducción al neuromarketing turístico.",
      "Taller de neuroventas aplicadas al turismo.",
      "Formación de fuerza de ventas.",
    ]
  },
  finanzas: {
    intro: "Gestión financiera y administrativa para empresas turísticas.",
    courses: [
      "Introducción a la administración financiera para pymes turísticas.",
      "Finanzas para no financieros y análisis financiero.",
      "Fuentes de financiamiento para pymes y nuevos emprendimientos.",
      "Contabilidad de costos de alimentos y bebidas.",
      "Contabilidad de impuestos para pymes turísticas.",
    ]
  },
  humano: {
    intro: "Desarrollo y gestión del talento en organizaciones turísticas.",
    courses: [
      "El capital humano como ventaja competitiva.",
      "Captación e integración del capital humano.",
      "Habilidad de entrevistar por competencias.",
      "Desarrollo de competencias y administración de compensaciones.",
      "Cultura organizacional, motivación y liderazgo.",
      "Comunicación asertiva, trabajo en equipo y manejo de conflictos.",
      "Dirección estratégica del factor humano.",
    ]
  },
  management: {
    intro: "Habilidades directivas y gestión estratégica para líderes turísticos.",
    courses: [
      "Formación y liderazgo de equipos efectivos.",
      "Liderazgo de 360°, coaching y mentoring empresarial.",
      "Comunicación eficaz, persuasión y manejo de objeciones.",
      "Gestión del cambio, pensamiento creativo y empatía.",
      "Pymes turísticas emocionalmente inteligentes.",
      "Planeación estratégica: diseño de propósitos, análisis FODA y plan anual.",
      "Gestión de la mejora continua y balance scorecard.",
      "Programas de calidad de SECTUR y mejora de servicios en áreas de contacto.",
      "Gestión de la cadena de valor y estrategias competitivas.",
      "Talleres de 5 S's Kaizen (introductorio y avanzado).",
      "Sistemas de gestión ambiental para disminuir impactos y atraer nuevos mercados.",
    ]
  },
  emprendedor: {
    intro: "Herramientas para emprendedores y nuevos negocios turísticos.",
    courses: [
      "Modelos de negocios para nuevos emprendimientos.",
      "Tendencias del mercado y análisis de fuerzas.",
      "Identificación de oportunidades y generación de ideas de negocio.",
      "Técnica de Value Proposition Canvas.",
      "Diseño de modelos de negocios con Business Model Canvas y Lean Canvas.",
      "Financiamiento para emprendimientos turísticos.",
      "Planes de negocio integrales: estudio de mercado, técnico, comercial y financiero.",
    ]
  }
}

const funcionariosContent = {
  intro: "Dirigidos a facilitar procesos de gobernanza y crear ambientes propicios para el desarrollo turístico local.",
  courses: [
    "Política turística y análisis del mercado.",
    "Análisis de agenda de competitividad.",
    "Municipio y gestión de destinos.",
    "Planeación estratégica municipal y participativa.",
    "Indicadores de buen desempeño municipal en turismo.",
    "Preparación de estadística turística básica.",
    "Gobernanza: superestructura, programas, regulación y funcionamiento de redes.",
    "Trazado estratégico para turismo comunitario.",
    "Introducción al Programa de Pueblos Mágicos.",
    "Fomento a la articulación de cadenas productivas.",
    "Protección civil e inglés informativo turístico.",
    "Capacitación para policías turísticos y funcionarios de kioscos.",
    "Igualdad de género y economía solidaria.",
  ]
}

const talleresContent = {
  intro: "Orientados a promover la productividad y la innovación mediante el encadenamiento del destino, con enfoque primordial en Pueblos Mágicos.",
  courses: [
    "Introducción a las cadenas productivas turísticas de Pueblos Mágicos.",
    "Talleres de diagnóstico, mapeo y programa de trabajo de la cadena.",
    "Gestión y evaluación de resultados del programa de trabajo.",
    "Gobernanza y trabajo en equipo en cadenas productivas.",
    "Marketing de redes sociales y diseño profesional de páginas web (incluye hosting).",
    "Desarrollo de portafolio de productos turísticos actuales y potenciales.",
    "Modelos de negocios para Pueblos Mágicos.",
  ]
}

export function CapacitacionSection() {
  const [activeMainTab, setActiveMainTab] = useState<MainTabKey>("operativo")
  const [activeGerentesTab, setActiveGerentesTab] = useState<GerentesTabKey>("productos")

  // Listen for tab change events from navbar submenu
  React.useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      
      // Check if it's a gerentes subtab
      if (detail && typeof detail === 'string') {
        const gerentesTabKeys = gerentesTabs.map(t => t.key)
        if (gerentesTabKeys.includes(detail as GerentesTabKey)) {
          setActiveMainTab("gerentes")
          setActiveGerentesTab(detail as GerentesTabKey)
        }
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

  const renderContent = () => {
    if (activeMainTab === "operativo") {
      return (
        <div className="space-y-6">
          <p className="text-[var(--text-light)] text-base leading-relaxed">{operativoContent.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {operativoContent.courses.map((course, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeMainTab === "gerentes") {
      const content = gerentesContent[activeGerentesTab]
      return (
        <div className="space-y-6">
          {/* Secondary tabs for Gerentes */}
          <div className="flex flex-wrap gap-2 bg-gray-50 p-3 rounded-xl">
            {gerentesTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveGerentesTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeGerentesTab === tab.key
                    ? "bg-[var(--red)] text-white shadow-md"
                    : "text-[var(--text-light)] hover:text-[var(--navy)] hover:bg-white"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-[var(--text-light)] text-base leading-relaxed">{content.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.courses.map((course, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeMainTab === "funcionarios") {
      return (
        <div className="space-y-6">
          <p className="text-[var(--text-light)] text-base leading-relaxed">{funcionariosContent.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funcionariosContent.courses.map((course, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeMainTab === "talleres") {
      return (
        <div className="space-y-6">
          <p className="text-[var(--text-light)] text-base leading-relaxed">{talleresContent.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {talleresContent.courses.map((course, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <section id="capacitacion" className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--red)] font-bold uppercase tracking-widest text-sm block mb-2">
            Soluciones Formativas
          </span>
          <h2 className="font-serif text-4xl text-[var(--navy)] mb-4 text-balance">
            Capacitación
          </h2>
          <p className="text-[var(--text-light)]">
            Explora nuestras áreas de especialidad. Cada categoría incluye programas diseñados para fortalecer competencias clave en el sector turístico.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl">
          {/* Main Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 bg-muted p-2.5 rounded-full">
            {mainTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveMainTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-extrabold transition-all whitespace-nowrap ${
                  activeMainTab === tab.key
                    ? "bg-[var(--navy)] text-white shadow-lg shadow-blue-900/30"
                    : "text-[var(--text-light)] hover:text-[var(--navy)] hover:bg-[var(--navy)]/5"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mb-8">
            {renderContent()}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                scrollToContact(
                  `Solicito información sobre Capacitación: ${mainTabs.find((t) => t.key === activeMainTab)?.label}.`
                )
              }
              className="inline-flex items-center justify-center rounded-full bg-[var(--red)] text-white px-8 py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-1 transition-all"
            >
              Solicitar Información
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
