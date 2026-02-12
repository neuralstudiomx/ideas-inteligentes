"use client"

import React from "react"
import { useState, useEffect } from "react"
import {
  MapPin,
  Users,
  Network,
  Package,
  Rocket,
  Share2,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react"

type MainTabKey = "pueblos" | "comunitario" | "implementacion"
type ImplementacionTabKey = "cadenas" | "productos" | "paquetizacion" | "comercializacion"

const mainTabs: { key: MainTabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "pueblos", label: "Pueblos Mágicos", icon: MapPin },
  { key: "comunitario", label: "Turismo Comunitario", icon: Users },
  { key: "implementacion", label: "Implementación Integral", icon: Network },
]

const implementacionTabs: { key: ImplementacionTabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "cadenas", label: "Cadenas Productivas", icon: Network },
  { key: "productos", label: "Productos Experienciales", icon: Package },
  { key: "paquetizacion", label: "Paquetización y RRSS", icon: Share2 },
  { key: "comercializacion", label: "Comercialización", icon: ShoppingCart },
]

const pueblosContent = {
  intro: "Servicios especializados para el fortalecimiento de Pueblos Mágicos y destinos similares.",
  items: [
    "Desarrollo de productos turísticos en pueblos mágicos y similares.",
    "Integración de cadenas de valor en pueblos mágicos.",
    "Formación de clubes de producto en pueblos mágicos.",
    "Promoción digital de productos turísticos en pueblos mágicos.",
    "Comercialización digital y workshop de turismo.",
    "Solución de brechas de expediente.",
  ]
}

const comunitarioContent = {
  intro: "Soluciones integrales para el desarrollo del turismo comunitario sostenible.",
  items: [
    "Desarrollo de productos turísticos comunitarios.",
    "Integración de cadenas de valor con enfoque comunitario.",
    "Formación de clubes de producto con enfoque comunitario.",
    "Promoción digital de productos turísticos comunitarios.",
    "Comercialización digital y workshop de turismo comunitario.",
  ]
}

const implementacionContent = {
  intro: "Capacitamos, damos asistencia técnica y acompañamiento a gobiernos y empresarios turísticos para articular su cadena de valor, campo en el que tenemos vasta experiencia, con más de 30 cadenas, a efecto de desarrollar productos turísticos experienciales, promoverlos y comercializarlos en e-commerce.",
  subtabs: {
    cadenas: {
      intro: "Articulación y fortalecimiento de cadenas de valor turísticas.",
      items: [
        "Capacitación, asistencia técnica y acompañamiento.",
        "Proyectos llave en mano para gobiernos estatales y municipales.",
        "Entrenamiento.",
        "Instalación.",
        "Programa de trabajo.",
        "Reglamento.",
      ]
    },
    productos: {
      intro: "Diseño y desarrollo de experiencias turísticas memorables.",
      items: [
        "Identificación de portafolio.",
        "Desarrollo de productos.",
        "Experiencias generales.",
        "Turismo comunitario.",
      ]
    },
    paquetizacion: {
      intro: "Estrategias de empaquetamiento y promoción en redes sociales.",
      items: [
        "Tarifación.",
        "Recorridos y tours.",
        "Paquetes.",
        "Trade shows.",
        "Inbound en RRSS.",
      ]
    },
    comercializacion: {
      intro: "Venta digital y estrategias de conversión para productos turísticos.",
      items: [
        "Desarrollo de web e-commerce.",
        "Embudos de venta.",
        "Estrategias de pautación.",
        "Métricas de venta y otras métricas.",
      ]
    }
  }
}

export function ProgramaSectorialSection() {
  const [activeMainTab, setActiveMainTab] = useState<MainTabKey>("pueblos")
  const [activeImplementacionTab, setActiveImplementacionTab] = useState<ImplementacionTabKey>("cadenas")

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      const tabKey = customEvent.detail
      
      // Check if it's a main tab
      if (tabKey === "pueblos" || tabKey === "comunitario" || tabKey === "implementacion") {
        setActiveMainTab(tabKey as MainTabKey)
      }
      // Check if it's an implementacion sub-tab
      else if (tabKey === "cadenas" || tabKey === "productos" || tabKey === "paquetizacion" || tabKey === "comercializacion") {
        setActiveMainTab("implementacion")
        setActiveImplementacionTab(tabKey as ImplementacionTabKey)
      }
    }

    window.addEventListener('changePSTTab', handleTabChange)
    return () => window.removeEventListener('changePSTTab', handleTabChange)
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
    if (activeMainTab === "pueblos") {
      return (
        <div className="space-y-6">
          <p className="text-[var(--text-light)] text-base leading-relaxed">{pueblosContent.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pueblosContent.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeMainTab === "comunitario") {
      return (
        <div className="space-y-6">
          <p className="text-[var(--text-light)] text-base leading-relaxed">{comunitarioContent.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comunitarioContent.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeMainTab === "implementacion") {
      const content = implementacionContent.subtabs[activeImplementacionTab]
      return (
        <div className="space-y-6">
          {/* Intro general de Implementación Integral */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 mb-6">
            <p className="text-[var(--navy)] text-base leading-relaxed font-medium">
              {implementacionContent.intro}
            </p>
          </div>

          {/* Secondary tabs for Implementación */}
          <div className="flex flex-wrap gap-2 bg-gray-50 p-3 rounded-xl">
            {implementacionTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveImplementacionTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeImplementacionTab === tab.key
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
            {content.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:border-[var(--blue-light)] hover:shadow-lg transition-all">
                <CheckCircle2 className="h-5 w-5 text-[var(--red)] shrink-0 mt-0.5" />
                <p className="text-[var(--navy)] font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
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
            Intervenciones orientadas a impulsar competitividad, productividad y comercialización en destinos y empresas.
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
                  `Solicito información sobre Servicios al Programa Sectorial: ${mainTabs.find((t) => t.key === activeMainTab)?.label}.`
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
