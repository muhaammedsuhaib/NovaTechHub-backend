import express from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import { createTurolial, getAllTutorials } from '../controllers/tutorialController.js';

const router = express.Router();

router.post('/createtutorials',asyncHandler(createTurolial));
router.get('/gettutorials',asyncHandler(getAllTutorials));

export default router;