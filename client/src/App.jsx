import { useState, useRef, useEffect } from 'react'
import fx from 'glfx'

function App() {
  const [image, setImage] = useState(null)
  const [showOriginal, setShowOriginal] = useState(false)
  const [filters, setFilters] = useState({ 
    brightness: 0, 
    contrast: 0, 
    saturation: 0 
  })
  const [canvas, setCanvas] = useState(null)
  const [texture, setTexture] = useState(null)
  const canvasRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (image?.url) {
      URL.revokeObjectURL(image.url)
    }

    const imageUrl = URL.createObjectURL(file)
    const img = new Image()
    img.src = imageUrl

    img.decode().then(() => {
      setFilters({ brightness: 0, contrast: 0, saturation: 0 })
      setImage({ url: imageUrl, element: img })
      createFilteredCanvas(img, 0, 0, 0)
    }).catch((err) => {
      console.error('Image decode failed:', err)
    })
  } 

  const createFilteredCanvas = (img, brightnessValue, contrastValue, saturationValue) => {
    const newCanvas = fx.canvas()
    const newTexture = newCanvas.texture(img)
    newCanvas.width = img.width
    newCanvas.height = img.height

    newCanvas.draw(newTexture)
      .brightnessContrast(brightnessValue, contrastValue)
      .hueSaturation(0, saturationValue)
      .update()

    setCanvas(newCanvas)
    setTexture(newTexture)
  }

  const updateCanvasFilters = (newFilters) => {
    canvas.draw(texture)
      .brightnessContrast(newFilters.brightness, newFilters.contrast)
      .hueSaturation(0, newFilters.saturation)
      .update()
  }

  const handleFilterChange = (filterName, value) => {
    const newFilters = {
      ...filters,
      [filterName]: parseFloat(value)
    }
    setFilters(newFilters)
    updateCanvasFilters(newFilters)
  }

  useEffect(() => {
    if (canvas && canvasRef.current) {
      canvasRef.current.innerHTML = ''
      canvasRef.current.appendChild(canvas)
      canvas.className = 'image-display canvas-wrapper'
    }
  }, [canvas, showOriginal])

  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">PRISM</div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <input 
            className="file-input" 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />

          <>
            <div className="control-panel">
              <label>Brightness</label>
              <input 
                className="range-slider"
                type="range" 
                min="-0.5" 
                max="0.5" 
                step="0.1" 
                value={filters.brightness}
                onChange={(e) => handleFilterChange('brightness', e.target.value)}
                disabled={showOriginal}
              />
            </div>

            <div className="control-panel">
              <label>Contrast</label>
              <input 
                className="range-slider"
                type="range" 
                min="-1" 
                max="1" 
                step="0.1" 
                value={filters.contrast}
                onChange={(e) => handleFilterChange('contrast', e.target.value)}
                disabled={showOriginal}
              />
            </div>

            <div className="control-panel">
              <label>Saturation</label>
              <input 
                className="range-slider"
                type="range" 
                min="-1" 
                max="1" 
                step="0.1" 
                value={filters.saturation}
                onChange={(e) => handleFilterChange('saturation', e.target.value)}
                disabled={showOriginal}
              />
            </div>
          </>
        </aside>

        <main className="canvas-area">
          {image && (
            <>
              <button 
                className="overlay-toggle"
                onMouseDown={() => setShowOriginal(true)}
                onMouseUp={() => setShowOriginal(false)}
                onMouseLeave={() => setShowOriginal(false)}
              >
                Hold to Show Original
              </button>

              <img 
                src={image.url} 
                alt="original" 
                className={`image-display original-image ${showOriginal ? 'visible' : 'hidden'}`} 
              />
              <div 
                ref={canvasRef} 
                className={`canvas-wrapper ${showOriginal ? 'hidden' : 'visible'}`}
              ></div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
