import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

export default function CustomersPage() {
  const customers = [
    { id: "1", name: "Andrea Rossi", phone: "+39 333 1234567", lastVisit: "Oggi", totalVisits: 12, revenue: "€ 350" },
    { id: "2", name: "Marco Bianchi", phone: "+39 333 7654321", lastVisit: "12 Set 2026", totalVisits: 4, revenue: "€ 120" },
    { id: "3", name: "Giovanni Neri", phone: "+39 333 9998887", lastVisit: "5 Ago 2026", totalVisits: 1, revenue: "€ 20" },
    { id: "4", name: "Luca Verdi", phone: "+39 333 5556667", lastVisit: "Ieri", totalVisits: 24, revenue: "€ 890" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clienti</h1>
          <p className="text-muted-foreground">Gestisci il tuo portafoglio clienti.</p>
        </div>
        <Button>Nuovo Cliente</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Cerca cliente per nome o telefono..." className="pl-9 h-10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customers.map((c) => (
          <Link href={`/shop/customers/${c.id}`} key={c.id}>
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  {c.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{c.name}</div>
                  <div className="text-sm text-muted-foreground truncate">{c.phone}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-medium">{c.revenue}</div>
                  <div className="text-xs text-muted-foreground">{c.totalVisits} visite</div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
