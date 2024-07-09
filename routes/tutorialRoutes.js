import express from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import { createTurolial, getAllTutorials, getTutorialById } from '../controllers/tutorialController.js';

const router = express.Router();

router.post('/createtutorials',asyncHandler(createTurolial));
router.get('/gettutorials',asyncHandler(getAllTutorials));
router.get('/getOne',asyncHandler(getTutorialById));

export default router;