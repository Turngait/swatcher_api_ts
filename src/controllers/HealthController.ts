import {Request, Response} from 'express';

import Health from '../models/Health';

class HealthController {
  static async addNewIllness(req: Request, res: Response): Promise<void> {
    const {title, descr, userId} = req.body;
    let status = 200;
    const result = await Health.addNewIllness(userId, title, descr);
    if (result) status = 200;
    res.status(status);
    res.json({status});
  }
}

export default HealthController;
