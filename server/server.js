import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

import userRouter from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const port = process.env.PORT || 4000

// Connect services
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(
  cors({
    origin: [
      "https://cricket-shop-client.vercel.app",
      "https://cricket-shop-admin.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "token", "Authorization"],
    credentials: true
  })
);






// Routes
app.use('/api/user', userRouter)
app.use('/api/product', productRoute)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API WORKING')
})

app.listen(port, () => {
  console.log(`SERVER IS STARTED ON PORT ${port}`)
})

export default app
