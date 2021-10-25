import Model from './mongoose/model';

class Restore {
  static async saveCode(email: string): Promise<string | null> {
    const code = String(Math.floor(Math.random() * 10000));

    const restore = new Model({
      email,
      code
    });
    try {
      await restore.save();
      return code;
    } catch(err) {
      console.log(err);
      return null;
    }
  }

  static async hasCode(email: string, code: string): Promise<boolean> {
    try {
      const restore = await Model.findOne({email, code});

      if(restore) return true;
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  static async delCode(email: string): Promise<void> {
    try {
      await Model.deleteMany({email});
    } catch (err) {
      console.log(err);
    }
  }

}

export default Restore;
