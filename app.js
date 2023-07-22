import express from "express"
import cookieParser from "cookie-parser"
import path  from "path"
export const app = express()



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

// Use path.join() to resolve the correct path for frontend build files
const frontendBuildPath = path.join(__dirname, "../frontend/build");

// Serve static files from the frontend's build directory
app.use(express.static(frontendBuildPath));

// Send the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});