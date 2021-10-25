import { Schema, model } from 'mongoose';
import restoreSchema from './schema';

export default model('Restore', new Schema(restoreSchema), 'restore');