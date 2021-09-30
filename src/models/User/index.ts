import Model from './mongoose/model';
import { createPassword, createPaper, createToken} from '../../config/sec';
import { dateNow } from '../../utils/date';
import { IUser, IUserPublicData } from '../../interfaces/user';
import { Document, Query } from 'mongoose';

class User {
  static async signUp(name: string, email: string, pass: string): Promise<{userData: any, userExist: boolean}> {
    const existedUser = await User.getUserByEmail(email);
    if (existedUser) return {userData: null, userExist: true};

    const paper = createPaper();
    const settings = {
      lang: 'ru-RU',
      theme: 'white'
    };
    const onboarding = {
      firstTime: false,
    };
    const data = {
      sex: '',
      age: 0,
      weight: 0,
      height: 0,
    };
    const user = new Model({
      name,
      email,
      pass: createPassword(pass, paper),
      paper,
      isBanned: false,
      status: 'user',
      token: [createToken()],
      ips: [],
      data,
      settings,
      onboarding,
      createdAt: dateNow()
    });
    try {
      return {userData: await user.save(), userExist: false};
    } catch (e) {
      console.log(e);
      return {userData: null, userExist: false};
    }
  }

  static async signIn(email: string, pass: string): Promise<{token: string, auth: boolean}> {
    const user = await User.getUserByEmail(email);
    if(!user) return {token: null, auth: false};

    const hashPass = createPassword(pass, user.paper);
    if (hashPass === user.pass) {
      const token = createToken();
      if (user.token.length > 3) {
        user.token.shift();
      }
      user.token.push(token);
      try {
        await user.save();
        return {token, auth: true};
      } catch (err) {
        return {token: null, auth: false};
      }
    } else {
      return {token: null, auth: false};
    }
  }

  static async getUserPublicData(_id: string): Promise<IUserPublicData | null> {
    try {
      const user = await User.getUserById(_id);
      if(user) {
        return {
          name: user.name,
          email: user.email,
          status: user.status,
          isBanned: user.isBanned,
          data: user.data,
          settings: user.settings,
          onboarding: user.onboarding,
          createdAt: user.createdAt
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async saveUserData (id: string, sex: string, age: number, weight: number, height: number): Promise<boolean> {
    try {
      const data = {
        sex,
        age,
        weight,
        height
      };
      await Model.updateOne({_id: id}, {data});
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  private static async getUserById(_id: string): Promise<Query<any, Document<IUser>>> {
    try {
      return await Model.findOne({_id});
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  private static async getUserByEmail(email: string): Promise<Query<any, Document<IUser>>> {
    try {
      return await Model.findOne({email});
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // Method using only in middleware
  static async getUserIdByToken(token: string): Promise<string | null> {
    try {
      const user = await Model.findOne({token});
      if(user) {
        return user._id.toString();
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default User;
