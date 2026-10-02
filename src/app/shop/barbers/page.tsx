import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BarbersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Staff / Barbieri</h1>
          <p className="text-muted-foreground">Gestisci i membri del tuo staff.</p>
        </div>
        <Button>Aggiungi Barbiere</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-bold">
              L
            </div>
            <div>
              <CardTitle className="text-lg">Luigi</CardTitle>
              <p className="text-sm text-muted-foreground">Barber Senior</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Attivo</span>
              <Button variant="outline" size="sm">Modifica</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
