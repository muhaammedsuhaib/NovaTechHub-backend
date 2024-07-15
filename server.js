import express from 'express';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import tutorialRoutes from './routes/tutorialRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';

configDotenv();

const app = express();

const PORT = process.env.PORT || 8000;
const DB = process.env.DB;

app.use(express.json());

mongoose.connect(DB)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB connection error", error));

// CORS configuration to allow multiple origins
const allowedOrigins = [
  'https://nova-tech-xdcm6c5nr-suhaibs-projects-7d997fb5.vercel.app',
  'https://nova-tech-hub.vercel.app'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use('/api', tutorialRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
