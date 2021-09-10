import { ConnectOptions } from 'mongoose';

interface MongoOptions extends ConnectOptions {
  useNewUrlParser: boolean,
  useUnifiedTopology: boolean
};

export {
  MongoOptions
}
