import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MoreVertical } from "lucide-react"

export default function ShopsManagementPage() {
  const shops = [
    { id: "1", name: "Milano Barber Shop", owner: "Marco Rossi", plan: "PRO", revenue: "€ 1,200", status: "active" },
    { id: "2", name: "Classic Cuts Roma", owner: "Luigi Bianchi", plan: "TRIAL", revenue: "€ 0", status: "active" },
    { id: "3", name: "Urban Style", owner: "Giuseppe Verdi", plan: "ENTERPRISE", revenue: "€ 4,500", status: "active" },
    { id: "4", name: "Vintage Barber", owner: "Andrea Neri", plan: "PRO", revenue: "€ 890", status: "past_due" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tenants (Barber Shops)</h1>
          <p className="text-muted-foreground">Gestisci tutti i negozi iscritti al SaaS.</p>
        </div>
        <Button>Aggiungi Shop Manualmente</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Cerca negozio per nome..." className="pl-9 h-10" />
      </div>

      <div className="grid gap-4">
        {shops.map((shop) => (
          <Card key={shop.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-muted flex items-center justify-center font-bold">
                  {shop.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{shop.name}</div>
                  <div className="text-sm text-muted-foreground">{shop.owner}</div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="hidden md:block text-right">
                  <div className="text-sm font-medium">MRR Generato</div>
                  <div className="text-sm text-muted-foreground">{shop.revenue}</div>
                </div>
                
                <div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium
                    ${shop.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-destructive/10 text-destructive'}`}>
                    {shop.status.toUpperCase()}
                  </span>
                  <span className="ml-2 text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {shop.plan}
                  </span>
                </div>

                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
