import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Search, Users } from "lucide-react"

export default function CalendarPage() {
  const barbers = [
    { name: "Luigi", role: "Master Barber", img: "https://i.pravatar.cc/150?u=luigi" },
    { name: "Marco", role: "Senior Stylist", img: "https://i.pravatar.cc/150?u=marco" },
    { name: "Giuseppe", role: "Barber", img: "https://i.pravatar.cc/150?u=giuseppe" },
    { name: "Andrea", role: "Colorist", img: "https://i.pravatar.cc/150?u=andrea" }
  ]
  const hours = Array.from({ length: 11 }, (_, i) => i + 9) // 09:00 to 19:00

  // Mock appointments per la giornata odierna (sovrapposizioni incluse)
  const appointments = [
    { barber: 0, startHour: 9, startMin: 0, duration: 60, customer: "A. Rossi", service: "Taglio + Barba", type: "gold" },
    { barber: 0, startHour: 10, startMin: 30, duration: 45, customer: "M. Bianchi", service: "Taglio Classico", type: "default" },
    { barber: 1, startHour: 9, startMin: 30, duration: 60, customer: "G. Neri", service: "Colore", type: "default" },
    { barber: 1, startHour: 10, startMin: 0, duration: 45, customer: "F. Neri", service: "Taglio Classico", type: "default", isOverlapping: true }, // Esempio di overbooking controllato
    { barber: 2, startHour: 11, startMin: 0, duration: 30, customer: "L. Verdi", service: "Barba", type: "default" },
    { barber: 3, startHour: 14, startMin: 0, duration: 90, customer: "C. Gialli", service: "Decolorazione", type: "gold" },
  ]

  return (
    <div className="space-y-6 h-[calc(100vh-6rem)] flex flex-col relative px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center shrink-0 pt-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Planning Giornaliero Staff
          </h1>
          <p className="text-primary/80 font-medium">Gestione appuntamenti in parallelo</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center glass rounded-xl p-1 border border-white/10">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:text-white rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="px-6 font-bold text-sm text-white">Oggi, 15 Ottobre 2026</div>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:text-white rounded-lg">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <Button variant="outline" className="glass border-white/10 text-white hover:bg-white/5">Vai a Data</Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] px-6">
            <Plus className="w-5 h-5 mr-2" /> Nuovo Incasso
          </Button>
        </div>
      </div>

      <div className="flex-1 glass-panel rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl relative z-10">
        {/* Header - Barbers (Columns) */}
        <div className="flex border-b border-white/10 bg-black/60 shrink-0 backdrop-blur-xl z-20 sticky top-0">
          <div className="w-24 shrink-0 border-r border-white/5 flex items-center justify-center text-xs font-medium text-white/30 uppercase tracking-widest">Orario</div>
          {barbers.map((barber, i) => (
            <div key={i} className="flex-1 text-center py-4 border-r border-white/5 last:border-0 flex flex-col items-center justify-center gap-1">
              <img src={barber.img} className="w-12 h-12 rounded-full border-2 border-primary/50 mb-1 shadow-[0_0_10px_rgba(212,175,55,0.2)]" alt={barber.name} />
              <div className="font-bold text-white text-lg">{barber.name}</div>
              <div className="text-xs text-primary font-medium tracking-wide uppercase">{barber.role}</div>
            </div>
          ))}
        </div>

        {/* Grid Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-black/40">
          <div className="flex relative" style={{ height: `${hours.length * 120}px` }}>
            
            {/* Time Column */}
            <div className="w-24 shrink-0 border-r border-white/5 bg-black/40 backdrop-blur-md z-10">
              {hours.map(hour => (
                <div key={hour} className="h-[120px] border-b border-white/5 text-sm text-center pt-2 font-mono text-white/60 font-medium">
                  {hour.toString().padStart(2, '0')}:00
                </div>
              ))}
            </div>

            {/* Barber Columns */}
            {barbers.map((_, barberIdx) => (
              <div key={barberIdx} className="flex-1 border-r border-white/5 last:border-0 relative">
                {/* Horizontal lines */}
                {hours.map(hour => (
                  <div key={hour} className="h-[120px] border-b border-white/5" />
                ))}
                
                {/* 15-min lines (subtle dashed) */}
                {hours.map(hour => (
                  <div key={`quarters-${hour}`} className="absolute w-full h-[120px] pointer-events-none flex flex-col justify-between" style={{ top: `${(hour - hours[0]) * 120}px` }}>
                     <div className="h-1/4 border-b border-white/5 border-dashed opacity-50" />
                     <div className="h-1/4 border-b border-white/10 border-solid opacity-80" /> {/* Half hour mark */}
                     <div className="h-1/4 border-b border-white/5 border-dashed opacity-50" />
                  </div>
                ))}

                {/* Appointments for this barber */}
                {appointments.filter(a => a.barber === barberIdx).map((apt, i) => {
                  const top = ((apt.startHour - hours[0]) * 120) + ((apt.startMin / 60) * 120)
                  const height = (apt.duration / 60) * 120
                  const isGold = apt.type === 'gold'
                  
                  return (
                    <div 
                      key={i}
                      className={`absolute rounded-xl p-3 text-sm transition-all overflow-hidden cursor-pointer group shadow-lg
                        ${apt.isOverlapping ? 'left-6 right-1 z-10 border-l-4 border-l-red-500' : 'left-2 right-2'}
                        ${isGold 
                          ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#F59E0B]/10 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                          : 'glass border-white/10 hover:border-primary/50 hover:bg-white/10'
                        }`}
                      style={{ top: `${top + 1}px`, height: `${height - 2}px` }}
                    >
                      <div className="flex justify-between items-start">
                        <div className={`font-bold truncate text-base ${isGold ? 'text-[#D4AF37]' : 'text-white'}`}>{apt.customer}</div>
                        {apt.isOverlapping && <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" title="Sovrapposizione"></div>}
                      </div>
                      <div className={`text-sm truncate mt-0.5 font-medium ${isGold ? 'text-white/90' : 'text-white/70'}`}>{apt.service}</div>
                      
                      <div className="absolute bottom-2 left-3 text-xs font-mono text-white/50">
                        {apt.startHour.toString().padStart(2, '0')}:{apt.startMin.toString().padStart(2, '0')} 
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary">({apt.duration} min)</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
            
          </div>
        </div>
      </div>
      
      {/* Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.2); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(212,175,55,0.4); }
      `}} />
    </div>
  )
}
