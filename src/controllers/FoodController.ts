import {Request, Response} from 'express';

import Food from '../models/Food';

class FoodController {
  static async getAllData(req: Request, res: Response) {
    const { userId } = req.body;
    const foods = await Food.getAllFoodData(userId);
    res.json({foods});
  }

  static async addNewFood(req: Request, res: Response): Promise<void> {
    const {title, callories, descr, userId} = req.body;
    let status = 500;
    const result = await Food.addNewFood(userId, title, callories, descr);
    if (result) status = 200;
    res.status(status);
    res.json({status});
  }
}

export default FoodController;
