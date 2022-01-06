import { Router } from 'express';
import {Request, Response} from 'express';

import FoodController from '../controllers/FoodController';
import { checkToken, isValid } from '../middleware';

import { addFoodValidator } from './validators';

const router = Router();

// Todo добавить валлидацию
router.post('/addfood', checkToken, addFoodValidator, isValid, FoodController.addNewFood);
router.put('/edit', checkToken, FoodController.editFood);

router.post('/alldata', checkToken, async (req: Request, res: Response) => {
  await FoodController.getAllData(req, res);
});

router.delete('/delfood', checkToken, async (req: Request, res: Response) => {
  await FoodController.deleteFood(req, res);
});

router.post('/addfoodforday', checkToken, async (req: Request, res: Response) => {
  await FoodController.addFoodForDay(req, res);
});

export default router;
