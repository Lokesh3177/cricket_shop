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
      "http://localhost:5173",
      "https://cricket-shop-client.vercel.app"
    ],
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
