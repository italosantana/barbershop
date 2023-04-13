import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { errorField, successField } from '@entria/graphql-mongo-helpers';

import { UserType } from '../UserType';

import { getUser } from '../../../auth';
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
            ...rest,
            email,
        });

        await user.save();

        const token = getUser(user._id);

        return {
            id: user._id,
            success: 'Congratulations! The user has registered with success!',
            token,
        };
    },
    outputFields: {
        token: {
            type: GraphQLString,
            resolve: ({ token }) => token,
        },
        me: {
            type: UserType,
            resolve: async ({ id }) => await UserModel.findOne({ _id: id }),
        },
        ...successField,
        ...errorField,
    },
});