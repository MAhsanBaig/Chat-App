import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from "./Route/auth.routes.js"
import messageRoutes from "./Route/message.routes.js"
import userRoutes from "./Route/user.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js"
import {app, server} from "./sockets/socket.js"

const PORT=process.env.PORT || 5000

dotenv.config()
app.use(cors());
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)



app.get("/",(req,res)=>{
    res.send("hello")
})

 
server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`server running on port ${PORT}` )
})