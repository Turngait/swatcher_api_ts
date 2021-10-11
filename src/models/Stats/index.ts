import { Document, Query } from 'mongoose';

import { IFoodStat } from "interfaces/foods";
import { IIllnessStat } from "interfaces/health";
import {IStat, IStatPublic} from "interfaces/common";
import Model from './mongoose/model';

class Stats {
  static async getStatForPeriod(userId: string, period: string): Promise<any> {
    try {
      const stats = await Model.find({period, userId});
      const normalizedStat = [];
      for (const stat of stats) {
        normalizedStat.push(Stats.normalizeStatData(stat))
      }
      return normalizedStat;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async addNewDayStat(userId: string, date: string): Promise<Query<any, Document<IStat>> | null> {
    const stat = new Model({
      userId,
      date,
      period: date.slice(0, 7),
      foods: [],
      helath: [],
      createdAt: new Date()
    });

    try {
      return await stat.save();
    } catch(err) {
      console.log(err);
      return null;
    }

  }

  static async getStatForDay(date: string, userId: string): Promise<Query<any, Document<IStat>> | null> {
    try {
      return await Model.findOne({date, userId});
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async addFoodForDay(food: IFoodStat, date: string, userId: string): Promise<IStatPublic | null> {
    const oldStat = await Stats.getStatForDay(date, userId);
    if (oldStat) {
      oldStat.foods.unshift(food);
      try {
        return await oldStat.save();
      } catch (err) {
        console.log(err);
        return null;
      }
    } else {
      const newStat = await Stats.addNewDayStat(userId, date);
      newStat.foods.unshift(food);
      try {
        const statData = await newStat.save();
        return Stats.normalizeStatData(statData);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  }

  static async addIllnessForDay(illness: IIllnessStat, date: string, userId: string): Promise<any> {
    const oldStat = await Stats.getStatForDay(date, userId);
    if (oldStat) {
      oldStat.health.unshift(illness);
      try {
        return await oldStat.save();
      } catch (err) {
        console.log(err);
        return null;
      }
    } else {
      const newStat = await Stats.addNewDayStat(userId, date);
      newStat.health.unshift(illness);
      try {
        const statData = await newStat.save();
        console.log(statData);
        return Stats.normalizeStatData(statData);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  }

  static normalizeStatData(stat: any): IStatPublic | null {
    if (stat) {
      return {
        id: stat._id,
        date: stat.date,
        foods: stat.foods,
        health: stat.helath
      };
    }
    return null;
  }
}

export default Stats;
