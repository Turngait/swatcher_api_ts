import Model from './mongoose/model';
import { dateNow } from '../../utils/date';
import {IIllnessPublic} from '../../interfaces/health';

class Health {
  static async addNewIllness(userId: string, title: string, descr: string): Promise<boolean> {
    const newIllness = new Model({
      title,
      userId,
      danger: '',
      descr,
      createdAt: dateNow()
    });

    try {
      await newIllness.save();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  static async getAllIllneses(userId: string): Promise<IIllnessPublic[]> {
    const illnesses = await Health.getIllnessByUserId(userId);
    if(illnesses) {
      const publicIllness: IIllnessPublic[] = [];
      for (const item of illnesses) {
        publicIllness.push({
          title: item.title || '',
          danger: item.danger || '',
          descr: item.descr || '',
          id: item._id
        });
      }
      return publicIllness;
    } else {
      return null;
    }
  }

  static async getIllnessByUserId(userId: string): Promise<any> {
    try {
      return await Model.find({userId});
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default Health;
