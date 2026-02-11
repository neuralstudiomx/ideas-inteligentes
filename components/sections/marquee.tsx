import {
  Building2,
  MapPin,
  Waves,
  Mountain,
  Building,
  Landmark,
  GraduationCap,
  BookOpen,
} from "lucide-react"

const logos = [
  { icon: Building2, label: "SECTUR FEDERAL" },
  { icon: MapPin, label: "SECTUR TLAXCALA" },
  { icon: Waves, label: "SECTUR VERACRUZ" },
  { icon: Mountain, label: "SECTUR COLIMA" },
  { icon: Building, label: "SECTUR SAN LUIS POTOSI" },
  { icon: Landmark, label: "SECTUR GUANAJUATO" },
  { icon: Landmark, label: "SECTUR ZACATECAS" },
  { icon: GraduationCap, label: "UNIVERSIDAD DE COLIMA" },
  { icon: BookOpen, label: "COLEGIO DE TLAXCALA" },
]

export function MarqueeSection() {
  return (
    <div className="bg-white py-10 overflow-hidden border-t border-b border-border">
      <p className="text-center text-[var(--text-light)] text-xs tracking-[2px] uppercase mb-5">
        Confianza Institucional
      </p>
      <div className="flex gap-20 animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2.5 text-gray-300 font-extrabold text-lg hover:text-[var(--navy)] transition-colors shrink-0"
          >
            <item.icon className="h-7 w-7" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
