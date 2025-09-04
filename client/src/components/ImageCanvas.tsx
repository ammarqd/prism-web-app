interface ImageData {
  file: File
  url: string
}

interface ImageCanvasProps {
  image: ImageData
}

export function ImageCanvas({ image }: ImageCanvasProps) {
  return (
    <div className="flex-1 flex justify-center items-center px-4 pb-12" style={{ minHeight: 0 }}>
      <img 
        src={image.url} 
        alt="uploaded" 
        className="max-w-full max-h-full object-contain" 
      />
    </div>
  )
}