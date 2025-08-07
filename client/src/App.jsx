import { useState, useRef, useEffect } from 'react'
import fx from 'glfx'

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Sign In</h2>
        <input className="modal-input" type="email" placeholder="Email" />
        <input className="modal-input" type="password" placeholder="Password" />
        <div className="modal-actions">
          <button className="modal-button" onClick={onClose}>Cancel</button>
          <button className="modal-button primary">Login</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [image, setImage] = useState(null)
  const [showOriginal, setShowOriginal] = useState(false)
  const [filters, setFilters] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    red: 0,
    green: 0,
    blue: 0
  })
  const [canvas, setCanvas] = useState(null)
  const [texture, setTexture] = useState(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

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
      setFilters({
        brightness: 0,
        contrast: 0,
        saturation: 0,
        red: 0,
        green: 0,
        blue: 0
      })
      setImage({ url: imageUrl, element: img })
      createFilteredCanvas(img, 0, 0, 0, 0, 0, 0)
    }).catch((err) => {
      console.error('Image decode failed:', err)
    })
  }

  const applyFiltersToCanvas = (canvasInstance, textureInstance, currentFilters) => {
    const { brightness, contrast, saturation, red, green, blue } = currentFilters

    // Curves helper to shift color channels
    const createCurve = (bias) => [
      [0, Math.min(1, Math.max(0, 0 + bias))],
      [1, Math.min(1, Math.max(0, 1 + bias))]
    ]

    canvasInstance.draw(textureInstance)
      .brightnessContrast(brightness, contrast)
      .hueSaturation(0, saturation)
      .curves(createCurve(red), createCurve(green), createCurve(blue))
      .update()
  }

  const createFilteredCanvas = (img, brightness, contrast, saturation, red = 0, green = 0, blue = 0) => {
    const newCanvas = fx.canvas()
    const newTexture = newCanvas.texture(img)
    newCanvas.width = img.width
    newCanvas.height = img.height

    applyFiltersToCanvas(newCanvas, newTexture, {
      brightness,
      contrast,
      saturation,
      red,
      green,
      blue
    })

    setCanvas(newCanvas)
    setTexture(newTexture)
  }

  const handleFilterChange = (filterName, value) => {
    const newFilters = {
      ...filters,
      [filterName]: parseFloat(value)
    }
    setFilters(newFilters)
    applyFiltersToCanvas(canvas, texture, newFilters)
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
        <h1 className="logo">PRISM</h1>
        <nav className="auth-links">
          <button 
            type="button" 
            className="auth-button"
            onClick={() => setIsLoginOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="auth-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
              />
            </svg>
            Sign In
          </button>
        </nav>
      </header>

      <div className="layout">
        <aside className="sidebar">

          <div className="control-panel rgb-panel">
            <h3 className="rgb-heading">Colour</h3>
            {['red', 'green', 'blue'].map((color) => (
              <div key={color} className="slider-group">
                <div className="slider-row">
                  <label className="rgb-label">{color.charAt(0).toUpperCase()}</label>
                  <input
                    className={`range-slider ${color}`}
                    type="range"
                    min="0"
                    max="255"
                    step="1"
                    value={Math.round((filters[color] + 0.5) * 255)}
                    onChange={(e) => handleFilterChange(color, (parseInt(e.target.value) / 255) - 0.5)}
                  />
                  <div className="rgb-value">
                    {Math.round((filters[color] + 0.5) * 255)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="control-panel rgb-panel">
            <h3 className="rgb-heading">Adjustments</h3>
            {[
              { name: 'brightness', min: -0.5, max: 0.5, step: 0.1, label: 'B' },
              { name: 'contrast', min: -1, max: 1, step: 0.1, label: 'C' },
              { name: 'saturation', min: -1, max: 1, step: 0.1, label: 'S' }
            ].map((filter) => (
              <div key={filter.name} className="slider-group">
                <div className="slider-row">
                  <label className="rgb-label">{filter.label}</label>
                  <input
                    className={`range-slider ${filter.name}`}
                    type="range"
                    min={filter.min}
                    max={filter.max}
                    step={filter.step}
                    value={filters[filter.name]}
                    onChange={(e) => handleFilterChange(filter.name, e.target.value)}
                    disabled={showOriginal}
                  />
                  <div className="rgb-value">
                    {filters[filter.name].toFixed(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="canvas-area">

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          {!image && (
            <div className="upload-placeholder" onClick={() => fileInputRef.current?.click()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="upload-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                width="48"
                height="48"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0-6l-3 3m3-3l3 3m0-6V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6"
                />
              </svg>
              <p className="upload-text">Click or tap to upload an image</p>
              <p className="upload-subtext">JPG, PNG, or GIF — max 5MB</p>
            </div>
          )}

          {image && (
            <>
              <button
                className="overlay-toggle fade-slide-down"
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

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}

export default App