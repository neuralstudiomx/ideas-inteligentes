const stats = [
  { value: "+32", label: "Cadenas Productivas" },
  { value: "+1000", label: "Empresas Atendidas" },
  { value: "+4000", label: "Personas Capacitadas" },
  { value: "250+", label: "Distintivos Entregados" },
]

export function StatsSection() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 -mt-20 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div 
            key={stat.label} 
            className="animate-stats-up opacity-0"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <h3 className="text-5xl font-extrabold text-[var(--red)] mb-2">{stat.value}</h3>
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-light)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
