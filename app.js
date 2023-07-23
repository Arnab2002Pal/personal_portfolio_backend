import express from "express"
import cookieParser from "cookie-parser"
import path  from "path"
import cors from "cors"
export const app = express()

app.use(cors({
    origin: "https://my-portfolio-xb6b.onrender.com",
    credentials: true, // Set this to true if you need to pass cookies or other credentials
  }));

app.use(express.json({
    limit: "50mb"
}))
app.use(express.urlencoded({
    extended: true,
    limit:"50mb"
}))
app.use(cookieParser())
import { userRouter } from "./routes/User.js"


app.use("/api/v1", userRouter)
