export function SidebarControls() {
  return (
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
  )
}