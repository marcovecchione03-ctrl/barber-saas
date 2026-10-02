import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Servizi</h1>
          <p className="text-muted-foreground">Gestisci i servizi e i prezzi.</p>
        </div>
        <Button>Aggiungi Servizio</Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg border-b pb-2">Capelli</h3>
        <Card>
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <div className="font-semibold">Taglio Classico</div>
              <div className="text-sm text-muted-foreground">30 min</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-bold">€ 20</div>
              <Button variant="outline" size="sm">Modifica</Button>
            </div>
          </CardContent>
        </Card>
        
        <h3 className="font-semibold text-lg border-b pb-2 pt-4">Barba</h3>
        <Card>
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <div className="font-semibold">Modellatura Barba</div>
              <div className="text-sm text-muted-foreground">20 min</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-bold">€ 15</div>
              <Button variant="outline" size="sm">Modifica</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
