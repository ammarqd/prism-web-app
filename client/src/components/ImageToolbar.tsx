import { useState } from 'react'

interface ImageToolbarProps {
  onNewImage: () => void
  onUndo: () => void
  onRedo: () => void
}

export function ImageToolbar({ onNewImage, onUndo, onRedo }: ImageToolbarProps) {
  const [showOriginal, setShowOriginal] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-center pt-3 pb-3 px-4">
      <div className="flex items-center gap-3">
        <button 
          className="flex items-center gap-2 py-2 px-3 border border-neutral-300 bg-white text-neutral-900 cursor-pointer rounded-md shadow-md hover:bg-neutral-50 transition-colors text-sm font-medium"
          onClick={onNewImage}
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
          New Image
        </button>
        
        <button 
          className="flex items-center justify-center w-9 h-9 border border-neutral-300 bg-white text-neutral-900 cursor-pointer rounded-md shadow-md hover:bg-neutral-50 transition-colors"
          onClick={onUndo}
          title="Undo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-5-5m0 0l5-5m-5 5h12a4 4 0 014 4v1"/>
          </svg>
        </button>
        
        <button 
          className="flex items-center justify-center w-9 h-9 border border-neutral-300 bg-white text-neutral-900 cursor-pointer rounded-md shadow-md hover:bg-neutral-50 transition-colors"
          onClick={onRedo}
          title="Redo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 14l5-5m0 0l-5-5m5 5H8a4 4 0 00-4 4v1"/>
          </svg>
        </button>
        
        <button 
          className="flex items-center gap-2 py-2 px-3 text-sm border border-neutral-300 bg-white text-neutral-900 cursor-pointer rounded-md shadow-md font-medium hover:bg-neutral-50 transition-colors"
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
    </div>
  )
}