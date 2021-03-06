import Model from './mongoose/model';
import { dateNow } from '../../utils/date';
import {IIllnessPublic} from '../../interfaces/health';

// TODO: затипизировать все any
class Health {
  static async addNewIllness(userId: string, title: string, descr: string, danger: string): Promise<{status: boolean, id: string}> {
    const newIllness = new Model({
      title,
      userId,
      danger,
      descr,
      createdAt: dateNow()
    });

    try {
      const ill = await newIllness.save();
      return {status: true, id: ill._id.toString()};
    } catch (err) {
      console.log(err);
      return {status: false, id: ''};
    }
  }

  static async editIllness(_id: string, title: string, descr: string, danger: number, userId: string): Promise<boolean> {
    try {
      const oldIllness: any = await Model.findOne({_id, userId});
      if(!oldIllness) return false;

      oldIllness.title = title;
      oldIllness.descr = descr;
      oldIllness.danger = danger;
      await oldIllness.save();
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  static async deleteIllness(_id: string, userId: string): Promise<boolean> {
    try {
      await Model.deleteOne({_id, userId});
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
