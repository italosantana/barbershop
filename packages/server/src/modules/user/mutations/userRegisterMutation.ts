import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { errorField, successField } from '@entria/graphql-mongo-helpers';

import { UserType } from '../UserType';

import { UserModel } from '../UserModel';

export default mutationWithClientMutationId({
  name: 'UserRegister',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    whatsapp: { type: GraphQLString },
  },

  mutateAndGetPayload: async ({ name, email, password, whatsapp, ...rest }, context) => {
    const hasEmail = (await UserModel.countDocuments({ email: email.trim() })) > 0;

    if (hasEmail) {
      return {
        error: 'This email has been registered',
      };
    }

    const user = new UserModel({
      name,
      email,
      password,
      whatsapp,
    });

    await user.save();

    return {
      id: user._id,
      success: 'User has registered with success!',
    };
  },
  outputFields: {
    me: {
      type: UserType,
      resolve: ({ user }) => user,
    },
    ...successField,
    ...errorField,
  },
});
