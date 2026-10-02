import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar as CalendarIcon, Euro, Scissors } from "lucide-react"

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Panoramica di oggi, 12 Ottobre 2026</p>
      </div>
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prenotazioni</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">+2 rispetto a ieri</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incasso Stimato</CardTitle>
            <Euro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€ 385</div>
            <p className="text-xs text-muted-foreground">Oggi</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clienti</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">2 nuovi clienti</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupazione</CardTitle>
            <Scissors className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Staff al completo</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Prossimi Appuntamenti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "15:00", customer: "Andrea Rossi", service: "Taglio + Barba", barber: "Luigi", status: "In arrivo" },
                { time: "15:30", customer: "Marco Bianchi", service: "Taglio Classico", barber: "Luigi", status: "Confermato" },
                { time: "16:00", customer: "Giovanni Neri", service: "Modellatura Barba", barber: "Luigi", status: "Confermato" }
              ].map((apt, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-lg text-primary">{apt.time}</div>
                    <div>
                      <div className="font-semibold">{apt.customer}</div>
                      <div className="text-sm text-muted-foreground">{apt.service} • {apt.barber}</div>
                    </div>
                  </div>
                  <div className="text-sm px-2 py-1 bg-muted rounded-full font-medium">{apt.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
