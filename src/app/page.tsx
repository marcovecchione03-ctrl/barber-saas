"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Scissors } from "lucide-react"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    // Simulazione di un check di autenticazione (es. Supabase session)
    // Se c'è una sessione -> /app/dashboard
    // Se non c'è una sessione -> /login
    const checkAuth = setTimeout(() => {
      // Per la demo, andiamo alla dashboard. 
      // Nella fase 7 (Supabase), qui ci sarà la logica reale.
      router.push('/app/dashboard')
    }, 2000)

    return () => clearTimeout(checkAuth)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse duration-3000" />
      
      <div className="z-10 flex flex-col items-center animate-in zoom-in duration-1000 fade-in">
        <div className="w-24 h-24 rounded-3xl glass-card flex items-center justify-center border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.3)] mb-6">
          <Scissors className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Barber<span className="text-primary">SaaS</span></h1>
        <p className="text-primary/70 font-medium tracking-widest uppercase text-sm">Premium Grooming</p>
        
        <div className="mt-16 flex items-center gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
