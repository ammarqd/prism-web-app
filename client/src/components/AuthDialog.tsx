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
  onLoginSuccess: () => void
}

export function AuthDialog({ isOpen, onOpenChange, onLoginSuccess }: AuthDialogProps) {
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setError('')
    setLoading(true)

    try {
      const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login'
      
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Something went wrong')
        setLoading(false)
        return
      }

      localStorage.setItem('token', data.token)

      onLoginSuccess()
      onOpenChange(false)
      
      setEmail('')
      setPassword('')
      
    } catch (err) {
      setError('Failed to connect to server')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm w-full max-w-xs">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {isRegister ? 'Register' : 'Log In'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col space-y-3.5 pt-4">
          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-3 rounded-lg">
              {error}
            </div>
          )}
          
          <Input 
            type="email" 
            placeholder="Email" 
            className="rounded-xl py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input 
            type="password" 
            placeholder="Password" 
            className="rounded-xl py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
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
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Loading...' : (isRegister ? 'Register' : 'Log In')}
          </Button>
          
          <div className="text-center">
            <button
              className="text-sm text-neutral-600 hover:text-neutral-900"
              onClick={() => {
                setIsRegister(!isRegister)
                setError('')
              }}
            >
              {isRegister ? 'Already have an account? Log in' : "Don't have an account? Register"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}