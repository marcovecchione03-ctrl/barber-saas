export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-background rounded-xl border shadow-sm p-6 overflow-y-auto max-h-[90vh]">
        {children}
      </div>
    </div>
  )
}
