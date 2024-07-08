import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

import mongoose from 'mongoose';
 const app=express();

const PORT= process.env.PORT || 8000 ;
const DB= process.env.DB;

app.use(express.json());

mongoose.connect(DB)
.then(()=>console.log("DB connect"))
.catch((error)=>console.log("DB connection error",error));

app.listen(PORT,()=>{
console.log(`Server running ${PORT}`);
})