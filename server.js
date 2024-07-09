import express from 'express';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import tutorialRoutes from './routes/tutorialRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';

configDotenv();

 const app=express();

const PORT= process.env.PORT || 8000 ;
const DB= process.env.DB;

app.use(express.json());

mongoose.connect(DB)
.then(()=>console.log("DB connect"))
.catch((error)=>console.log("DB connection error",error));

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use('/api',tutorialRoutes);

app.use(errorHandler)

app.listen(PORT,()=>{
console.log(`Server running ${PORT}`);
})