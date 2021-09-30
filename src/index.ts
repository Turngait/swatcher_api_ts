import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import homeRouter from './routes/home';
import usersRouter from './routes/users';
import foodRouter from './routes/food';
import healthRouter from './routes/health';
import { AtlasUrl } from './config/db';
import { MongoOptions } from './interfaces/system';
import {checkApiKey} from './middleware';

const app: express.Application = express();
app.use(cors());
app.use(express.json({
  inflate: true,
  strict: true,
  type: 'application/json'
}));
app.use(checkApiKey);

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/food', foodRouter);
app.use('/health', healthRouter);

// console.log(process.env);

async function start(): Promise<void> {
  const options: MongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  await connect(AtlasUrl, options, (err) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log('Connected to DB');
      const port: number = +process.env.PORT || 5000;
      app.listen(port, () => console.log(`Running on port ${port}`));
    }
  });
}

start();
