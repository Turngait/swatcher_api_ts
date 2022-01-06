export interface IFood {
  title: string,
  callories: number,
  groupId: string,
  userId: string,
  descr: string,
  complex: boolean,
  ingridients: [string],
  harmfulness?: number,
  units?: string,
  createdAt: string
}

export interface IFoodPublic {
  id: string,
  title: string,
  callories: number,
  groupId: string,
  descr: string,
  complex: boolean,
  ingridients: [string],
  harmfulness?: number,
  units?: string,
  createdAt: string
}

export interface IFoodStat {
  id?: string,
  food_id: string,
  description: string,
  amount: number,
  time: string
}
