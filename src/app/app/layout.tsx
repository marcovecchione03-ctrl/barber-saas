"use client"

import { Home, CalendarPlus, User, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CustomerAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/app/dashboard" },
    { icon: CalendarPlus, label: "Prenota", href: "/app/book" },
    { icon: User, label: "Profilo", href: "/app/profile" },
    { icon: Settings, label: "Opzioni", href: "/app/settings" },
  ]

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* Page Content */}
      <div className="flex-1 pb-24">
        {children}
      </div>

      {/* Floating Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden pointer-events-none">
        <div className="glass-panel mx-auto max-w-sm rounded-3xl p-2 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-white/10 bg-black/60 backdrop-blur-xl pointer-events-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/app/book' && pathname.startsWith('/app/book'))
            const Icon = item.icon
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all duration-300 relative ${
                  isActive ? 'text-primary' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl -z-10" />
                )}
                <Icon className={`w-6 h-6 mb-1 ${isActive ? 'drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
      
      {/* Desktop Sidebar (Optional enhancement for later, hide bottom nav on desktop) */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-64 glass-panel border-r border-white/10 flex-col pt-8 z-40">
        {/* Placeholder for desktop layout if needed, though this is mobile-first */}
        <div className="px-6 mb-12">
          <h1 className="text-2xl font-bold text-white tracking-tight">Barber<span className="text-primary">SaaS</span></h1>
        </div>
        <div className="flex-1 px-4 space-y-2">
           {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/app/book' && pathname.startsWith('/app/book'))
            const Icon = item.icon
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className="font-semibold">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
