import { useRef, type ChangeEvent } from 'react'

interface ImageData {
  file: File
  url: string
}

interface UseImageUploadReturn {
  fileInputRef: React.RefObject<HTMLInputElement | null>
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  triggerFileSelect: () => void
}

export function useImageUpload(onImageChange: (imageData: ImageData) => void): UseImageUploadReturn {
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
  const SUPPORTED_TYPES = ["image/jpeg", "image/png", "image/webp"]

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!SUPPORTED_TYPES.includes(file.type)) {
      alert("Unsupported file type. Please upload JPG, PNG, or WebP.")
      e.target.value = ""
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File too large! Please upload an image under 5 MB.")
      e.target.value = ""
      return
    }

    const url = URL.createObjectURL(file)
    onImageChange({ file, url })
  }

  const triggerFileSelect = () => {
    fileInputRef.current?.click()
  }

  return {
    fileInputRef,
    handleFileChange,
    triggerFileSelect
  }
}