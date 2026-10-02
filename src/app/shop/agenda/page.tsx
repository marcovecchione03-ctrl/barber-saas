import { Button } from "@/components/ui/button"
import { Plus, Bell, MoreVertical, Phone, CreditCard } from "lucide-react"

export default function DailyAgendaPage() {
  const appointments = [
    { time: "09:00", customer: "Andrea Rossi", service: "Executive: Taglio + Barba", duration: 60, status: "completed", price: "€ 40" },
    { time: "10:30", customer: "Marco Bianchi", service: "Taglio Classico", duration: 30, status: "completed", price: "€ 25" },
    { time: "11:30", customer: "Giovanni Neri", service: "Modellatura Barba", duration: 30, status: "no-show", price: "€ 18" },
    { time: "15:00", customer: "Luca Verdi", service: "Taglio Classico", duration: 30, status: "confirmed", price: "€ 25" },
    { time: "16:00", customer: "Paolo Gialli", service: "Executive: Taglio + Barba", duration: 60, status: "confirmed", price: "€ 40" },
  ]

  const hours = Array.from({ length: 11 }, (_, i) => i + 9) // 09:00 to 19:00

  return (
    <div className="min-h-screen pb-20 md:pb-0 relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 rounded-b-[100%] blur-3xl -z-10 opacity-30" />
      
      <div className="max-w-lg mx-auto">
        {/* Header Glass */}
        <div className="flex justify-between items-center sticky top-0 glass-panel z-30 px-5 py-4 border-b-0 border-white/5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Oggi, 12 Ott</h1>
            <p className="text-sm text-primary font-medium tracking-wide">4 Appuntamenti · € 130 Previsti</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full text-white/70 hover:text-white hover:bg-white/10">
              <Bell className="w-5 h-5" />
            </Button>
            <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative mt-6 px-3">
          {/* Current time indicator mock */}
          <div className="absolute left-16 right-4 border-t border-primary z-20 flex items-center shadow-[0_0_10px_rgba(212,175,55,0.8)]" style={{ top: '48%' }}>
            <div className="w-2.5 h-2.5 rounded-full bg-primary -ml-[5px] shadow-[0_0_10px_rgba(212,175,55,1)]" />
            <div className="ml-2 text-xs font-bold text-primary bg-background/80 px-1 rounded">13:45</div>
          </div>

          {hours.map(hour => (
            <div key={hour} className="flex relative min-h-[90px]">
              {/* Time label */}
              <div className="w-16 shrink-0 text-right pr-4 text-sm font-medium text-white/40 pt-2 font-mono">
                {hour.toString().padStart(2, '0')}:00
              </div>
              
              {/* Hour grid line */}
              <div className="flex-1 border-t border-white/5 relative">
                {appointments
                  .filter(apt => apt.time.startsWith(hour.toString().padStart(2, '0')))
                  .map((apt, i) => {
                    const minutes = parseInt(apt.time.split(':')[1])
                    const topPercent = (minutes / 60) * 100
                    const heightPixels = (apt.duration / 60) * 90 // 90px per hour block
                    
                    const isCompleted = apt.status === 'completed'
                    const isNoShow = apt.status === 'no-show'
                    
                    return (
                      <div 
                        key={i}
                        className={`absolute left-2 right-2 rounded-2xl p-3 text-sm transition-all shadow-lg border overflow-hidden group
                          ${isCompleted ? 'bg-white/5 border-white/5 opacity-60' : 
                            isNoShow ? 'bg-red-950/30 border-red-900/30 text-red-200' : 
                            'glass-card border-primary/30'}`}
                        style={{ 
                          top: `calc(${topPercent}% + 1px)`, 
                          height: `${heightPixels - 2}px`,
                          zIndex: 10
                        }}
                      >
                        {/* Status accent line */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                            isCompleted ? 'bg-white/20' : 
                            isNoShow ? 'bg-red-500/50' : 
                            'bg-gradient-to-b from-[#D4AF37] to-[#F59E0B]'
                          }`} 
                        />
                        
                        <div className="flex justify-between items-start h-full ml-1">
                          <div className="flex flex-col justify-center h-full">
                            <div className={`font-bold ${isCompleted || isNoShow ? 'text-white/60' : 'text-white'} truncate text-base`}>
                              {apt.customer}
                            </div>
                            <div className={`text-xs truncate mt-0.5 ${isCompleted || isNoShow ? 'text-white/40' : 'text-primary/80 font-medium'}`}>
                              {apt.service}
                            </div>
                          </div>
                          
                          {(!isCompleted && !isNoShow) && (
                            <div className="flex flex-col justify-between h-full items-end opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button variant="ghost" size="icon" className="h-6 w-6 text-white/50 hover:text-white">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                              <div className="flex gap-1">
                                <Button variant="secondary" size="icon" className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20">
                                  <Phone className="w-3.5 h-3.5" />
                                </Button>
                                <Button variant="default" size="icon" className="h-7 w-7 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground">
                                  <CreditCard className="w-3.5 h-3.5" />
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          {(isCompleted || isNoShow) && (
                            <div className="text-xs font-mono text-white/30 self-center">
                              {apt.status === 'completed' ? 'Fatto' : 'Assente'}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
