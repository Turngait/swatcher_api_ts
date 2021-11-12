import { Document, Query } from 'mongoose';

import Model from './mongoose/model';
import { dateNow } from '../../utils/date';
import {IFood, IFoodPublic, IFoodStat} from '../../interfaces/foods';

class Food {
  static async getAllFoodData(userId: string): Promise<IFoodPublic | null> {
    try {
      const foods = await Food.getFoodsByUserId(userId);
      if (foods) {
        const publicFoods: any = [];
        for (const food of foods) {
          publicFoods.push({
            id: food._id.toString(),
            title: food.title,
            callories: food.callories,
            groupId: food.groupId,
            descr: food.descr,
            createdAt: food.createdAt
          })
        }

        return publicFoods;
      } else {
        return null;
      }
    } catch(err) {
      console.log(err);
      return null;
    }
  }

  static async getFoodsByUserId(userId: string): Promise<Query<any, Document<IFood>> | null> {
    try {
      return await Model.find({userId});
    } catch(err) {
      console.log(err);
      return null;
    }
  }
  static async addNewFood(userId: string, title: string, callories: number, harmfulness: number, descr: string): Promise<{status: boolean, id: string}> {
    const newFood = new Model({
      title,
      callories,
      harmfulness,
      groupId: '',
      userId,
      descr,
      createdAt: dateNow()
    });

    try {
      const food = await newFood.save();
      return {status: true, id: food._id.toString()};
    } catch (err) {
      console.log(err);
      return {status: false, id: ''};
    }
  }

  static async deleteFood(_id: string, userId: string): Promise<boolean> {
    try {
      await Model.deleteOne({_id, userId});
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}

export default Food;
