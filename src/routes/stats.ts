import { Router } from 'express';

import StatController from '../controllers/StatController';
import { checkToken } from '../middleware';

const router = Router();

router.post('/getstat', checkToken, StatController.getStat);
router.post('/addfoodforday', checkToken, StatController.addFoodForDay);
router.post('/addillnessforday', checkToken, StatController.addIllnessForDay);

router.delete('/delfood', checkToken, StatController.deleteFoodForDay);
router.delete('/deleteillness', checkToken, StatController.deleteIllForDay);

export default router;