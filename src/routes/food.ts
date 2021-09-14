import { Router } from 'express';
import {Request, Response} from 'express';

import FoodController from '../controllers/FoodController';
import { checkToken } from '../middleware';

const router = Router();

router.post('/addfood', checkToken, async (req: Request, res: Response) => {
  await FoodController.addNewFood(req, res);
});

router.post('/alldata', checkToken, async (req: Request, res: Response) => {
  await FoodController.getAllData(req, res);
});

export default router;
