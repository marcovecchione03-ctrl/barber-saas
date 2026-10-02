import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon, Clock, MapPin, Star, Scissors } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-12 pb-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 -translate-x-1/2" />

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-white/60 font-medium">Bentornato,</p>
          <h1 className="text-3xl font-bold text-white tracking-tight">Mario Rossi</h1>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-primary/30 p-0.5 overflow-hidden">
          <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
            <span className="font-bold text-lg text-primary">MR</span>
          </div>
        </div>
      </div>

      {/* Next Appointment Card */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Prossimo Appuntamento</h2>
        <div className="glass-card rounded-3xl p-5 border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(212,175,55,0.15)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Scissors className="w-24 h-24 text-primary" />
          </div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex flex-col items-center justify-center border border-[#D4AF37]/20">
              <span className="text-xs font-bold text-[#D4AF37] uppercase">Ott</span>
              <span className="text-xl font-bold text-white">15</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Taglio + Barba</h3>
              <p className="text-white/60 text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" /> 10:30 - 11:30 (con Luigi)
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 relative z-10">
            <Button className="flex-1 rounded-xl bg-white/10 text-white hover:bg-white/20">Modifica</Button>
            <Button className="flex-1 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30">Annulla</Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Azioni Rapide</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/app/book" className="glass rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <span className="font-semibold text-white">Nuova Prenotazione</span>
          </Link>
          
          <div className="glass rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1 opacity-70">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70">
              <Star className="w-6 h-6" />
            </div>
            <span className="font-semibold text-white text-center">Lascia una Recensione</span>
          </div>
        </div>
      </div>

      {/* Info Shop */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Il tuo Salone</h2>
        <div className="glass rounded-2xl p-4 border border-white/10 flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
            <Scissors className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-white">BarberSaaS Premium</h3>
            <p className="text-white/60 text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" /> Via Roma 123, Milano
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
