import { useState, useRef } from 'react'

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Sign In</h2>

        <div className="input-container">
          
          <div className="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="input-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                  1.79-4 4 1.79 4 4 4zM6 20v-1a4 4 0 014-4h4a4 
                  4 0 014 4v1"
              />
            </svg>
            <input className="modal-input" type="text" placeholder="Username" />
          </div>

          <div className="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="input-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="17" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              <circle cx="12" cy="16" r="1"/>
              <path d="M12 17v2"/>
            </svg>
            <input className="modal-input" type="password" placeholder="Password" />
          </div>

        </div>

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
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImage({ file, url })
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <h1 className="logo">PRISM</h1>
        <nav className="nav-links">
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
        <div className="control-panel">
          <h3 className="control-title">Colours</h3>

          <div className="slider-group">
            <label htmlFor="hue">Hue</label>
            <input type="range" id="hue" min="0" max="360" className="slider slider-hue" />
          </div>

          <div className="slider-group">
            <label htmlFor="brightness">Brightness</label>
            <input type="range" id="brightness" min="0" max="200" defaultValue="100" className="slider slider-brightness" />
          </div>

          <div className="slider-group">
            <label htmlFor="contrast">Contrast</label>
            <input type="range" id="contrast" min="0" max="200" defaultValue="100" className="slider slider-contrast" />
          </div>

          <div className="slider-group">
            <label htmlFor="saturation">Saturation</label>
            <input type="range" id="saturation" min="0" max="200" defaultValue="100" className="slider slider-saturation" />
          </div>
        </div>
      </aside>

        <main className="canvas-area">
          {!image && (
            <>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <div
                className="upload-placeholder"
                onClick={() => fileInputRef.current?.click()}
              >
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
            </>
          )}

          {image && (
            <>
              <div className="image-nav">
                <button
                  className="overlay-toggle"
                  onMouseDown={() => setShowOriginal(true)}
                  onMouseUp={() => setShowOriginal(false)}
                  onMouseLeave={() => setShowOriginal(false)}
                >
                  Hold to Show Original
                </button>
              </div>

              <img
                src={image.url}
                alt="original"
                className={"image-display"}
              />
            </>
          )}

        </main>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}

export default App
