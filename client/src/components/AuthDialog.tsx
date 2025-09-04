import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AuthDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 font-medium text-sm py-2 px-5 rounded-full border border-neutral-300 bg-white cursor-pointer transition-colors hover:bg-neutral-50">
          {isRegister ? 'Register' : 'Log In'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transform scale-x-[-1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm w-full max-w-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {isRegister ? 'Register' : 'Log In'}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col space-y-3.5 pt-4">
          <Input type="email" placeholder="Email" className="rounded-xl py-3" />
          <Input type="password" placeholder="Password" className="rounded-xl py-3" />

          {!isRegister && (
            <div className="flex justify-start">
              <button
                className="text-neutral-600 hover:text-neutral-900 text-sm"
                onClick={() => console.log('Forgot password clicked')}
              >
                Forgot password?
              </button>
            </div>
          )}

          <Button
            className="w-full py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {isRegister ? 'Register' : 'Log In'}
          </Button>

          <div className="text-center">
            <button
              className="text-sm text-neutral-600 hover:text-neutral-900"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Already have an account? Log in' : "Don't have an account? Register"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
