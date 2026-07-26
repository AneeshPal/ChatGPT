import express from "express";
import  cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";


const app=express();
const PORT=8080;

app.use(express.json());
app.use(cors());

//routes
app.use("/api",chatRoutes);

app.listen(PORT,()=>{
    console.log("server listeming on port 8080");
    connectDB();
})

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with Database ATLAS MONGODB");
    } catch(err){
        console.log("Failed to connect with DB",err);
    }
}

