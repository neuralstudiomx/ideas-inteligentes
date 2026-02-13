import type { Metadata } from "next"
import { Topbar } from "@/components/topbar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Scale, CircleCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Ideas Inteligentes",
  description:
    "Aviso de privacidad y términos y condiciones de Ideas Inteligentes Competitividad Innovación y Formación Turística S.A. de C.V.",
}

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="bg-[#f8faff] min-h-screen">
        {/* Decorative Header */}
        <div className="bg-[var(--navy)] pt-60 pb-32 px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Aviso de Privacidad
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-20">
              Ideas Inteligentes Competitividad Innovación y Formación Turística S.A. de C.V.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1000px] px-6 -mt-32 pb-24">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-navy-900/10 p-10 md:p-16 lg:p-20 border border-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--red)]/5 rounded-full -mr-32 -mt-32" />

            {/* Pills / Conceptos */}
            <div className="flex flex-wrap gap-4 mb-16 relative">
              {[
                { icon: Shield, text: "Protección de Datos" },
                { icon: Scale, text: "Transparencia" },
                { icon: CircleCheck, text: "Consentimiento" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="inline-flex items-center gap-2.5 bg-[#f0f4ff] text-[var(--navy)] font-bold rounded-2xl px-6 py-3 text-sm border border-navy-100"
                >
                  <item.icon className="h-5 w-5 text-[var(--red)]" />
                  {item.text}
                </div>
              ))}
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-16 text-slate-700 leading-loose text-lg">
              <p>
                En cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión de
                los Particulares</strong>, Ideas Inteligentes Competitividad Innovación y Formación Turística
                S.A. de C.V., con domicilio en Guillermo Massieu Helguera 177 Edificio 7-43, La
                Escalera, GAM 07320 CDMX, hace de su conocimiento que los datos personales que
                recabamos serán tratados de manera lícita, controlada e informada, con el fin de
                garantizar la privacidad de los mismos.
              </p>

              <div className="space-y-12">
                <section>
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                    <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                    1. Datos Personales que Recabamos
                  </h3>
                  <p className="mb-4 text-base">Podemos solicitar información como:</p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Nombre completo",
                      "Teléfono y correo electrónico",
                      "Empresa u organización a la que pertenece",
                      "Información relacionada con servicios de consultoría, capacitación y turismo",
                      "Datos de facturación"
                    ].map((li) => (
                      <li key={li} className="flex items-start gap-3 text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)] mt-2.5 shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                    <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                    2. Finalidades del Tratamiento
                  </h3>
                  <p className="mb-4 text-base">Los datos personales serán utilizados para:</p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Proveer servicios de consultoría y capacitación en turismo",
                      "Elaborar materiales didácticos y experiencias formativas",
                      "Emitir cotizaciones, facturas y comprobantes fiscales",
                      "Informar sobre nuevos cursos, talleres y servicios",
                      "Dar seguimiento a la relación contractual y de servicio"
                    ].map((li) => (
                      <li key={li} className="flex items-start gap-3 text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)] mt-2.5 shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                    <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                    3. Transferencia de Datos
                  </h3>
                  <p className="text-base">
                    Sus datos personales no serán compartidos con terceros, salvo en los casos
                    legalmente previstos o cuando sea necesario para cumplir obligaciones fiscales y
                    administrativas.
                  </p>
                </section>

                <section>
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                    <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                    4. Derechos ARCO
                  </h3>
                  <p className="text-base font-medium">
                    Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de
                    sus datos personales. Para ejercer estos derechos, puede enviar una solicitud al
                    correo:{" "}
                    <a href="mailto:contacto@ideasinteligentesturismo.com.mx" className="text-[var(--red)] font-bold decoration-[var(--red)] underline underline-offset-4 hover:text-[var(--red-dark)]">
                      contacto@ideasinteligentesturismo.com.mx
                    </a> o al domicilio señalado.
                  </p>
                </section>

                <section>
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                    <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                    5. Revocación del consentimiento
                  </h3>
                  <p className="text-base">
                    En cualquier momento podrá revocar el consentimiento otorgado para el tratamiento de sus datos personales, enviando una solicitud a través de los medios de contacto mencionados.
                  </p>
                </section>

                <section>
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                    <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                    6. Cambios al aviso de privacidad
                  </h3>
                  <p className="text-base">
                    Este aviso podrá ser modificado en cualquier momento para cumplir con actualizaciones legales o internas. Las modificaciones estarán disponibles en nuestra página web: <strong>ideasinteligentesturismo.com.mx</strong>
                  </p>
                </section>
              </div>

              {/* Términos y Condiciones */}
              <div className="mt-8">
                <span className="text-[var(--red)] font-extrabold uppercase tracking-[0.2em] text-xs block mb-4">
                  Condiciones de Uso
                </span>
                <h2 className="font-serif text-4xl text-[var(--navy)] mb-12">Términos y Condiciones</h2>
                
                <div className="space-y-12">
                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      1. Aceptación de los términos
                    </h3>
                    <p className="text-base">Al contratar nuestros servicios o participar en nuestras capacitaciones y diversos tipos de asistencia técnica, el usuario acepta los presentes términos y condiciones, así como el aviso de privacidad correspondiente.</p>
                  </section>
                  
                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      2. Servicios ofrecidos
                    </h3>
                    <p className="text-base">La empresa brinda servicios de consultoría, capacitación, diseño de experiencias turísticas, elaboración de materiales didácticos y asesoría especializada en turismo cultural, vivencial y comunitario.</p>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      3. Uso de contenidos
                    </h3>
                    <p className="text-base">Todos los materiales, guías, presentaciones y recursos entregados están protegidos por derechos de autor. Queda prohibida su reproducción, distribución o modificación sin autorización expresa por escrito.</p>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      4. Responsabilidad
                    </h3>
                    <p className="text-base">La empresa se compromete a brindar servicios con profesionalismo y calidad. No se hace responsable por decisiones tomadas por el usuario con base en los contenidos o asesorías recibidas.</p>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      5. Pagos y facturación
                    </h3>
                    <p className="text-base">Los pagos deben realizarse en los plazos acordados. En caso de requerir factura, el usuario deberá proporcionar sus datos fiscales completos. Los precios están sujetos a cambios sin previo aviso.</p>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      6. Cancelaciones y reembolsos
                    </h3>
                    <p className="text-base">Las cancelaciones deben notificarse con al menos 48 horas de anticipación. Los reembolsos se aplicarán según las políticas específicas de cada servicio o evento.</p>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      7. Modificaciones
                    </h3>
                    <p className="text-base">La empresa se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las actualizaciones estarán disponibles en nuestra página web: <strong>ideasinteligentesturismo.com.mx</strong></p>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl text-[var(--navy)] mb-4 font-bold flex items-center gap-3">
                      <div className="w-2 h-8 bg-[var(--red)] rounded-full" />
                      8. Jurisdicción
                    </h3>
                    <p className="text-base">Para la interpretación y cumplimiento de estos términos, las partes se someten a las leyes y tribunales de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
                  </section>

                  <section className="bg-slate-50 p-8 rounded-3xl text-sm italic text-slate-500 border border-slate-100">
                    <p>Estos términos fueron actualizados por última vez el 12 de febrero de 2026. Para cualquier duda relacionada con nuestra política de privacidad o términos de servicio, contáctenos vía correo electrónico.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
