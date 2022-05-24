import { Document, Query } from 'mongoose';

import Model from './mongoose/model';
import { getTimestamp } from '../../utils/date';
import { IFood, IFoodPublic } from '../../interfaces/foods';

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
            calories: food.calories,
            groupId: food.groupId,
            harmfulness: food.harmfulness,
            units: food.units,
            ingredients: food.ingredients,
            isComplex: food.isComplex,
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
  static async addNewFood(userId: string, title: string, calories: number, units: string, harmfulness: number, descr: string): Promise<{status: boolean, id: string}> {
    const newFood = new Model({
      title,
      calories,
      harmfulness,
      units,
      groupId: '',
      ingredients: [],
      isComplex: false,
      userId,
      descr,
      createdAt: getTimestamp()
    });

    try {
      const food = await newFood.save();
      return {status: true, id: food._id.toString()};
    } catch (err) {
      console.log(err);
      return {status: false, id: ''};
    }
  }

  // TODO типизировать olDFood
  static async editFood(food: any, userId: string): Promise<boolean> {
    try {
      if (!food) return false;

      const oldFood: any = await Model.findOne({userId, _id: food.id});
      if(!oldFood) return false;

      oldFood.title = food.title;
      oldFood.calories = food.calories;
      oldFood.descr = food.descr;
      await oldFood.save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
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
  }
}

export default Food;
