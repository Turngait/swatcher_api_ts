import Model from './mongoose/model';
import { dateNow } from '../../utils/date';

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
}

export default Health;
