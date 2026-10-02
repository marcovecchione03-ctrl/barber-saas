import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Calendar, Scissors } from "lucide-react"
import Link from "next/link"

export default function CustomerProfilePage({ params }: { params: { id: string } }) {
  // Mock data for demo
  const customer = {
    name: "Andrea Rossi",
    phone: "+39 333 1234567",
    email: "andrea.rossi@email.com",
    joinedDate: "Marzo 2025",
    totalVisits: 12,
    totalRevenue: "€ 350",
    noShows: 0,
    notes: "Usa sempre gel fissaggio forte. Non tagliare troppo ai lati."
  }

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div className="flex items-center gap-4">
        <Link href="/shop/customers">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Profilo Cliente</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Info */}
        <Card className="md:col-span-1">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
              {customer.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold">{customer.name}</h2>
              <p className="text-sm text-muted-foreground">Cliente dal {customer.joinedDate}</p>
            </div>
            <div className="w-full flex gap-2">
              <Button className="flex-1" variant="outline"><Phone className="h-4 w-4 mr-2"/> Chiama</Button>
              <Button className="flex-1" variant="outline"><Mail className="h-4 w-4 mr-2"/> Email</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="md:col-span-2 grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Visite Totali</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customer.totalVisits}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Spesa Totale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{customer.totalRevenue}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">No-Show</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{customer.noShows}</div>
            </CardContent>
          </Card>
          <Card className="bg-muted/50 border-dashed border-2">
            <CardContent className="p-6 flex items-center justify-center h-full">
              <Button variant="link" className="font-semibold text-primary">Nuovo Appt.</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Internal Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Note Interne (Private)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 p-4 rounded-md text-sm">
              {customer.notes}
            </div>
            <Button variant="outline" size="sm" className="mt-4">Modifica Note</Button>
          </CardContent>
        </Card>

        {/* History */}
        <Card>
          <CardHeader>
            <CardTitle>Storico Appuntamenti</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { date: "12 Ott 2026", service: "Taglio + Barba", barber: "Luigi", status: "Prossimo" },
              { date: "15 Set 2026", service: "Taglio Classico", barber: "Luigi", status: "Completato" },
              { date: "20 Ago 2026", service: "Taglio + Barba", barber: "Marco", status: "Completato" }
            ].map((apt, i) => (
              <div key={i} className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-1.5 rounded-full ${apt.status === 'Prossimo' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    {apt.status === 'Prossimo' ? <Calendar className="h-4 w-4" /> : <Scissors className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{apt.service}</div>
                    <div className="text-xs text-muted-foreground">{apt.date} • con {apt.barber}</div>
                  </div>
                </div>
                <div className="text-xs font-medium px-2 py-1 bg-muted rounded-full">{apt.status}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
