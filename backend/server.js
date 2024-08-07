import express from "express"
import dotenv from "dotenv"

import authRoutes from "./Route/auth.routes.js"
import messageRoutes from "./Route/message.routes.js"
import userRoutes from "./Route/user.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser"


const app=express()
const PORT=process.env.PORT || 5000

dotenv.config()
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)



app.get("/",(req,res)=>{
    res.send("hello")
})

 
app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`server running on port ${PORT}` )
})