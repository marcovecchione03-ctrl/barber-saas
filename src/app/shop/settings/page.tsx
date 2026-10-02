import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Impostazioni Shop</h1>
          <p className="text-muted-foreground">Gestisci il branding e le impostazioni generali.</p>
        </div>
        <Button>Salva Modifiche</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Branding & Identità</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Nome Attività</Label>
              <Input defaultValue="Il Mio Barber Shop" />
            </div>
            <div className="space-y-2">
              <Label>Colore Primario</Label>
              <div className="flex gap-2">
                <Input type="color" className="w-12 h-10 p-1" defaultValue="#000000" />
                <Input type="text" defaultValue="#000000" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orari di Apertura</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Semplificato per demo MVP */}
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
