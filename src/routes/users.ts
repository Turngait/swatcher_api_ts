import { Router, Request, Response } from 'express';

import UserController from '../controllers/UserController';
import { signUpValidators, loginValidators } from './validators';
import { isValid } from '../middleware';

const router = Router();

router.post('/signup', signUpValidators, isValid, async (req: Request, res: Response) => {
  await UserController.signUp(req, res);
});

router.post('/signin', loginValidators, isValid, async (req: Request, res: Response) => {
  await UserController.signIn(req, res);
});

export default router;