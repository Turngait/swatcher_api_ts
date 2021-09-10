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