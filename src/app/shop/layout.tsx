export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/30 pb-16 md:pb-0 md:pl-64">
      {/* Mobile Bottom Navigation Placeholder */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t flex items-center justify-around z-50">
        <div className="flex flex-col items-center text-xs text-muted-foreground">Agenda</div>
        <div className="flex flex-col items-center text-xs text-muted-foreground">Clienti</div>
        <div className="flex flex-col items-center text-xs text-muted-foreground">Shop</div>
      </nav>

      {/* Desktop Sidebar Placeholder */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-64 bg-background border-r flex-col p-4">
        <div className="font-bold text-xl mb-8">Barber Admin</div>
        <nav className="flex-1 space-y-2">
          <div className="p-2 rounded-md bg-accent text-accent-foreground font-medium">Dashboard</div>
          <div className="p-2 rounded-md hover:bg-muted text-muted-foreground">Calendario</div>
          <div className="p-2 rounded-md hover:bg-muted text-muted-foreground">Clienti</div>
          <div className="p-2 rounded-md hover:bg-muted text-muted-foreground">Personalizzazione</div>
        </nav>
      </aside>

      <main className="p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}
