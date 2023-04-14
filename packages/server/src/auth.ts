import jwt from 'jsonwebtoken';

import { config } from './config';
import { Types } from 'mongoose';
import { UserDocument, UserModel } from './modules/user/UserModel';

export const getUser = async (token?: string): Promise<UserDocument> => {
  if (!token) return null;

  const decodedToken = jwt.verify(token.substring(4), config.JWT_SECRET);

  const user = await UserModel.findOne({ _id: new Types.ObjectId(decodedToken.id) });

  if (!user) return null;

  return user;
};
