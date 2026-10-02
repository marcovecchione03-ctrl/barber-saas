"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((s) => Math.min(s + 1, 5))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Setup Barber Shop</h1>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-right">Step {step} di 5</p>
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <h2 className="text-lg font-semibold">Informazioni Attività</h2>
          <div className="space-y-2">
            <Label htmlFor="shopName">Nome Barber Shop</Label>
            <Input id="shopName" placeholder="Es. Mario's Barber" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Indirizzo</Label>
            <Input id="address" placeholder="Es. Via Roma 1, Milano" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefono (opzionale)</Label>
            <Input id="phone" type="tel" placeholder="Es. +39 333 1234567" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <h2 className="text-lg font-semibold">Branding</h2>
          <p className="text-sm text-muted-foreground">Scegli i colori del tuo brand per un'esperienza white label.</p>
          <div className="space-y-2">
            <Label htmlFor="primaryColor">Colore Principale</Label>
            <div className="flex gap-2">
              <Input id="primaryColor" type="color" className="w-12 h-10 p-1" defaultValue="#000000" />
              <Input type="text" className="flex-1" defaultValue="#000000" />
            </div>
          </div>
          <div className="p-4 rounded-lg border mt-4" style={{ backgroundColor: 'var(--background)' }}>
            <h3 className="font-bold" style={{ color: 'var(--foreground)' }}>Preview</h3>
            <Button className="mt-2 w-full">Bottone Primario</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <h2 className="text-lg font-semibold">Aggiungi Barbieri</h2>
          <div className="rounded-md border p-4 space-y-3">
            <div className="space-y-2">
              <Label>Nome Barbiere</Label>
              <Input placeholder="Es. Luigi" />
            </div>
            <Button variant="outline" className="w-full">Aggiungi</Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <h2 className="text-lg font-semibold">Servizi</h2>
          <div className="rounded-md border p-4 space-y-3">
            <div className="space-y-2">
              <Label>Nome Servizio</Label>
              <Input placeholder="Es. Taglio Capelli" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label>Durata (min)</Label>
                <Input type="number" placeholder="30" />
              </div>
              <div className="space-y-2">
                <Label>Prezzo (€)</Label>
                <Input type="number" placeholder="20" />
              </div>
            </div>
            <Button variant="outline" className="w-full">Aggiungi Servizio</Button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <h2 className="text-lg font-semibold">Orari di Apertura</h2>
          <p className="text-sm text-muted-foreground">Configura gli orari standard del negozio.</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Lunedì</span>
              <div className="flex gap-2 items-center">
                <Input type="time" defaultValue="09:00" className="w-24" />
                <span>-</span>
                <Input type="time" defaultValue="19:00" className="w-24" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Martedì</span>
              <div className="flex gap-2 items-center">
                <Input type="time" defaultValue="09:00" className="w-24" />
                <span>-</span>
                <Input type="time" defaultValue="19:00" className="w-24" />
              </div>
            </div>
            {/* ... other days simplified for MVP view */}
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={prevStep} disabled={step === 1}>
          Indietro
        </Button>
        {step < 5 ? (
          <Button onClick={nextStep}>
            Continua
          </Button>
        ) : (
          <Button onClick={() => window.location.href = '/shop'}>
            Completa Setup
          </Button>
        )}
      </div>
    </div>
  )
}
