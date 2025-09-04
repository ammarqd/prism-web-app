import { useState } from "react"

export function SidebarControls() {
  const [hue, setHue] = useState(0)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)

  return (
    <aside className="bg-white border-r border-neutral-300 flex flex-col w-80 shadow-lg z-99">
      <div className="py-8 px-6 flex flex-col gap-3">

        <div className="flex items-center gap-3 pb-2 border-b border-neutral-300">
            
            <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)">
            <path d="M19.9999 8.18V3C19.9999 2.73478 19.8946 2.48043 19.707 2.29289C19.5195 2.10536 19.2651 2 18.9999 2C18.7347 2 18.4803 2.10536 18.2928 2.29289C18.1053 2.48043 17.9999 2.73478 17.9999 3V8.18C17.4208 8.3902 16.9204 8.77363 16.5668 9.27816C16.2131 9.7827 16.0234 10.3839 16.0234 11C16.0234 11.6161 16.2131 12.2173 16.5668 12.7218C16.9204 13.2264 17.4208 13.6098 17.9999 13.82V21C17.9999 21.2652 18.1053 21.5196 18.2928 21.7071C18.4803 21.8946 18.7347 22 18.9999 22C19.2651 22 19.5195 21.8946 19.707 21.7071C19.8946 21.5196 19.9999 21.2652 19.9999 21V13.82C20.5791 13.6098 21.0795 13.2264 21.4331 12.7218C21.7867 12.2173 21.9764 11.6161 21.9764 11C21.9764 10.3839 21.7867 9.7827 21.4331 9.27816C21.0795 8.77363 20.5791 8.3902 19.9999 8.18V8.18ZM18.9999 12C18.8021 12 18.6088 11.9414 18.4443 11.8315C18.2799 11.7216 18.1517 11.5654 18.076 11.3827C18.0003 11.2 17.9805 10.9989 18.0191 10.8049C18.0577 10.6109 18.153 10.4327 18.2928 10.2929C18.4327 10.153 18.6108 10.0578 18.8048 10.0192C18.9988 9.98063 19.1999 10.0004 19.3826 10.0761C19.5653 10.1518 19.7215 10.28 19.8314 10.4444C19.9413 10.6089 19.9999 10.8022 19.9999 11C19.9999 11.2652 19.8946 11.5196 19.707 11.7071C19.5195 11.8946 19.2651 12 18.9999 12ZM12.9999 14.18V3C12.9999 2.73478 12.8946 2.48043 12.707 2.29289C12.5195 2.10536 12.2651 2 11.9999 2C11.7347 2 11.4803 2.10536 11.2928 2.29289C11.1053 2.48043 10.9999 2.73478 10.9999 3V14.18C10.4208 14.3902 9.92037 14.7736 9.56676 15.2782C9.21314 15.7827 9.02344 16.3839 9.02344 17C9.02344 17.6161 9.21314 18.2173 9.56676 18.7218C9.92037 19.2264 10.4208 19.6098 10.9999 19.82V21C10.9999 21.2652 11.1053 21.5196 11.2928 21.7071C11.4803 21.8946 11.7347 22 11.9999 22C12.2651 22 12.5195 21.8946 12.707 21.7071C12.8946 21.5196 12.9999 21.2652 12.9999 21V19.82C13.5791 19.6098 14.0795 19.2264 14.4331 18.7218C14.7867 18.2173 14.9764 17.6161 14.9764 17C14.9764 16.3839 14.7867 15.7827 14.4331 15.2782C14.0795 14.7736 13.5791 14.3902 12.9999 14.18ZM11.9999 18C11.8021 18 11.6088 17.9414 11.4443 17.8315C11.2799 17.7216 11.1517 17.5654 11.076 17.3827C11.0003 17.2 10.9805 16.9989 11.0191 16.8049C11.0577 16.6109 11.153 16.4327 11.2928 16.2929C11.4327 16.153 11.6108 16.0578 11.8048 16.0192C11.9988 15.9806 12.1999 16.0004 12.3826 16.0761C12.5653 16.1518 12.7215 16.28 12.8314 16.4444C12.9413 16.6089 12.9999 16.8022 12.9999 17C12.9999 17.2652 12.8946 17.5196 12.707 17.7071C12.5195 17.8946 12.2651 18 11.9999 18ZM5.99991 6.18V3C5.99991 2.73478 5.89456 2.48043 5.70702 2.29289C5.51948 2.10536 5.26513 2 4.99991 2C4.7347 2 4.48034 2.10536 4.29281 2.29289C4.10527 2.48043 3.99991 2.73478 3.99991 3V6.18C3.42076 6.3902 2.92037 6.77363 2.56676 7.27817C2.21314 7.7827 2.02344 8.38388 2.02344 9C2.02344 9.61612 2.21314 10.2173 2.56676 10.7218C2.92037 11.2264 3.42076 11.6098 3.99991 11.82V21C3.99991 21.2652 4.10527 21.5196 4.29281 21.7071C4.48034 21.8946 4.7347 22 4.99991 22C5.26513 22 5.51948 21.8946 5.70702 21.7071C5.89456 21.5196 5.99991 21.2652 5.99991 21V11.82C6.57907 11.6098 7.07945 11.2264 7.43307 10.7218C7.78669 10.2173 7.97639 9.61612 7.97639 9C7.97639 8.38388 7.78669 7.7827 7.43307 7.27817C7.07945 6.77363 6.57907 6.3902 5.99991 6.18V6.18ZM4.99991 10C4.80213 10 4.60879 9.94135 4.44434 9.83147C4.27989 9.72159 4.15172 9.56541 4.07603 9.38268C4.00035 9.19996 3.98054 8.99889 4.01913 8.80491C4.05771 8.61093 4.15296 8.43275 4.29281 8.29289C4.43266 8.15304 4.61084 8.0578 4.80482 8.01921C4.9988 7.98063 5.19987 8.00043 5.3826 8.07612C5.56532 8.15181 5.7215 8.27998 5.83138 8.44443C5.94127 8.60888 5.99991 8.80222 5.99991 9C5.99991 9.26522 5.89456 9.51957 5.70702 9.70711C5.51948 9.89464 5.26513 10 4.99991 10Z" fill="black"/>
          </svg>

          <h2 className="text-base font-semibold text-neutral-900">Filters</h2>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <svg
            className="h-4 w-4 text-neutral-900 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C17.5 2 22 6 22 11C22 12.5913 21.3679 14.1174 20.2426 15.2426C19.1174 16.3679 17.5913 17 16 17H14.2C13.9 17 13.7 17.2 13.7 17.5C13.7 17.6 13.8 17.7 13.8 17.8C14.2 18.3 14.4 18.9 14.4 19.5C14.5 20.9 13.4 22 12 22ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C12.3 20 12.5 19.8 12.5 19.5C12.5 19.3 12.4 19.2 12.4 19.1C12 18.6 11.8 18.1 11.8 17.5C11.8 16.1 12.9 15 14.3 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 7.1 16.4 4 12 4ZM6.5 10C7.3 10 8 10.7 8 11.5C8 12.3 7.3 13 6.5 13C5.7 13 5 12.3 5 11.5C5 10.7 5.7 10 6.5 10ZM9.5 6C10.3 6 11 6.7 11 7.5C11 8.3 10.3 9 9.5 9C8.7 9 8 8.3 8 7.5C8 6.7 8.7 6 9.5 6ZM14.5 6C15.3 6 16 6.7 16 7.5C16 8.3 15.3 9 14.5 9C13.7 9 13 8.3 13 7.5C13 6.7 13.7 6 14.5 6ZM17.5 10C18.3 10 19 10.7 19 11.5C19 12.3 18.3 13 17.5 13C16.7 13 16 12.3 16 11.5C16 10.7 16.7 10 17.5 10Z"
              fill="currentColor"
            />
          </svg>

          <h3 id="colours-heading" className="text-sm font-semibold text-neutral-900">Colours</h3>
        </div>

        <div className="flex flex-col" aria-labelledby="colours-heading">
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
                  if (Number.isNaN(val)) val = 0
                  if (val > 360) val = 360
                  if (val < 0) val = 0
                  setHue(val)
                }}
                className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
              />
            </div>
          </div>

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
                  if (Number.isNaN(val)) val = 0
                  if (val > 200) val = 200
                  if (val < 0) val = 0
                  setBrightness(val)
                }}
                className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
              />
            </div>
          </div>

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
                  if (Number.isNaN(val)) val = 0
                  if (val > 200) val = 200
                  if (val < 0) val = 0
                  setContrast(val)
                }}
                className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
              />
            </div>
          </div>

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
                  if (Number.isNaN(val)) val = 0
                  if (val > 200) val = 200
                  if (val < 0) val = 0
                  setSaturation(val)
                }}
                className="w-12 text-center text-xs font-semibold text-neutral-900 bg-neutral-100 border border-neutral-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
