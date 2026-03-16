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

const corsOptions = {
    origin:function(origin,callback) {
      callback(null, true)
      
},
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "token", "Authorization"],
    credentials: true
}

// ✅ CORS first — before everything
app.use(cors(corsOptions))

// ✅ Handle preflight requests
app.options('*', cors(corsOptions))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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