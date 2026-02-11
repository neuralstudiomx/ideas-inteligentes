import type { Metadata } from "next"
import { Topbar } from "@/components/topbar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Scale, CircleCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Ideas Inteligentes",
  description:
    "Aviso de privacidad y terminos y condiciones de Ideas Inteligentes Competitividad Innovacion y Formacion Turistica S.A. de C.V.",
}

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border">
            <h1 className="font-serif text-3xl md:text-4xl text-[var(--navy)] mb-3 text-balance">
              Aviso de Privacidad
            </h1>
            <p className="text-[var(--text-light)] mb-6">
              Ideas Inteligentes Competitividad Innovacion y Formacion Turistica S.A. de C.V.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-2 border border-border bg-muted text-[var(--navy)] font-extrabold rounded-full px-4 py-2.5 text-sm">
                <Shield className="h-4 w-4" />
                Proteccion de datos
              </span>
              <span className="inline-flex items-center gap-2 border border-border bg-muted text-[var(--navy)] font-extrabold rounded-full px-4 py-2.5 text-sm">
                <Scale className="h-4 w-4" />
                Transparencia
              </span>
              <span className="inline-flex items-center gap-2 border border-border bg-muted text-[var(--navy)] font-extrabold rounded-full px-4 py-2.5 text-sm">
                <CircleCheck className="h-4 w-4" />
                Consentimiento
              </span>
            </div>

            {/* Content */}
            <div className="prose-custom flex flex-col gap-6">
              <p className="text-foreground leading-relaxed">
                En cumplimiento con la Ley Federal de Proteccion de Datos Personales en Posesion de
                los Particulares, Ideas Inteligentes Competitividad Innovacion y Formacion Turistica
                S.A. de C.V., con domicilio en Guillermo Massieu Helguera 177 Edificio 7-43, La
                Escalera, GAM 07320 CDMX, hace de su conocimiento que los datos personales que
                recabamos seran tratados de manera licita, controlada e informada, con el fin de
                garantizar la privacidad de los mismos.
              </p>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  1. Datos personales que recabamos
                </h2>
                <p className="text-foreground mb-3">Podemos solicitar informacion como:</p>
                <ul className="flex flex-col gap-2 ml-5">
                  <li className="text-foreground list-disc">Nombre completo</li>
                  <li className="text-foreground list-disc">Telefono y correo electronico</li>
                  <li className="text-foreground list-disc">
                    Empresa u organizacion a la que pertenece
                  </li>
                  <li className="text-foreground list-disc">
                    Informacion relacionada con servicios de consultoria, capacitacion y turismo
                  </li>
                  <li className="text-foreground list-disc">Datos de facturacion</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  2. Finalidades del tratamiento
                </h2>
                <p className="text-foreground mb-3">
                  Los datos personales seran utilizados para:
                </p>
                <ul className="flex flex-col gap-2 ml-5">
                  <li className="text-foreground list-disc">
                    Proveer servicios de consultoria y capacitacion en turismo
                  </li>
                  <li className="text-foreground list-disc">
                    Elaborar materiales didacticos y experiencias formativas
                  </li>
                  <li className="text-foreground list-disc">
                    Emitir cotizaciones, facturas y comprobantes fiscales
                  </li>
                  <li className="text-foreground list-disc">
                    Informar sobre nuevos cursos, talleres y servicios
                  </li>
                  <li className="text-foreground list-disc">
                    Dar seguimiento a la relacion contractual y de servicio
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  3. Transferencia de datos
                </h2>
                <p className="text-foreground leading-relaxed">
                  Sus datos personales no seran compartidos con terceros, salvo en los casos
                  legalmente previstos o cuando sea necesario para cumplir obligaciones fiscales y
                  administrativas.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">4. Derechos ARCO</h2>
                <p className="text-foreground leading-relaxed">
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de
                  sus datos personales. Para ejercer estos derechos, puede enviar una solicitud al
                  correo:{" "}
                  <strong>contacto@ideasinteligentesturismo.com.mx</strong> o al domicilio
                  senalado.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  5. Revocacion del consentimiento
                </h2>
                <p className="text-foreground leading-relaxed">
                  En cualquier momento podra revocar el consentimiento otorgado para el tratamiento
                  de sus datos personales, enviando una solicitud a traves de los medios de contacto
                  mencionados.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  6. Cambios al aviso de privacidad
                </h2>
                <p className="text-foreground leading-relaxed">
                  Este aviso podra ser modificado en cualquier momento para cumplir con
                  actualizaciones legales o internas. Las modificaciones estaran disponibles en
                  nuestra pagina web:{" "}
                  <strong>ideasinteligentesturismo.com.mx</strong>
                </p>
              </div>

              {/* Separator */}
              <hr className="border-border my-4" />

              {/* Terminos y Condiciones */}
              <h1 className="font-serif text-3xl text-[var(--navy)] mt-2">
                Terminos y Condiciones
              </h1>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  1. Aceptacion de los terminos
                </h2>
                <p className="text-foreground leading-relaxed">
                  Al contratar nuestros servicios o participar en nuestras capacitaciones y diversos
                  tipos de asistencia tecnica, el usuario acepta los presentes terminos y
                  condiciones, asi como el aviso de privacidad correspondiente.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  2. Servicios ofrecidos
                </h2>
                <p className="text-foreground leading-relaxed">
                  La empresa brinda servicios de consultoria, capacitacion, diseno de experiencias
                  turisticas, elaboracion de materiales didacticos y asesoria especializada en
                  turismo cultural, vivencial y comunitario.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  3. Uso de contenidos
                </h2>
                <p className="text-foreground leading-relaxed">
                  Todos los materiales, guias, presentaciones y recursos entregados estan protegidos
                  por derechos de autor. Queda prohibida su reproduccion, distribucion o
                  modificacion sin autorizacion expresa por escrito.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  4. Responsabilidad
                </h2>
                <p className="text-foreground leading-relaxed">
                  La empresa se compromete a brindar servicios con profesionalismo y calidad. No se
                  hace responsable por decisiones tomadas por el usuario con base en los contenidos
                  o asesorias recibidas.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  5. Pagos y facturacion
                </h2>
                <p className="text-foreground leading-relaxed">
                  Los pagos deben realizarse en los plazos acordados. En caso de requerir factura,
                  el usuario debera proporcionar sus datos fiscales completos. Los precios estan
                  sujetos a cambios sin previo aviso.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  6. Cancelaciones y reembolsos
                </h2>
                <p className="text-foreground leading-relaxed">
                  Las cancelaciones deben notificarse con al menos 48 horas de anticipacion. Los
                  reembolsos se aplicaran segun las politicas especificas de cada servicio o evento.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">
                  7. Modificaciones
                </h2>
                <p className="text-foreground leading-relaxed">
                  La empresa se reserva el derecho de modificar estos terminos y condiciones en
                  cualquier momento. Las actualizaciones estaran disponibles en nuestra pagina web:{" "}
                  <strong>ideasinteligentesturismo.com.mx</strong>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-[var(--navy)] mb-3">8. Jurisdiccion</h2>
                <p className="text-foreground leading-relaxed">
                  Para la interpretacion y cumplimiento de estos terminos, las partes se someten a
                  las leyes y tribunales de la Ciudad de Mexico, renunciando a cualquier otro fuero
                  que pudiera corresponderles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
