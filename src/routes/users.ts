import { Router, Request, Response } from 'express';

import UserController from '../controllers/UserController';
import { signUpValidators, loginValidators, saveUserDataValidators, changeUserNameValidator, changeUserPassValidator, restorePassValidator } from './validators';
import { isValid, checkToken } from '../middleware';

const router = Router();

router.post('/signup', signUpValidators, isValid, async (req: Request, res: Response) => {
  await UserController.signUp(req, res);
});

router.post('/signin', loginValidators, isValid, async (req: Request, res: Response) => {
  await UserController.signIn(req, res);
});

router.post('/savedata', checkToken, saveUserDataValidators, isValid, async (req: Request, res: Response) => {
  await UserController.saveData(req, res);
});

router.put('/changename', checkToken, changeUserNameValidator, isValid, UserController.changeUserName);
router.put('/changepass', checkToken, changeUserPassValidator, isValid, UserController.changeUserPass);
router.put('/changepersdata', checkToken, UserController.changeUserPersonalData);

router.post('/restorepass', restorePassValidator, isValid, UserController.restoreUserPass);

export default router;