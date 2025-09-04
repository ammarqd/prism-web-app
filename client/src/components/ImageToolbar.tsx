import { useState } from 'react'

interface ImageToolbarProps {
  onNewImage: () => void
  onUndo: () => void
  onRedo: () => void
}

export function ImageToolbar({ onNewImage, onUndo, onRedo }: ImageToolbarProps) {
  //@ts-ignore
  const [showOriginal, setShowOriginal] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-center pt-3 pb-3 px-4">
      <div className="flex items-center items-stretch divide-x border border-neutral-300 rounded-lg shadow-md bg-white overflow-hidden" >
        
        {/* New Image */}
        <button 
          className="flex items-center py-2.5 px-4 gap-2 text-neutral-800 cursor-pointer hover:bg-neutral-50 transition-colors text-xs font-bold"
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
              stroke="#333333" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 12v7a2 2 0 0 1-2 2h-3m5-9c-6.442 0-10.105 1.985-12.055 4.243M21 12v-1.5M3 16v3a2 2 0 0 0 2 2v0h11M3 16V5a2 2 0 0 1 2-2h8M3 16c1.403-.234 3.637-.293 5.945.243M16 21c-1.704-2.768-4.427-4.148-7.055-4.757M8.5 7C8 7 7 7.3 7 8.5S8 10 8.5 10 10 9.7 10 8.5 9 7 8.5 7z"
            />
            <path 
              stroke="#333333" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 8.5V1.5m0 0l-2.5 2.5m2.5-2.5l2.5 2.5"
            />
          </svg>
          New Image
        </button>
        
        {/* Undo */}
        <button 
          className="flex items-center py-2.5 px-4 text-neutral-800 cursor-pointer hover:bg-neutral-50 transition-colors text-xs font-bold"
          onClick={onUndo}
          title="Undo"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_202_92)">
              <path d="M9.95311 10.5156H0.5625C0.251859 10.5156 0 10.2637 0 9.95311V0.5625C0 0.251859 0.251859 0 0.5625 0H2.8125C3.12314 0 3.375 0.251859 3.375 0.5625V4.224C5.52061 1.8412 8.63719 0.350156 12.102 0.375328C18.5194 0.421922 23.6542 5.60766 23.6406 12.0253C23.6269 18.434 18.4275 23.625 12.0156 23.625C9.01144 23.625 6.27361 22.4853 4.21045 20.6149C3.97144 20.3983 3.96042 20.0265 4.18856 19.7984L5.78077 18.2062C5.99048 17.9964 6.32742 17.985 6.54956 18.1815C8.00438 19.4689 9.91781 20.25 12.0156 20.25C16.575 20.25 20.2656 16.5602 20.2656 12C20.2656 7.44061 16.5758 3.75 12.0156 3.75C9.27361 3.75 6.84623 5.08481 5.34652 7.14061H9.95311C10.2638 7.14061 10.5156 7.39247 10.5156 7.70311V9.95311C10.5156 10.2637 10.2638 10.5156 9.95311 10.5156V10.5156Z" fill="#333333"/>
            </g>
            <defs>
              <clipPath id="clip0_202_92">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        
        {/* Redo */}
        <button 
          className="flex items-center py-2.5 px-4 text-neutral-800 cursor-pointer hover:bg-neutral-50 transition-colors text-xs font-bold" 
          onClick={onRedo}
          title="Redo"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_202_90)">
              <path d="M23.453 3.58398e-07H21.2306C21.1545 -8.56237e-05 21.0791 0.0153 21.009 0.0452243C20.939 0.0751486 20.8757 0.118988 20.8231 0.174084C20.7705 0.229181 20.7297 0.294386 20.703 0.365746C20.6764 0.437105 20.6645 0.513133 20.6681 0.589219L20.8556 4.46859C19.7655 3.18398 18.4085 2.1523 16.8792 1.44535C15.3498 0.7384 13.6848 0.373145 12 0.375C5.59407 0.375 0.370316 5.60297 0.375003 12.0089C0.379691 18.4252 5.58282 23.625 12 23.625C14.8786 23.6291 17.6556 22.5611 19.7897 20.6292C19.8467 20.5782 19.8927 20.5161 19.9249 20.4467C19.9571 20.3773 19.9748 20.302 19.9769 20.2255C19.979 20.1491 19.9654 20.073 19.9371 20.0019C19.9088 19.9308 19.8663 19.8663 19.8122 19.8122L18.2184 18.2184C18.1176 18.1176 17.9822 18.0588 17.8396 18.0541C17.6971 18.0493 17.558 18.0988 17.4506 18.1927C16.1913 19.3006 14.6242 19.9984 12.9582 20.193C11.2922 20.3876 9.60644 20.0697 8.12569 19.2818C6.64495 18.4939 5.43954 17.2733 4.67017 15.7828C3.90081 14.2924 3.60403 12.6028 3.81941 10.9393C4.03479 9.27589 4.75209 7.71761 5.87569 6.47223C6.99929 5.22685 8.4758 4.35355 10.1084 3.96873C11.741 3.58392 13.4521 3.70588 15.0136 4.31836C16.5751 4.93083 17.9128 6.00473 18.8484 7.39688L14.0892 7.16859C14.0131 7.16498 13.9371 7.17685 13.8657 7.20349C13.7944 7.23014 13.7292 7.271 13.6741 7.32359C13.619 7.37619 13.5752 7.43943 13.5452 7.50948C13.5153 7.57953 13.4999 7.65492 13.5 7.73109V9.95344C13.5 10.1026 13.5593 10.2457 13.6648 10.3512C13.7702 10.4567 13.9133 10.5159 14.0625 10.5159H23.453C23.6022 10.5159 23.7452 10.4567 23.8507 10.3512C23.9562 10.2457 24.0155 10.1026 24.0155 9.95344V0.5625C24.0155 0.413316 23.9562 0.270242 23.8507 0.164753C23.7452 0.0592636 23.6022 3.58398e-07 23.453 3.58398e-07V3.58398e-07Z" fill="#333333"/>
            </g>
            <defs>
              <clipPath id="clip0_202_90">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        
        {/* Show Original */}
        <button 
          className="flex items-center py-2.5 px-4 gap-2 text-neutral-800 cursor-pointer hover:bg-neutral-50 transition-colors text-xs font-bold"
          onMouseUp={() => setShowOriginal(false)}
          onMouseLeave={() => setShowOriginal(false)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="#333333"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          Hold to Show Original
        </button>

        {/* Save */}
        <button
          className="flex items-center py-2 px-4 gap-2 text-neutral-800 cursor-pointer hover:bg-neutral-50 transition-colors text-xs font-bold"
          onClick={() => {}}
          title="Save"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4"
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M20.71 9.29L14.71 3.29C14.6178 3.20005 14.5092 3.12874 14.39 3.08C14.266 3.02962 14.1338 3.0025 14 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18V10C21.0008 9.86839 20.9755 9.73793 20.9258 9.61609C20.876 9.49426 20.8027 9.38344 20.71 9.29ZM9 5H13V7H9V5ZM15 19H9V16C9 15.7348 9.10536 15.4804 9.29289 15.2929C9.48043 15.1054 9.73478 15 10 15H14C14.2652 15 14.5196 15.1054 14.7071 15.2929C14.8946 15.4804 15 15.7348 15 16V19ZM19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H17V16C17 15.2044 16.6839 14.4413 16.1213 13.8787C15.5587 13.3161 14.7956 13 14 13H10C9.20435 13 8.44129 13.3161 7.87868 13.8787C7.31607 14.4413 7 15.2044 7 16V19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H7V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8V6.41L19 10.41V18Z" 
              fill="#333333"
            />
          </svg>
          Save
        </button>

      </div>
    </div>
  )
}
