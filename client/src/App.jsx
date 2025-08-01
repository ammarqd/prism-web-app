import React, { useState } from 'react'

function App() {
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage({
        file,
        url: URL.createObjectURL(file),
      })
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Image Filters App</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </header>
      
      {image && (
        <div className="preview">
          <img src={image.url} alt="preview" width="600px" />
        </div>
      )}
    </div>
  )

}

export default App
