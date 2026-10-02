"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ReviewPage({ params }: { params: { id: string } }) {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="space-y-6 px-4 pt-12 pb-24 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="h-10 w-10 fill-current" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Grazie!</h1>
        <p className="text-muted-foreground">La tua recensione aiuta lo staff a migliorare sempre di più il servizio.</p>
        
        <Link href="/app/appointments" className="block mt-12">
          <Button className="w-full">Torna agli appuntamenti</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-4 pt-6 pb-24">
      <h1 className="text-2xl font-bold tracking-tight">Lascia una Recensione</h1>
      <p className="text-muted-foreground">Come ti sei trovato con Marco per il tuo "Taglio + Barba" del 15 Settembre?</p>

      <Card className="mt-8 border-none shadow-none bg-transparent">
        <CardContent className="p-0 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="focus:outline-none transition-transform active:scale-95"
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setRating(star)}
            >
              <Star 
                className={`h-12 w-12 transition-colors ${
                  (hovered || rating) >= star 
                    ? "fill-primary text-primary" 
                    : "text-muted stroke-[1.5px]"
                }`} 
              />
            </button>
          ))}
        </CardContent>
      </Card>

      <div className="mt-8 space-y-4">
        <textarea 
          className="w-full p-4 border rounded-xl bg-background min-h-[120px] focus:ring-2 focus:ring-primary outline-none"
          placeholder="Aggiungi un commento (opzionale)..."
        ></textarea>

        <Button 
          className="w-full h-14 text-lg font-bold" 
          disabled={rating === 0}
          onClick={() => setSubmitted(true)}
        >
          Invia Recensione
        </Button>
      </div>
    </div>
  )
}
