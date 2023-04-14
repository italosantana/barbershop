import { connectionArgs } from 'graphql-relay';

import * as UserLoader from './UserLoader';
import { UserType, UserConnection } from './UserType';

import { edgeField } from '../../graphql/edgeField';

export const userTypeField = (key = 'user') => ({
  [key]: {
    type: UserType,
    resolve: async (obj: any, args: any, context: any) => UserLoader.load(context, obj[key]),
  },
});

export const userEdgeField = edgeField({
  connection: UserConnection,
  load: UserLoader.load,
  name: 'User',
  edgeName: 'userEdge',
});

export const userConnectionField = () => ({
  me: {
    type: UserType,
    args: {
      ...connectionArgs,
    },
    resolve: (_: any, args: any, context: any) => {
      return UserLoader.load(context, context.user?._id);
    },
  },
});
