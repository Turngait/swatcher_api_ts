import { Router } from 'express';
import {Request, Response} from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('Server is working now');

  res.json({isAlive: true});
});

export default router;