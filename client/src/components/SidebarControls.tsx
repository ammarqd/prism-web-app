import { useState } from "react"

export function SidebarControls() {
  const [hue, setHue] = useState(0)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)

  return (
    <aside className="bg-white border-r border-neutral-300 flex flex-col w-80 rounded-xl">
      <div className="p-8 flex flex-col gap-3">
        <h3 className="text-base font-semibold m-0 pb-2 border-b border-neutral-300 text-neutral-900">
          Colours
        </h3>

        {/* Hue */}
        <div className="flex flex-col">
          <label htmlFor="hue" className="text-sm font-medium text-neutral-900">
            Hue
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              id="hue"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="h-2 rounded cursor-pointer appearance-none flex-1 slider-hue"
            />
            <input
              type="number"
              min={0}
              max={360}
              value={hue}
              onChange={(e) => {
                let val = Number(e.target.value)
                if (val > 360) val = 360
                if (val < 0) val = 0
                setHue(val)
              }}
              className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
            />
          </div>
        </div>

        {/* Brightness */}
        <div className="flex flex-col">
          <label htmlFor="brightness" className="text-sm font-medium text-neutral-900">
            Brightness
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              id="brightness"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="h-2 rounded cursor-pointer appearance-none flex-1 slider-brightness"
            />
            <input
              type="number"
              min={0}
              max={200}
              value={brightness}
              onChange={(e) => {
                let val = Number(e.target.value)
                if (val > 200) val = 200
                if (val < 0) val = 0
                setBrightness(val)
              }}
              className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
            />
          </div>
        </div>

        {/* Contrast */}
        <div className="flex flex-col">
          <label htmlFor="contrast" className="text-sm font-medium text-neutral-900">
            Contrast
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              id="contrast"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="h-2 rounded cursor-pointer appearance-none flex-1 slider-contrast"
            />
            <input
              type="number"
              min={0}
              max={200}
              value={contrast}
              onChange={(e) => {
                let val = Number(e.target.value)
                if (val > 200) val = 200
                if (val < 0) val = 0
                setContrast(val)
              }}
              className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
            />
          </div>
        </div>

        {/* Saturation */}
        <div className="flex flex-col">
          <label htmlFor="saturation" className="text-sm font-medium text-neutral-900">
            Saturation
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              id="saturation"
              min="0"
              max="200"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="h-2 rounded cursor-pointer appearance-none flex-1 slider-saturation"
            />
            <input
              type="number"
              min={0}
              max={200}
              value={saturation}
              onChange={(e) => {
                let val = Number(e.target.value)
                if (val > 200) val = 200
                if (val < 0) val = 0
                setSaturation(val)
              }}
              className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}
