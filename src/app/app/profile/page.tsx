import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bell, Shield, LogOut, Star } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6 px-4 pt-6 pb-24">
      <h1 className="text-2xl font-bold tracking-tight">Il mio profilo</h1>

      <div className="flex items-center gap-4 py-4">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
          A
        </div>
        <div>
          <h2 className="text-xl font-bold">Andrea Rossi</h2>
          <p className="text-sm text-muted-foreground">andrea.rossi@email.com</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <Star className="h-8 w-8 text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">450</div>
            <div className="text-xs font-medium text-primary/80">Punti Loyalty</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs font-medium text-muted-foreground">Tagli effettuati</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dati Personali</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Nome Completo</Label>
            <Input defaultValue="Andrea Rossi" />
          </div>
          <div className="space-y-2">
            <Label>Telefono</Label>
            <Input defaultValue="+39 333 1234567" />
          </div>
          <Button className="w-full">Salva Modifiche</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Preferenze e Sicurezza</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start font-normal h-12">
            <Bell className="mr-4 h-5 w-5 text-muted-foreground" />
            Notifiche
          </Button>
          <Button variant="ghost" className="w-full justify-start font-normal h-12">
            <Shield className="mr-4 h-5 w-5 text-muted-foreground" />
            Privacy & Password
          </Button>
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-full h-12 mt-8">
        <LogOut className="mr-2 h-5 w-5" />
        Esci dall'Account
      </Button>
    </div>
  )
}
