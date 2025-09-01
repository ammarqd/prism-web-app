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

interface ImageData {
  file: File
  url: string
}

function App(): JSX.Element {
  const [image, setImage] = useState<ImageData | null>(null)
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
  // @ts-ignore
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
    <div className="h-screen flex flex-col bg-white text-neutral-900 overflow-hidden font-sans">
      <header className="h-12 flex items-center justify-between px-4 bg-white border-b border-neutral-300">
        <h1 className="text-xl font-semibold tracking-widest uppercase text-neutral-900">PRISM</h1>
        <nav className="flex items-center">
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <button 
                type="button" 
                className="flex items-center gap-2 font-medium text-sm py-2 px-5 rounded-full border border-neutral-300 bg-white cursor-pointer transition-colors hover:bg-neutral-50"
              >
                Log In
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

                {!isRegister && (
                  <div className="flex justify-start">
                    <button 
                      type="button"
                      className="text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors text-sm"
                      onClick={() => {
                        console.log('Forgot password clicked')
                      }}
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
                <Button 
                  className="w-full py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 font-medium"
                  onClick={() => setIsLoginOpen(false)}
                >
                  {isRegister ? 'Register' : 'Log In'}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors"
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
        <aside className="bg-white border-r border-neutral-300 flex flex-col w-80 rounded-xl">
          <div className="p-8 flex flex-col gap-4">
            <h3 className="text-base font-semibold m-0 pb-2 border-b border-neutral-300 text-neutral-900">Colours</h3>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="hue" className="text-sm font-medium text-neutral-900">Hue</label>
              <input 
                type="range" 
                id="hue" 
                min="0" 
                max="360" 
                className="h-2 rounded cursor-pointer appearance-none slider-hue"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="brightness" className="text-sm font-medium text-neutral-900">Brightness</label>
              <input 
                type="range" 
                id="brightness" 
                min="0" 
                max="200" 
                defaultValue="100" 
                className="h-2 rounded cursor-pointer appearance-none slider-brightness"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contrast" className="text-sm font-medium text-neutral-900">Contrast</label>
              <input 
                type="range" 
                id="contrast" 
                min="0" 
                max="200" 
                defaultValue="100" 
                className="h-2 rounded cursor-pointer appearance-none slider-contrast"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="saturation" className="text-sm font-medium text-neutral-900">Saturation</label>
              <input 
                type="range" 
                id="saturation" 
                min="0" 
                max="200" 
                defaultValue="100" 
                className="h-2 rounded cursor-pointer appearance-none slider-saturation"
              />
            </div>
          </div>
        </aside>

        <main className="flex flex-1 flex-col bg-white overflow-hidden" style={{ height: 'calc(100vh - 3rem)' }}>
          {!image && (
            <div className="flex flex-1 justify-center items-center">
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange} 
              />
              <div 
                className="w-4/5 max-w-lg h-80 bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer text-center transition-colors p-8 hover:bg-neutral-100"
                onClick={() => fileInputRef.current?.click()}
              >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-12 h-12 stroke-neutral-900 mb-4" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M21 12v7a2 2 0 0 1-2 2h-3m5-9c-6.442 0-10.105 1.985-12.055 4.243M21 12v-1.5M3 16v3a2 2 0 0 0 2 2v0h11M3 16V5a2 2 0 0 1 2-2h8M3 16c1.403-.234 3.637-.293 5.945.243M16 21c-1.704-2.768-4.427-4.148-7.055-4.757M8.5 7C8 7 7 7.3 7 8.5S8 10 8.5 10 10 9.7 10 8.5 9 7 8.5 7z"
                    />
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M19 8.5V1.5m0 0l-2.5 2.5m2.5-2.5l2.5 2.5"
                    />
                  </svg>
                <p className="text-base font-medium text-neutral-900 m-0">Click or tap to upload an image</p>
                <p className="text-sm text-neutral-600 mt-1">JPG, PNG, or GIF — max 5MB</p>
              </div>
            </div>
          )}

          {image && (
            <>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange} 
              />
              <div className="flex items-center pt-3 pb-3 px-4">
                <div className="flex-1">
                  <button 
                    className="flex items-center gap-2 py-2 px-3 border border-neutral-300 bg-white text-neutral-900 cursor-pointer rounded-full shadow-md hover:bg-neutral-50 transition-colors text-sm font-medium"
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload new image"
                  >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 12v7a2 2 0 0 1-2 2h-3m5-9c-6.442 0-10.105 1.985-12.055 4.243M21 12v-1.5M3 16v3a2 2 0 0 0 2 2v0h11M3 16V5a2 2 0 0 1 2-2h8M3 16c1.403-.234 3.637-.293 5.945.243M16 21c-1.704-2.768-4.427-4.148-7.055-4.757M8.5 7C8 7 7 7.3 7 8.5S8 10 8.5 10 10 9.7 10 8.5 9 7 8.5 7z"
                    />
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 8.5V1.5m0 0l-2.5 2.5m2.5-2.5l2.5 2.5"
                    />
                  </svg>
           
                  </button>
                </div>
                <div className="flex-1 flex justify-center">
                  <button 
                    className="flex items-center gap-2 py-2 px-3 text-sm border border-neutral-300 bg-white text-neutral-900 cursor-pointer rounded-full shadow-md font-medium hover:bg-neutral-50 transition-colors"
                    onMouseDown={() => setShowOriginal(true)}
                    onMouseUp={() => setShowOriginal(false)}
                    onMouseLeave={() => setShowOriginal(false)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    Hold to Show Original
                  </button>
                </div>
                <div className="flex-1"></div>
              </div>
              <div className="flex-1 flex justify-center items-center px-4 pb-12" style={{ minHeight: 0 }}>
                <img 
                  src={image.url} 
                  alt="uploaded" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default App