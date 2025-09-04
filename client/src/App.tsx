import { useState, useRef, type ChangeEvent, type JSX } from 'react'
import { Header } from './components/Header'
import { SidebarControls } from './components/SidebarControls'
import { ImageUpload } from './components/ImageUploader'
import { ImageToolbar } from './components/ImageToolbar'
import { ImageCanvas } from './components/ImageCanvas'

interface ImageData {
  file: File
  url: string
}

function App(): JSX.Element {
  const [image, setImage] = useState<ImageData | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (imageData: ImageData): void => {
    setImage(imageData)
  }

  const handleNewImage = (): void => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImage({ file, url })
    }
  }

  const handleUndo = (): void => {
    console.log('Undo clicked')
  }

  const handleRedo = (): void => {
    console.log('Redo clicked')
  }

  return (
    <div className="h-screen flex flex-col bg-white text-neutral-900 overflow-hidden font-sans">
      <Header />
      
      <div className="flex flex-1">
        <SidebarControls />
        
        <main className="flex flex-1 flex-col bg-linear-to-br from-neutral-100 to-neutral-300 overflow-hidden" style={{ height: 'calc(100vh - 3rem)' }}>
          {!image ? (
            <ImageUpload onImageChange={handleImageChange} fileInputRef={fileInputRef} />
          ) : (
            <>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange} 
              />
              <ImageToolbar 
                onNewImage={handleNewImage}
                onUndo={handleUndo}
                onRedo={handleRedo}
              />
              <ImageCanvas image={image} />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default App