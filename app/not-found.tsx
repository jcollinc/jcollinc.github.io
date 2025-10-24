export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-center">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Off course</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Page not found</h1>
        <p className="text-sm text-muted-foreground">
          You&apos;ve made a wrong turn somewhere - it happens! Try heading back to the homepage.
        </p>
      </div>
    </main>
  );
}
