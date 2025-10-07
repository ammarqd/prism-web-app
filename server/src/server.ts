import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import authRoutes from './routes/auth'

const app = express()
app.use(express.json())
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})