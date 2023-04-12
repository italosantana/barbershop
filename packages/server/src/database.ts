import mongoose from "mongoose";

import { config } from "./config";

export const connectDatabase = async (): Promise<void> => {

    await mongoose.connect(config.MONGO_URI);
};