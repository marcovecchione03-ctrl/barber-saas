"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { generateTimeSlots } from "@/lib/availability"
import { CheckCircle2, ChevronRight, Clock, User, Calendar as CalendarIcon, Scissors } from "lucide-react"

export default function BookingFlowPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const fastService = searchParams.get("service")
  const fastBarber = searchParams.get("barber")

  const [step, setStep] = useState(fastService && fastBarber ? 3 : 1)
  
  // Booking State
  const [selectedService, setSelectedService] = useState<string | null>(fastService || null)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(fastBarber || null)
  const [selectedDate, setSelectedDate] = useState<string>("Oggi, 12 Ott")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const timeSlots = generateTimeSlots()

  const services = [
    { id: "1", name: "Taglio Classico", duration: "30 min", price: "€ 25", desc: "Sfumatura a forbice o macchinetta, finish con panno caldo." },
    { id: "2", name: "Modellatura Barba", duration: "20 min", price: "€ 18", desc: "Regolazione barba con rasoio a mano libera e oli essenziali." },
    { id: "3", name: "Executive: Taglio + Barba", duration: "60 min", price: "€ 40", desc: "Il pacchetto completo per un look impeccabile." }
  ]

  const barbers = [
    { id: "b1", name: "Luigi", role: "Master Barber", img: "https://i.pravatar.cc/150?u=luigi" },
    { id: "b2", name: "Marco", role: "Senior Stylist", img: "https://i.pravatar.cc/150?u=marco" }
  ]

  return (
    <div className="min-h-screen pb-24 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-primary/10 rounded-b-[100%] blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="px-5 pt-8 space-y-8 max-w-md mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-white">Prenota</h1>
            <div className="text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/10">
              Step {step} di 4
            </div>
          </div>
          <p className="text-muted-foreground text-sm">Assicurati il tuo momento di stile.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 w-full">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= i ? 'bg-primary' : 'bg-primary/20'}`} />
          ))}
        </div>

        {/* STEP 1: SERVICES */}
        {step === 1 && (
          <div className="space-y-5 animate-in slide-in-from-right-8 duration-500 fade-in">
            <h2 className="text-xl font-semibold flex items-center gap-2"><Scissors className="w-5 h-5 text-primary"/> Scegli il Servizio</h2>
            
            <div className="space-y-3">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    selectedService === service.id 
                      ? 'glass-card border-primary ring-1 ring-primary/50 translate-x-2' 
                      : 'glass border-white/5 hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {selectedService === service.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-6 h-6 text-primary animate-in zoom-in duration-300" />
                    </div>
                  )}
                  <div className="pr-8">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-semibold text-lg">{service.name}</div>
                      <div className="font-bold text-primary">{service.price}</div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.desc}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/5 px-2.5 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="w-full h-14 rounded-xl text-primary-foreground font-bold text-lg mt-8 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02]" 
              disabled={!selectedService}
              onClick={() => setStep(2)}
            >
              Continua <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        )}

        {/* STEP 2: BARBERS */}
        {step === 2 && (
          <div className="space-y-5 animate-in slide-in-from-right-8 duration-500 fade-in">
            <h2 className="text-xl font-semibold flex items-center gap-2"><User className="w-5 h-5 text-primary"/> Scegli il Professionista</h2>
            
            <div className="grid grid-cols-2 gap-3">
              <div 
                className={`col-span-2 relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 ${
                  selectedBarber === "any" ? 'glass-card border-primary ring-1 ring-primary/50' : 'glass border-white/5'
                }`}
                onClick={() => setSelectedBarber("any")}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                  *
                </div>
                <div>
                  <div className="font-semibold text-lg">Chiunque</div>
                  <div className="text-xs text-muted-foreground">Primo slot disponibile</div>
                </div>
              </div>

              {barbers.map((barber) => (
                <div 
                  key={barber.id} 
                  className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col items-center text-center gap-3 ${
                    selectedBarber === barber.id ? 'glass-card border-primary ring-1 ring-primary/50 -translate-y-1' : 'glass border-white/5'
                  }`}
                  onClick={() => setSelectedBarber(barber.id)}
                >
                  <img src={barber.img} alt={barber.name} className="w-16 h-16 rounded-full border-2 border-white/10 object-cover" />
                  <div>
                    <div className="font-semibold">{barber.name}</div>
                    <div className="text-xs text-primary">{barber.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <Button variant="outline" className="w-14 h-14 rounded-xl glass border-white/10 shrink-0" onClick={() => setStep(1)}>
                <ChevronRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button className="flex-1 h-14 rounded-xl font-bold text-lg" disabled={!selectedBarber} onClick={() => setStep(3)}>
                Avanti
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: DATE & TIME */}
        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 fade-in">
            <h2 className="text-xl font-semibold flex items-center gap-2"><CalendarIcon className="w-5 h-5 text-primary"/> Quando?</h2>
            
            <div className="space-y-3">
              <div className="text-sm font-medium text-muted-foreground">Ottobre 2026</div>
              <div className="flex gap-3 overflow-x-auto pb-4 -mx-5 px-5 snap-x hide-scrollbar">
                {[
                  { day: "Oggi", date: "12", full: "Oggi, 12 Ott" },
                  { day: "Dom", date: "13", full: "Dom, 13 Ott" },
                  { day: "Lun", date: "14", full: "Lun, 14 Ott" },
                  { day: "Mar", date: "15", full: "Mar, 15 Ott" },
                  { day: "Mer", date: "16", full: "Mer, 16 Ott" },
                ].map((d) => (
                  <div 
                    key={d.full}
                    onClick={() => setSelectedDate(d.full)}
                    className={`shrink-0 snap-start w-20 py-3 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all border ${
                      selectedDate === d.full ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 scale-105' : 'glass border-white/5 text-muted-foreground'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider mb-1 opacity-80">{d.day}</span>
                    <span className="text-2xl">{d.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-sm font-medium text-muted-foreground">Orari Disponibili</div>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.slice(0,9).map((slot) => (
                  <Button
                    key={slot.time}
                    variant="outline"
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`h-12 rounded-xl border-white/10 transition-all ${
                      selectedTime === slot.time 
                        ? "bg-primary border-primary text-primary-foreground font-bold" 
                        : "glass hover:border-primary/50 text-white"
                    } ${!slot.available ? 'opacity-20 grayscale' : ''}`}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button variant="outline" className="w-14 h-14 rounded-xl glass border-white/10 shrink-0" onClick={() => setStep(2)}>
                <ChevronRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button className="flex-1 h-14 rounded-xl font-bold text-lg" disabled={!selectedTime} onClick={() => setStep(4)}>
                Avanti
              </Button>
            </div>
          </div>
        )}

        {/* STEP 4: SUMMARY */}
        {step === 4 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 fade-in">
            <h2 className="text-xl font-semibold">Riepilogo Prenotazione</h2>
            
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              
              <div className="space-y-5">
                <div className="flex justify-between items-start pb-5 border-b border-white/10">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Servizio</div>
                    <div className="font-semibold text-lg">{services.find(s => s.id === selectedService)?.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Durata</div>
                    <div className="font-medium text-white/80">{services.find(s => s.id === selectedService)?.duration}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-5 border-b border-white/10">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Barbiere</div>
                    <div className="font-semibold">{selectedBarber === 'any' ? 'Qualsiasi' : barbers.find(b => b.id === selectedBarber)?.name}</div>
                  </div>
                  {selectedBarber !== 'any' && (
                    <img src={barbers.find(b => b.id === selectedBarber)?.img} className="w-10 h-10 rounded-full border border-white/20" alt="barber" />
                  )}
                </div>

                <div className="flex justify-between items-start pb-5 border-b border-white/10">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Data</div>
                    <div className="font-semibold">{selectedDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ora</div>
                    <div className="font-bold text-primary text-xl">{selectedTime}</div>
                  </div>
                </div>

                <div className="flex justify-between items-end pt-2">
                  <div className="text-sm text-muted-foreground">Da pagare in salone</div>
                  <div className="font-bold text-2xl text-white">{services.find(s => s.id === selectedService)?.price}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button variant="outline" className="w-14 h-14 rounded-xl glass border-white/10 shrink-0" onClick={() => setStep(3)}>
                <ChevronRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button 
                className="flex-1 h-14 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02]" 
                onClick={() => router.push('/app/profile')}
              >
                Conferma Appuntamento
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Hide scrollbar util */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  )
}
