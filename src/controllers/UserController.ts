import {Request, Response} from 'express';

import User from '../models/User';
import Mailer from '../models/Mailer';

class UserController {
  static async signUp(req: Request, res: Response): Promise<void> {
    let status = 500;
    let token = null;
    const {email, name, pass} = req.body;
    const {userData, userExist} = await User.signUp(name, email, pass);
    if (userData && !userExist) {
      await Mailer.sendSignUpMail(email, pass, name);
      status = 200;
      token = userData.token[0];
    } else if(userExist) {
      status = 403;
    } else {
      status = 500;
    }
    res.status(status);
    res.json({status, token});
  }

  static async signIn(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {email, pass} = req.body;
    const {token, auth} = await User.signIn(email, pass);
    if(auth) {
      status = 200;
    } else {
      status = 403;
    }

    res.status(status);
    res.json({status, token});
  }

  static async saveData(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {sex, age, weight, height, userId} = req.body;
    const result = await User.saveUserData(userId, sex, age, weight, height);
    if(result) {
      status = 200;
    }

    res.status(status);
    res.json({status});
  }

  static async changeUserName (req: Request, res: Response): Promise<void> {
    const {name, userId} = req.body;
    let status = 500;
    const result = await User.changeUserName(name, userId);
    if(result) {
      status = 200;
    }

    res.status(status);
    res.json({status});
  }

  static async changeUserPass(req: Request, res: Response): Promise<void> {
    const {oldPass, pass, userId} = req.body;
    const status = await User.changeUserPass(oldPass, pass, userId);
    res.status(status);
    res.json({status});
  }
}

export default UserController;
