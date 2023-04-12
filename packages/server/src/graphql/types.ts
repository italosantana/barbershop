import * as mongoose from 'mongoose';


declare type ObjectId = mongoose.Schema.Types.ObjectId;

export type GraphQLContext = {};

export type LoaderFn = (ctx: GraphQLContext, id: string | ObjectId | object) => any;