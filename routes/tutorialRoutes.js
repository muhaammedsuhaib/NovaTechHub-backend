import express from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import { createTurolial } from '../controllers/tutorialController.js';

const router = express.Router();

router.post('/createtutorials',asyncHandler(createTurolial));

export default router;