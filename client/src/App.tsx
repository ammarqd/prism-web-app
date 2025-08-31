import { useState, useRef, type ChangeEvent, type JSX } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

interface ImageData {
  file: File
  url: string
}

function App(): JSX.Element {
  const [image, setImage] = useState<ImageData | null>(null)
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
  const [showOriginal, setShowOriginal] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImage({ file, url })
    }
  }

  return (
    <div className="h-screen flex flex-col bg-white text-gray-900 overflow-hidden font-primary">
      <header className="h-12 flex items-center justify-between px-4 bg-white border-b border-gray-300">
        <h1 className="text-xl font-semibold tracking-widest uppercase text-gray-900">PRISM</h1>
        <nav className="flex items-center">
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <button 
                type="button" 
                className="flex items-center gap-2 font-medium text-sm py-2 px-4 rounded-full border border-gray-300 bg-white cursor-pointer transition-colors hover:bg-gray-50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" 
                  />
                </svg>
                Log In
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm w-full max-w-xs">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-center">
                  {isRegister ? 'Register' : 'Log In'}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col space-y-3 pt-4">
                <Input 
                  type="email" 
                  placeholder="Email"
                  className="rounded-xl py-3"
                />
                <Input 
                  type="password" 
                  placeholder="Password"
                  className="rounded-xl py-3"
                />
                {isRegister && (
                  <Input 
                    type="password" 
                    placeholder="Confirm Password"
                    className="rounded-xl"
                  />
                )}
                {!isRegister && (
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label 
                        htmlFor="remember" 
                        className="text-gray-700 cursor-pointer select-none"
                      >
                        Remember me
                      </label>
                    </div>
                    <button 
                      type="button"
                      className="text-black hover:text-gray-700 font-medium cursor-pointer transition-colors"
                      onClick={() => {
                        // Handle forgot password logic here
                        console.log('Forgot password clicked')
                      }}
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
                <Button 
                  className="w-full py-3 rounded-xl bg-black text-white hover:bg-gray-800 font-medium"
                  onClick={() => setIsLoginOpen(false)}
                >
                  {isRegister ? 'Register' : 'Log In'}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                    onClick={() => setIsRegister(!isRegister)}
                  >
                    {isRegister 
                      ? 'Already have an account? Log in' 
                      : "Don't have an account? Register"
                    }
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      <div className="flex flex-1">
        <aside className="bg-white border-r border-gray-300 flex flex-col w-70 rounded-xl">
          <div className="p-8 flex flex-col gap-4">
            <h3 className="text-base font-semibold m-0 pb-2 border-b border-gray-300 text-gray-900">Colours</h3>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="hue" className="text-sm font-medium text-gray-900">Hue</label>
              <input 
                type="range" 
                id="hue" 
                min="0" 
                max="360" 
                className="h-2 rounded cursor-pointer appearance-none slider-hue"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="brightness" className="text-sm font-medium text-gray-900">Brightness</label>
              <input 
                type="range" 
                id="brightness" 
                min="0" 
                max="200" 
                defaultValue="100" 
                className="h-2 rounded cursor-pointer appearance-none slider-brightness"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contrast" className="text-sm font-medium text-gray-900">Contrast</label>
              <input 
                type="range" 
                id="contrast" 
                min="0" 
                max="200" 
                defaultValue="100" 
                className="h-2 rounded cursor-pointer appearance-none slider-contrast"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="saturation" className="text-sm font-medium text-gray-900">Saturation</label>
              <input 
                type="range" 
                id="saturation" 
                min="0" 
                max="200" 
                defaultValue="100" 
                className="h-2 rounded cursor-pointer appearance-none slider-saturation"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                }}
              />
            </div>
          </div>
        </aside>

        <main className="relative flex flex-1 justify-center items-center bg-white overflow-hidden" style={{ height: 'calc(100vh - 3rem)' }}>
          {!image && (
            <>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange} 
              />
              <div 
                className="w-4/5 max-w-lg h-70 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer text-center transition-colors p-8 hover:bg-gray-100"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-12 h-12 stroke-gray-900 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={1.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0-6l-3 3m3-3l3 3m0-6V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6" 
                  />
                </svg>
                <p className="text-base font-medium text-gray-900 m-0">Click or tap to upload an image</p>
                <p className="text-sm text-gray-600 mt-1">JPG, PNG, or GIF — max 5MB</p>
              </div>
            </>
          )}

          {image && (
            <>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex">
                <button 
                  className="py-2 px-4 text-sm border border-gray-300 bg-white text-gray-900 cursor-pointer rounded-full shadow-md font-medium"
                  onMouseDown={() => setShowOriginal(true)}
                  onMouseUp={() => setShowOriginal(false)}
                  onMouseLeave={() => setShowOriginal(false)}
                >
                  Hold to Show Original
                </button>
              </div>
              <img 
                src={image.url} 
                alt="uploaded" 
                className="max-w-full max-h-full p-16 object-contain" 
              />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default App