import * as mongoose from 'mongoose';

import { UserDocument } from '../modules/user/UserModel';

import { DataLoaders } from '../loader/loaderRegister';

declare type ObjectId = mongoose.Schema.Types.ObjectId;

export type GraphQLContext = {
  user?: UserDocument;
  dataloaders: DataLoaders;
};

export type LoaderFn = (ctx: GraphQLContext, id: string | ObjectId | object) => any;