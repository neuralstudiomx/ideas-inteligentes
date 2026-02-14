"use client"

import { useState, useRef } from "react"
import { MapPin, Mail, Loader2, CheckCircle, XCircle } from "lucide-react"

export function ContactoSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      asunto: formData.get('asunto'),
      mensaje: formData.get('mensaje'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        formRef.current?.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const result = await response.json()
        setStatus('error')
        setErrorMessage(result.details || result.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Verifica tu internet e intenta de nuevo.')
      console.error('Error en el formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="bg-[var(--navy)] py-24 text-white">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <span className="text-[var(--red)] font-extrabold uppercase text-sm tracking-widest block mb-3">
              Contacto
            </span>
            <h2 className="font-serif text-4xl text-white mb-5">Iniciemos la Conversación</h2>
            <p className="text-white/85 text-lg mb-10">
              Ya sea para capacitar a tu personal o desarrollar un plan maestro, estamos listos.
            </p>

            <div className="flex flex-col gap-7">
              <div className="flex gap-5">
                <MapPin className="h-6 w-6 text-[var(--red)] shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-extrabold mb-1">Oficina Central</h4>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Guillermo Massieu H. 177 7-43
                    <br />
                    La Escalera, Gustavo A. Madero
                    <br />
                    CDMX, 07320
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="h-6 w-6 text-[var(--red)] shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-extrabold mb-1">Correo Electrónico</h4>
                  <p className="text-white/85 text-sm">contacto@ideasinteligentesturismo.com.mx</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-10">
            <h3 className="text-[var(--navy)] text-xl font-extrabold mb-6">
              Envianos un mensaje
            </h3>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                <p className="text-green-800 text-sm font-medium">
                  ¡Mensaje enviado! Te contactaremos pronto.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-[var(--navy)] font-extrabold text-sm mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Nombre Completo / Nombre de la Empresa"
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/20"
                />
              </div>

              <div>
                <label className="block text-[var(--navy)] font-extrabold text-sm mb-2">
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="nombre@empresa.com"
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/20"
                />
              </div>

              <div>
                <label className="block text-[var(--navy)] font-extrabold text-sm mb-2">
                  Asunto
                </label>
                <select
                  name="asunto"
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/20"
                >
                  <option>Solicitar Información</option>
                  <option>Capacitación</option>
                  <option>Certificación</option>
                  <option>Programa Sectorial 2025-30</option>
                  <option>Marketing Digital y Editorial</option>
                  <option>Casos de Éxito</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--navy)] font-extrabold text-sm mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  placeholder="¿Cómo podemos ayudarte?"
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/20 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[var(--red)] text-white py-3.5 text-sm font-extrabold uppercase shadow-lg shadow-red-600/30 hover:bg-[var(--red-dark)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar solicitud'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
