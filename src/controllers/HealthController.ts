import {Request, Response} from 'express';

import Health from '../models/Health';

class HealthController {
  static async addNewIllness(req: Request, res: Response): Promise<void> {
    const {title, descr, danger, userId} = req.body;
    let status = 500;
    const result = await Health.addNewIllness(userId, title, descr, danger);
    if (result.status) status = 200;
    res.status(status);
    res.json({status, id: result.id});
  }

  static async deleteIllness(req: Request, res: Response): Promise<void> {
    const {userId, id} = req.body;
    let status = 500;
    const result = Health.deleteIllness(id, userId);
    if (result) status = 200;
    res.status(status);
    res.json({status});
  }

  static async editIllness(req: Request, res: Response): Promise<void> {
    let status = 500;
    const {title, descr, id, userId} = req.body;
    const isEdited = await Health.editIllness(id, title, descr, userId);
    if(isEdited) status = 200;
    res.status(status);
    res.json({status});
  }
}

export default HealthController;
