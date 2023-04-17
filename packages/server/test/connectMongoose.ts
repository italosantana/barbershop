import mongoose from 'mongoose';

// v6
const mongooseOptions = {
  autoIndex: true,
  connectTimeoutMS: 10000,
};

export async function connectMongoose() {
  return mongoose.connect(global.__MONGO_URI__, {
    ...mongooseOptions,
    dbName: global.__MONGO_DB_NAME__,
  });
}
