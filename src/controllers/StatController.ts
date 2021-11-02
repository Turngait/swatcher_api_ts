import {Request, Response} from 'express';

import Food from '../models/Food';
import Health from '../models/Health';
import { normalizeStatData } from '../utils/stats';
import Stats from '../models/Stats';

class StatController {
  static async getStat(req: Request, res: Response): Promise<void> {
    const {userId, period} = req.body;
    let status = 500;
    const stat = await Stats.getStatForPeriod(userId, period);
    const foods = await Food.getAllFoodData(userId);
    const health = await Health.getAllIllneses(userId);
    if(Array.isArray(stat)) status = 200;
    res.status(status);
    res.json({stat: normalizeStatData(stat, foods, health), status});
  }

  static async addFoodForDay(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {food, date, userId} = req.body;
    const statsForday = await Stats.addFoodForDay(food, date, userId);
    if(statsForday) status = 200;
    res.status(status);
    res.json({status, statsForday});
  }

  static async addIllnessForDay(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {illness, date, userId} = req.body;
    const stats = await Stats.addIllnessForDay(illness, date, userId);
    if(stats) status = 200;
    res.status(status);
    res.json({status});
  }

  static async deleteFoodForDay(req: Request, res: Response): Promise<void> {
    const {id, date, userId} = req.body;
    let status = 500;
    const result = await Stats.deleteFoodForDay(id, date, userId);
    if (result) status = 200;
    res.status(status);
    res.json({status});
  }

  static async deleteIllForDay(req: Request, res: Response): Promise<void> {
    const {id, date, userId} = req.body;
    let status = 500;
    const result = await Stats.deleteIllForDay(id, date, userId);
    if (result) status = 200;
    res.status(status);
    res.json({status});
  }
}

export default StatController;
