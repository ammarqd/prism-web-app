import { useState, type JSX } from 'react'
import { Header } from './components/Header'
import { SidebarControls } from './components/SidebarControls'
import { ImageUpload } from './components/ImageUploader'
import { ImageToolbar } from './components/ImageToolbar'
import { ImageCanvas } from './components/ImageCanvas'
import { useImageUpload } from './hooks/useImageUpload'

interface ImageData {
  file: File
  url: string
}

function App(): JSX.Element {
  const [image, setImage] = useState<ImageData | null>(null)
  
  const { fileInputRef, handleFileChange, triggerFileSelect } = useImageUpload(setImage)

  const handleUndo = (): void => {
    console.log('Undo clicked')
  }

  const handleRedo = (): void => {
    console.log('Redo clicked')
  }

  return (
    <div className="h-screen flex flex-col bg-white text-neutral-900 font-sans">
      <Header />
      
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
     
      <div className="flex flex-1 min-h-0">
        <SidebarControls />
       
        <main
          className={`flex flex-1 flex-col transition-colors duration-300 ${
            image ? 'bg-gradient-to-br from-neutral-100 to-neutral-300' : 'bg-white'
          }`}
        >
          {!image ? (
            <ImageUpload onUploadClick={triggerFileSelect} />
          ) : (
            <>
              <ImageToolbar
                onNewImage={triggerFileSelect}
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