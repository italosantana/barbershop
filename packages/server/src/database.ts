import mongoose from 'mongoose';

import { config } from './config';

export const connectDatabase = async (): Promise<void> => {
  //something
  await mongoose.connect(config.MONGO_URI);
};
