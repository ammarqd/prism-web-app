import { useState, useRef } from 'react'

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
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [showOriginal, setShowOriginal] = useState(false)
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
        <aside className="sidebar"></aside>

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
                className={`image-display original-image ${showOriginal ? 'visible' : 'hidden'}`}
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
