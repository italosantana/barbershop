import { GraphQLObjectType } from "graphql";

// import userMutation from "../modules/user/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    // ...userMutation,
  }),
});

export default MutationType;