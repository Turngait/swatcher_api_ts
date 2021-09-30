import {Request, Response} from 'express';

import Stats from '../models/Stats';

class StatController {
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
