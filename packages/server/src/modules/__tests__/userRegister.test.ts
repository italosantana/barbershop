// import { graphql } from 'graphql';
// import { expect, it, beforeAll, afterAll, beforeEach } from '@jest/globals';

// import { clearDbAndRestartCounters, connectMongoose, disconnectMongoose } from '../../../test';
// import { schema } from '../../schema/schema';

// beforeAll(connectMongoose);
// beforeEach(clearDbAndRestartCounters);
// afterAll(disconnectMongoose);

// it('should create a new user', async () => {
//     const mutation = `
//     mutation UserRegisterMutation($email: String!, $name: String!, $whatsapp: String!, $password: String!) {
//       userRegisterMutation(input: { email: $email, name: $name, whatsapp: $whatsapp, password: $password }) {
//         me {
//           _id
//           id
//           email
//           name
//           whatsapp
//         }
//         success
//         error
//       }
//     }
//       `;

//     const rootValue = {};

//     const variableValues = {
//         name: 'barber#2',
//         whatsapp: '81921348421',
//         email: 'barbershop@recife.com.br',
//         password: '12312323123131',
//     };

//     const result = await graphql({
//         schema,
//         source: mutation,
//         rootValue,
//         variableValues,
//         contextValue: {
//             setCookie: () => { },
//         },
//     });

//     // eslint-disable-next-line @ts-ignore
//     // const { me, error } = result?.data?.userRegisterMutation;

//     // expect(error).toBeNull();
//     // expect(success).toEqual('Congratulations! The user has registered with success!');
//     // expect(me.email).toEqual(variableValues.email);
// });
