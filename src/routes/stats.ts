import { Router } from 'express';
import {Request, Response} from 'express';

import StatController from '../controllers/StatController';
import { checkToken } from '../middleware';

const router = Router();

router.post('/getstat', checkToken, async(req: Request, res: Response) => {
  await StatController.getStat(req, res);
});

router.post('/addfoodforday', checkToken, async (req: Request, res: Response) => {
  await StatController.addFoodForDay(req, res);
});

export default router;