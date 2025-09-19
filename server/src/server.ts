import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})