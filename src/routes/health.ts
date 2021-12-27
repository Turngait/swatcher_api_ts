import { Router } from 'express';
import {Request, Response} from 'express';

import HealthController from '../controllers/HealthController';
import { checkToken } from '../middleware';

const router = Router();

// Todo добавить валлидацию
router.post('/addillness', checkToken, HealthController.addNewIllness);
router.put('/editillness', checkToken, HealthController.editIllness);

router.delete('/deleteillness', checkToken, async (req: Request, res: Response) => {
  await HealthController.deleteIllness(req, res);
})
export default router;
