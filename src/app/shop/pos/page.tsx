"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Banknote } from "lucide-react"

export default function POSPage() {
  const [completed, setCompleted] = useState(false)

  if (completed) {
    return (
      <div className="space-y-6 max-w-lg mx-auto pt-12 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Transazione Completata</h1>
        <p className="text-muted-foreground">Incasso registrato con successo. Sono stati assegnati 35 punti fedeltà al cliente.</p>
        
        <Button className="w-full mt-8" onClick={() => setCompleted(false)}>Torna al POS</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cassa / POS</h1>
        <p className="text-muted-foreground">Gestisci gli incassi per gli appuntamenti terminati.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Appuntamenti da incassare oggi</h2>
          
          <Card className="border-primary bg-primary/5 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-lg">Andrea Rossi</div>
                <div className="font-bold text-lg text-primary">€ 35,00</div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">Taglio + Barba • ore 15:00 con Luigi</div>
              
              <div className="flex items-center justify-between text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full w-fit">
                Cliente Fedele (450 pt)
              </div>
            </CardContent>
          </Card>

          <Card className="opacity-60 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-lg">Marco Bianchi</div>
                <div className="font-bold text-lg">€ 20,00</div>
              </div>
              <div className="text-sm text-muted-foreground">Taglio Classico • ore 15:30 con Luigi</div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader className="pb-4 border-b">
              <CardTitle>Riepilogo Cassa</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Taglio + Barba</span>
                  <span>€ 30,00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Prodotto: Cera per Capelli (Aggiunto)</span>
                  <span>€ 5,00</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t pt-4">
                <div className="font-bold text-xl">Totale</div>
                <div className="font-bold text-3xl text-primary">€ 35,00</div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-4">
                <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={() => setCompleted(true)}>
                  <Banknote className="h-6 w-6" />
                  Contanti
                </Button>
                <Button className="h-20 flex flex-col gap-2" onClick={() => setCompleted(true)}>
                  <CreditCard className="h-6 w-6" />
                  POS / Carta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
