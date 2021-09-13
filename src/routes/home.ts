import { Router } from 'express';
import {Request, Response} from 'express';
import User from '../models/User';

import { checkToken } from '../middleware';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('Server is working now');
  res.json({isAlive: true});
});

router.post('/getdata', checkToken, async (req: Request, res: Response) => {
  const { userId } = req.body;
  let user = null;
  if(userId) {
    user = await User.getUserPublicData(String(userId));
  }
  res.json({user});
})

export default router;