import { AuthDialog } from './AuthDialog'

export function Header() {
  return (
    <header className="h-12 flex items-center justify-between px-4 bg-white border-b border-neutral-300">
      <h1 className="text-xl font-semibold tracking-widest uppercase text-neutral-900">PRISM</h1>
      <nav>
        <AuthDialog />
      </nav>
    </header>
  )
}
