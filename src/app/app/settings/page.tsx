"use client"

import { Button } from "@/components/ui/button"
import { Bell, CreditCard, LogOut, Shield, User, ChevronRight, Palette } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SettingsPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    // TODO: Supabase Sign Out
    router.push('/login')
  }

  const themes = [
    { id: 'luxury-gold', label: 'Luxury Gold', color: '#D4AF37' },
    { id: 'classic-barber', label: 'Classic Barber', color: '#8b1819' },
    { id: 'neon-cyber', label: 'Neon Cyber', color: '#b940cc' },
    { id: 'minimal-light', label: 'Minimal Light', color: '#f5f5f5' }
  ]

  const settingsGroups = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Modifica Profilo", href: "#" },
        { icon: CreditCard, label: "Metodi di Pagamento", href: "#" },
      ]
    },
    {
      title: "Preferenze",
      items: [
        { icon: Bell, label: "Notifiche", href: "#" },
      ]
    },
    {
      title: "Sicurezza",
      items: [
        { icon: Shield, label: "Privacy & Sicurezza", href: "#" },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen px-4 pt-12 pb-6">
      <h1 className="text-3xl font-bold text-white tracking-tight mb-8">Impostazioni</h1>

      <div className="space-y-8">
        
        {/* Theme Selector */}
        {mounted && (
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 ml-2 flex items-center gap-2">
              <Palette className="w-4 h-4" /> Tema App
            </h2>
            <div className="glass-panel rounded-2xl border border-white/10 p-4">
              <div className="grid grid-cols-2 gap-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      theme === t.id 
                        ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)]' 
                        : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full shadow-inner border border-white/20"
                      style={{ backgroundColor: t.color }}
                    />
                    <span className={`text-sm font-medium ${theme === t.id ? 'text-primary' : 'text-white/70'}`}>
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {settingsGroups.map((group, i) => (
          <div key={i}>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 ml-2">{group.title}</h2>
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
              {group.items.map((item, j) => (
                <div 
                  key={j} 
                  className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-white">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-white/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="w-full h-14 rounded-2xl text-red-400 hover:text-red-300 hover:bg-red-500/10 font-bold"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-2" /> Disconnetti
          </Button>
        </div>
      </div>
    </div>
  )
}
