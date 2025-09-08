interface ImageData {
  file: File
  url: string
}

interface ImageCanvasProps {
  image: ImageData
}

export function ImageCanvas({ image }: ImageCanvasProps) {
  return (
    <div className="flex flex-1 justify-center items-center px-4 pb-12 min-h-0">
      <img 
        src={image.url} 
        alt="uploaded" 
        className="max-w-full max-h-full" 
      />
    </div>
  )
}