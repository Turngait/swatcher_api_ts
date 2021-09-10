import { Schema, model } from 'mongoose';
import userSchema from './schema';

export default model('User', new Schema(userSchema), 'users');
