import { Button } from "@/components/ui/button"

export default function CustomerHomePage() {
  return (
    <div className="space-y-6">
      {/* Cover Image Placeholder */}
      <div className="h-48 bg-muted w-full relative">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="px-4 -mt-12 relative z-10 space-y-4">
        <div className="w-24 h-24 rounded-full border-4 border-background bg-card shadow-sm flex items-center justify-center font-bold text-2xl text-primary">
          B
        </div>
        
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Il Mio Barber Shop</h1>
          <p className="text-muted-foreground text-sm">Via Roma 123, Milano</p>
        </div>

        <Button className="w-full h-12 text-lg font-bold shadow-md rounded-xl">
          PRENOTA ORA
        </Button>
      </div>
    </div>
  )
}
