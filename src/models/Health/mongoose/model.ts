import { Schema, model } from 'mongoose';
import illnessSchema from './schema';

export default model('Illness', new Schema(illnessSchema), 'illnesses');