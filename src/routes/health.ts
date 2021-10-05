import { Router } from 'express';
import {Request, Response} from 'express';

import HealthController from '../controllers/HealthController';
import { checkToken } from '../middleware';

const router = Router();

router.post('/addillness', checkToken, async (req: Request, res: Response) => {
  await HealthController.addNewIllness(req, res);
});

export default router;