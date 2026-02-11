"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Lightbulb,
  ChevronDown,
  Menu,
  X,
  Utensils,
  BarChart3,
  Calculator,
  Users,
  Briefcase,
  Rocket,
  MessageCircle,
} from "lucide-react"

const capacitacionSubItems = [
  { label: "Cursos para personal operativo", icon: Utensils, tabKey: "operativo" },
  { label: "Cursos para gerentes", icon: Briefcase, tabKey: "gerentes", hasChildren: true },
  { label: "Cursos para funcionarios publicos", icon: Users, tabKey: "funcionarios" },
  { label: "Cursos para talleres", icon: Rocket, tabKey: "talleres" },
]

const gerentesSubItems = [
  { label: "Productos y Servicios Turisticos", icon: Utensils, tabKey: "operacion" },
  { label: "Marketing", icon: BarChart3, tabKey: "marketing" },
  { label: "Administracion de las Finanzas", icon: Calculator, tabKey: "finanzas" },
  { label: "Capital Humano", icon: Users, tabKey: "humano" },
  { label: "Management", icon: Briefcase, tabKey: "management" },
  { label: "Desarrollo Emprendedor", icon: Rocket, tabKey: "emprendedor" },
]

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Capacitacion", href: "/#capacitacion", hasSubmenu: true },
  { label: "Certificacion", href: "/#certificacion" },
  { label: "Programa Sectorial", href: "/#pst" },
  { label: "Marketing y Editorial", href: "/#marketing-editorial" },
  { label: "Casos de Exito", href: "/#casos" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [gerentesOpen, setGerentesOpen] = useState(false)
  const submenuRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setSubmenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleNavClick = () => {
    setMobileOpen(false)
    setSubmenuOpen(false)
    setGerentesOpen(false)
  }

  return (
    <nav
      className="fixed top-[44px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/5"
      aria-label="Navegacion principal"
    >
      <div className="mx-auto max-w-[1440px] px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image
            src="/LogoIdeasInteligentres.png"
            alt="Ideas Inteligentes"
            width={220}
            height={55}
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-1 flex-nowrap">
          {navLinks.map((link) =>
            link.hasSubmenu ? (
              <li key={link.label} className="relative" ref={submenuRef}>
                <button
                  type="button"
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-base font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors rounded-lg whitespace-nowrap"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${submenuOpen ? "rotate-180" : ""}`} />
                </button>
                {submenuOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                    {capacitacionSubItems.map((sub) => (
                      sub.hasChildren ? (
                        <div key={sub.tabKey} className="relative">
                          <button
                            type="button"
                            onClick={() => setGerentesOpen(!gerentesOpen)}
                            className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-[var(--navy)] hover:bg-muted hover:text-[var(--red)] transition-colors w-full text-left"
                          >
                            <div className="flex items-center gap-3">
                              <sub.icon className="h-4 w-4 text-[var(--blue-light)]" />
                              {sub.label}
                            </div>
                            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${gerentesOpen ? "rotate-180" : ""}`} />
                          </button>
                          {gerentesOpen && (
                            <div className="bg-muted/50 py-1">
                              {gerentesSubItems.map((gerSub) => (
                                <button
                                  key={gerSub.tabKey}
                                  type="button"
                                  onClick={() => {
                                    handleNavClick()
                                    window.dispatchEvent(new CustomEvent('changeCapTab', { detail: gerSub.tabKey }))
                                    document.getElementById('capacitacion')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                  }}
                                  className="flex items-center gap-3 px-6 py-2.5 text-sm font-medium text-[var(--navy)] hover:bg-muted hover:text-[var(--red)] transition-colors w-full text-left"
                                >
                                  <gerSub.icon className="h-4 w-4 text-[var(--blue-light)]" />
                                  {gerSub.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          key={sub.tabKey}
                          type="button"
                          onClick={() => {
                            handleNavClick()
                            window.dispatchEvent(new CustomEvent('changeCapTab', { detail: sub.tabKey }))
                            document.getElementById('capacitacion')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-[var(--navy)] hover:bg-muted hover:text-[var(--red)] transition-colors w-full text-left"
                        >
                          <sub.icon className="h-4 w-4 text-[var(--blue-light)]" />
                          {sub.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-2 text-base font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors rounded-lg whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5512400055?text=Hola%2C%20me%20gustaria%20recibir%20informacion%20sobre%20sus%20servicios."
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 justify-center rounded-full bg-[var(--red)] text-white px-5 py-2.5 text-xs font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] hover:-translate-y-0.5 transition-all"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contactar
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-[var(--navy)]"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-border shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors rounded-lg"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${submenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  {submenuOpen && (
                    <div className="pl-4 flex flex-col gap-0.5">
                      {capacitacionSubItems.map((sub) => (
                        sub.hasChildren ? (
                          <div key={sub.tabKey}>
                            <button
                              type="button"
                              onClick={() => setGerentesOpen(!gerentesOpen)}
                              className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-semibold text-[var(--text-light)] hover:text-[var(--red)] transition-colors rounded-lg w-full text-left"
                            >
                              <div className="flex items-center gap-3">
                                <sub.icon className="h-4 w-4 text-[var(--blue-light)]" />
                                {sub.label}
                              </div>
                              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${gerentesOpen ? "rotate-180" : ""}`} />
                            </button>
                            {gerentesOpen && (
                              <div className="pl-4 flex flex-col gap-0.5">
                                {gerentesSubItems.map((gerSub) => (
                                  <button
                                    key={gerSub.tabKey}
                                    type="button"
                                    onClick={() => {
                                      handleNavClick()
                                      window.dispatchEvent(new CustomEvent('changeCapTab', { detail: gerSub.tabKey }))
                                      document.getElementById('capacitacion')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }}
                                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[var(--text-light)] hover:text-[var(--red)] transition-colors rounded-lg w-full text-left"
                                  >
                                    <gerSub.icon className="h-4 w-4 text-[var(--blue-light)]" />
                                    {gerSub.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <button
                            key={sub.tabKey}
                            type="button"
                            onClick={() => {
                              handleNavClick()
                              window.dispatchEvent(new CustomEvent('changeCapTab', { detail: sub.tabKey }))
                              document.getElementById('capacitacion')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-[var(--text-light)] hover:text-[var(--red)] transition-colors rounded-lg w-full text-left"
                          >
                            <sub.icon className="h-4 w-4 text-[var(--blue-light)]" />
                            {sub.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-3 text-sm font-bold text-[var(--navy)] hover:text-[var(--red)] transition-colors rounded-lg"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/5512400055?text=Hola%2C%20me%20gustaria%20recibir%20informacion%20sobre%20sus%20servicios."
              target="_blank"
              rel="noreferrer"
              onClick={handleNavClick}
              className="mt-2 flex items-center gap-2 justify-center rounded-full bg-[var(--red)] text-white px-5 py-3 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 sm:hidden"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
