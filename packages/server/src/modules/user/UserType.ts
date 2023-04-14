import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

import { globalIdField, connectionDefinitions } from 'graphql-relay';

import { registerTypeLoader, nodeInterface } from '../../node/typeRegister';

import { User } from './UserModel';
import { load } from './UserLoader';

export const UserType = new GraphQLObjectType<User>({
  name: 'User',
  fields: () => ({
    id: globalIdField('User'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.name,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.email,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.password,
    },
    whatsapp: {
      type: GraphQLString,
      resolve: (user) => user.whatsapp,
    },
  }),
  interfaces: () => [nodeInterface],
});

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});

registerTypeLoader(UserType, load);
