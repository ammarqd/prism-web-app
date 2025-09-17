import { Router, Request, Response } from 'express'

const router = Router()

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    res.json({
      message: 'Registration endpoint working',
      receivedEmail: email,
      receivedPassword: password ? '***hidden***' : undefined
    })
    
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

export default router