import { type ChangeEvent } from 'react'

interface ImageData {
  file: File
  url: string
}

interface ImageUploadProps {
  onImageChange: (imageData: ImageData) => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
}

export function ImageUpload({ onImageChange, fileInputRef }: ImageUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      onImageChange({ file, url })
    }
  }

  return (
    <div className="flex flex-1 justify-center items-center">
      <input 
        type="file" 
        accept=".jpg,.jpeg,.png,.webp" 
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
        <p className="text-sm text-neutral-600 mt-1">JPG, PNG, or WebP — max 5MB</p>
      </div>
    </div>
  )
}