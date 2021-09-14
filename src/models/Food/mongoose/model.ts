import { Schema, model } from 'mongoose';
import foodSchema from './schema';

export default model('Food', new Schema(foodSchema), 'foods');