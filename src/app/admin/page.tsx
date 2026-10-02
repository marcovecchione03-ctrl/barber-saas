import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, CreditCard, Activity, Users } from "lucide-react"
import Link from "next/link"

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">SaaS Dashboard</h1>
        <p className="text-muted-foreground">Panoramica globale della piattaforma Barber SaaS.</p>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shops Attivi</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 questo mese</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MRR</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€ 4,158</div>
            <p className="text-xs text-muted-foreground">+12% rispetto al mese scorso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utenti Finali (Clienti)</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4k</div>
            <p className="text-xs text-muted-foreground">Utenti registrati sulla piattaforma</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">100%</div>
            <p className="text-xs text-muted-foreground">Tutti i sistemi operativi</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Ultimi Shops Registrati</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Milano Barber Shop", plan: "PRO", status: "Active", date: "Oggi" },
                { name: "Classic Cuts Roma", plan: "TRIAL", status: "Active", date: "Ieri" },
                { name: "Urban Style", plan: "ENTERPRISE", status: "Active", date: "3 giorni fa" },
              ].map((shop, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-semibold">{shop.name}</div>
                    <div className="text-sm text-muted-foreground">Registrato: {shop.date}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">{shop.plan}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/admin/shops" className="block mt-4 text-sm text-primary font-medium hover:underline">
              Vedi tutti i tenants &rarr;
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
