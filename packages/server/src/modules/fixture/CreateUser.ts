import { DeepPartial } from '../../../test/deepPartial';

import { getCounter } from '../../../test/counters';
import { User, UserDocument, UserModel } from '../user/UserModel';

export const createUser = async (args?: DeepPartial<User>): Promise<UserDocument> => {
  const i = getCounter('user');

  return new UserModel({
    email: `user#${i}@example.com`,
    password: `password#${i}`,
    name: 'barbershop',
    whatsapp: '81999998888',
    ...args,
  }).save();
};
