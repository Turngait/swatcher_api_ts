import { IFoodStat } from "./foods";

export interface IStat {
  id?: string,
  userId: string,
  date: string,
  period: string,
  foods: IFoodStat[] | [],
  health: [string]
}

export interface IStatPublic {
  id?: string,
  date: string,
  foods: IFoodStat[] | [],
  health: [string]
}
