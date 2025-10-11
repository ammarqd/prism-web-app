import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})