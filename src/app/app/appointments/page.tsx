import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export default function CustomerAppointmentsPage() {
  return (
    <div className="space-y-6 px-4 pt-6 pb-24">
      <h1 className="text-2xl font-bold tracking-tight">I miei appuntamenti</h1>

      <div className="space-y-4">
        <h2 className="font-semibold">Prossimo Appuntamento</h2>
        
        <Card className="border-primary bg-primary/5">
          <CardHeader className="pb-2 border-b">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary">Oggi, 12 Ott - 15:30</span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">Confermato</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold">
                L
              </div>
              <div>
                <div className="font-semibold">Taglio Classico</div>
                <div className="text-sm text-muted-foreground">con Luigi • 30 min</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" className="w-1/2">Sposta</Button>
              <Button variant="destructive" className="w-1/2">Cancella</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4 pt-4 border-t">
        <h2 className="font-semibold text-muted-foreground">Storico</h2>
        
        <Card className="opacity-75">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">Taglio + Barba</div>
                <div className="text-sm text-muted-foreground">15 Set 2026 • con Marco</div>
              </div>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium">Completato</span>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Link href="/app/appointments/123/review" className="w-1/2">
                <Button variant="outline" className="w-full text-xs h-9">Recensisci</Button>
              </Link>
              <Link href="/app/book?service=3&barber=b2" className="w-1/2">
                <Button variant="secondary" className="w-full text-xs h-9">Prenota di nuovo</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
