"use client"

import { Button } from "@/components/ui/button"
import { Scissors, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrazione Supabase Auth
    router.push('/app/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-background relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="w-full max-w-sm mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center border-primary/30 mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Scissors className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Crea Account</h1>
          <p className="text-muted-foreground mt-2">Unisciti al club esclusivo</p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-white/80 ml-1">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Mario Rossi" 
              className="w-full h-12 px-4 rounded-xl glass border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-white/80 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="mario@email.com" 
              className="w-full h-12 px-4 rounded-xl glass border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium text-white/80 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full h-12 px-4 rounded-xl glass border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          <Button type="submit" className="w-full h-14 rounded-xl text-primary-foreground font-bold text-lg mt-6 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-all">
            Registrati <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground pt-4 border-t border-white/5">
          Hai già un account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">Accedi</Link>
        </div>
      </div>
    </div>
  )
}
