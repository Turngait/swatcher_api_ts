export interface IIllnessPublic {
  id?: string,
  title: string,
  danger: number,
  descr: string
}

export interface IIllnessStat {
  health_id?: string,
  power: number,
  begin: string,
  duration: string,
  description: string
}