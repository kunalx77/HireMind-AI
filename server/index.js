import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"
dotenv.config()


const app = express()

app.use(cors({
    origin: "https://hiremind-ai-client.onrender.com",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/interview", interviewRouter)
const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
    connectDB()
})
