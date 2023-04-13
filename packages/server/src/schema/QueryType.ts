import { GraphQLObjectType } from "graphql";

import { nodesField, nodeField } from "../node/typeRegister";
import { userConnectionField } from "../modules/user/UserField";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    ...userConnectionField(),
  }),
});

export default QueryType;