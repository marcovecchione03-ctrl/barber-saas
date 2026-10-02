export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/20">
      <nav className="border-b bg-background px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">Super Admin SaaS</div>
      </nav>
      <main className="p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}
