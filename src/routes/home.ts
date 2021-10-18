import { Router } from 'express';
import {Request, Response} from 'express';
import User from '../models/User';
import Stats from '../models/Stats';
import Food from '../models/Food';
import Health from '../models/Health';

import { normalizeStatData } from '../utils/stats';

import { checkToken } from '../middleware';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('Server is working now');
  res.json({isAlive: true});
});

router.post('/getdata', checkToken, async (req: Request, res: Response) => {
  const { userId, period } = req.body;
  let user = null;
  let stat = [];
  let foods = null;
  let health = null;
  if(userId) {
    user = await User.getUserPublicData(String(userId));
    stat = await Stats.getStatForPeriod(userId, period);
    foods = await Food.getAllFoodData(userId);
    health = await Health.getAllIllneses(userId);
  }
  res.json({user, stat: normalizeStatData(stat, foods, health), foods, health});
})

export default router;