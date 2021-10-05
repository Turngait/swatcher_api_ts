import {Request, Response} from 'express';

import Food from '../models/Food';
import { normalizeStatData } from '../utils/stats';
import Stats from '../models/Stats';

class StatController {
  static async getStat(req: Request, res: Response): Promise<void> {
    const {userId, period} = req.body;
    let status = 500;
    const stat = await Stats.getStatForPeriod(userId, period);
    const foods = await Food.getAllFoodData(userId);
    if(Array.isArray(stat)) status = 200;
    res.status(status);
    res.json({stat: normalizeStatData(stat, foods), status});
  }
  static async addFoodForDay(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {food, date, userId} = req.body;
    const stats = await Stats.addFoodForDay(food, date, userId);
    if(stats) status = 200;
    res.status(status);
    res.json({status, stats});
  }
}

export default StatController;
