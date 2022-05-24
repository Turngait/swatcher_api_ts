import { Schema, model } from 'mongoose';
import foodGroupSchema from './schema';

export default model('Food_group', new Schema(foodGroupSchema), 'food_group');