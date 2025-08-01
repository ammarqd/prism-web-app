const express = require('express')
const app = express()

app.use(express.json())

app.post('/api/filter', async (req, res) => {
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
