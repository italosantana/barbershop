import { GraphQLObjectType } from "graphql";

import { nodesField, nodeField } from "../node/typeRegister";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
  }),
});

export default QueryType;