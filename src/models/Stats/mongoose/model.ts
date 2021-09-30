import { Schema, model } from 'mongoose';
import statSchema from './schema';

export default model('Stats', new Schema(statSchema), 'stats');