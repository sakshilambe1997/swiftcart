import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import {getHealth} from "./controllers/health.js"

const app= express();
 app.use(express.json());
 app.use(cors());

 const connectDB =async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if(conn){
        console.log("MongoDB connected successfully!!")
    }
 }

 connectDB();


 app.get("/health",  getHealth)

 const PORT =process.env.PORT || 5000;

 app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
 });