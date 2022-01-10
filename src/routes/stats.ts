import { Router } from 'express';

import StatController from '../controllers/StatController';
import { checkToken, isValid } from '../middleware';
import { addFoodForDayValidator, addIllnessForDayValidator } from './validators';

const router = Router();

router.post('/getstat', checkToken, StatController.getStat);
router.post('/addfoodforday', checkToken, addFoodForDayValidator, isValid, StatController.addFoodForDay);
router.post('/addillnessforday', checkToken, addIllnessForDayValidator, isValid, StatController.addIllnessForDay);

router.delete('/delfood', checkToken, StatController.deleteFoodForDay);
router.delete('/deleteillness', checkToken, StatController.deleteIllForDay);

export default router;