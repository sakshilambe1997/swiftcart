import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
import cors from "cors";

import {getHealth} from "./controllers/health.js"
import {postSignup ,postLogin} from "./controllers/user.js"
import { delProduct, getProducts, postProduct } from "./controllers/product.js";


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
 app.post("/signup",postSignup)
 app.post("/login", postLogin);

//  Products
 app.post("/product",postProduct);
 app.delete("/product/:id",delProduct);
 app.get("/product/:id",getProducts);

 const PORT = 5000;

 app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
 });