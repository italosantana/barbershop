import { toGlobalId } from 'graphql-relay';
import { GraphQLConnectionDefinitions } from 'graphql-relay/connection/connection';

type EdgeFieldParams<Context> = {
  connection: GraphQLConnectionDefinitions;
  load: (context: Context, id: string) => Promise<any>;
  name: string;
  edgeName: string;
};
export const edgeField = <Context extends object>({ connection, load, name, edgeName }: EdgeFieldParams<Context>) => ({
  [edgeName]: {
    type: connection.edgeType,
    resolve: async ({ id }: any, args: any, context: any) => {
      const node = await load(context, id);

      if (!node) {
        return null;
      }

      return {
        cursor: toGlobalId(name, node._id),
        node,
      };
    },
  },
});
