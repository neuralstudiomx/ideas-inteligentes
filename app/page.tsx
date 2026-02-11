import { Topbar } from "@/components/topbar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { AboutSection } from "@/components/sections/about"
import { MarqueeSection } from "@/components/sections/marquee"
import { MethodologySection } from "@/components/sections/methodology"
import { CapacitacionSection } from "@/components/sections/capacitacion"
import { CertificacionSection } from "@/components/sections/certificacion"
import { ProgramaSectorialSection } from "@/components/sections/programa-sectorial"
import { MarketingEditorialSection } from "@/components/sections/marketing-digital"
import { CasosSection } from "@/components/sections/casos"
import { FaqSection } from "@/components/sections/faq"
import { ContactoSection } from "@/components/sections/contacto"

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <MarqueeSection />
        <MethodologySection />
        <CapacitacionSection />
        <CertificacionSection />
        <ProgramaSectorialSection />
        <MarketingEditorialSection />
        <CasosSection />
        <FaqSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
