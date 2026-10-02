import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function LoyaltySettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Programma Fedeltà</h1>
        <p className="text-muted-foreground">Configura come i tuoi clienti accumulano punti.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Stato Programma</CardTitle>
              <CardDescription>Attiva o disattiva l'assegnazione dei punti.</CardDescription>
            </div>
            <Switch defaultChecked />
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regole di Accumulo</CardTitle>
          <CardDescription>Definisci quanti punti riceve il cliente in base alla spesa.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-medium shrink-0">Per ogni</span>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-muted-foreground">€</span>
              <Input type="number" defaultValue="1" className="w-24 pl-7 text-center" />
            </div>
            <span className="font-medium shrink-0">spesi, assegna</span>
            <Input type="number" defaultValue="10" className="w-24 text-center" />
            <span className="font-medium shrink-0">Punti</span>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            Esempio: Un servizio da 25€ farà accumulare 250 punti al cliente al momento del pagamento in cassa.
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Premi e Riscatto</CardTitle>
          <CardDescription>Cosa possono ottenere i clienti con i punti?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Punti necessari per un Taglio Omaggio</Label>
            <Input type="number" defaultValue="2500" />
            <p className="text-xs text-muted-foreground">Il sistema avviserà automaticamente te e il cliente quando viene raggiunta questa soglia.</p>
          </div>
          
          <Button className="mt-4">Salva Configurazioni</Button>
        </CardContent>
      </Card>
    </div>
  )
}
