import {Request, Response} from 'express';

import Food from '../models/Food';

class FoodController {
  static async getAllData(req: Request, res: Response) {
    const { userId } = req.body;
    const foods = await Food.getAllFoodData(userId);
    res.json({foods});
  }

  static async addNewFood(req: Request, res: Response): Promise<void> {
    const {title, callories, harmfulness, units, descr, userId} = req.body;
    let status = 500;
    const result = await Food.addNewFood(userId, title, callories, units, harmfulness, descr);
    if (result.status) status = 200;
    res.status(status);
    res.json({status, id: result.id});
  }

  static async editFood(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {food, userId} = req.body;
    const isEdit = await Food.editFood(food, userId);
    if(isEdit) status = 200;
    res.status(status);
    res.json({status});
  }

  static async deleteFood(req: Request, res: Response): Promise<void> {
    const {id, userId} = req.body;
    let status = 500;
    const result = await Food.deleteFood(id, userId);

    if (result) status = 200;
    res.status(status);
    res.json({status});
  }
}

export default FoodController;
