export interface IUser {
  name: string,
  email: string,
  pass: string,
  paper: string,
  status: string,
  isBanned: boolean,
  ips: [string],
  token: [string],
  data: {
    sex: string,
    age: number,
    weight: number,
    height: number,
  },
  settings: {
    lang: string,
    theme: string,
  },
  onboarding: {
    firstTime: boolean,
  },
  createdAt: string
}

export interface IUserPublicData {
  name: string,
  email: string,
  status: string,
  isBanned: boolean,
  data: {
    sex: string,
    age: number,
    weight: number,
    height: number,
  },
  settings: {
    lang: string,
    theme: string,
  },
  onboarding: {
    firstTime: boolean,
  },
  createdAt: string
}