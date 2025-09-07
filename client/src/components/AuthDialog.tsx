import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface AuthDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthDialog({ isOpen, onOpenChange }: AuthDialogProps) {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
            onClick={() => onOpenChange(false)}
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
