import Koa, { Request } from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

import GraphQLHTTP, { OptionsData } from 'koa-graphql';

import koaPlayground from 'graphql-playground-middleware-koa';
import { schema } from './modules/schema';
import { config } from './config';

const app = new Koa();
app.use(bodyParser());
app.use(cors());

const router = new Router();

const graphqlSettingsPerReq = async (req: Request): Promise<OptionsData> => {
    return {
      graphiql:
        config.NODE_ENV !== 'production'
          ? {
              headerEditorEnabled: true,
              shouldPersistHeaders: true,
            }
          : false,
      schema,
      pretty: true,
      customFormatErrorFn: ({ message, locations, stack }) => {
        /* eslint-disable no-console */
        console.log(message);
        console.log(locations);
        console.log(stack);
        /* eslint-enable no-console */
  
        return {
          message,
          locations,
          stack,
        };
      },
    };
  };

const graphqlServer = GraphQLHTTP(graphqlSettingsPerReq);


router.get('/', async ctx => {
    ctx.body = 'Ok';
});

router.all('/graphql', graphqlServer);

router.all(
    '/playground',
    koaPlayground({
        endpoint: '/graphql',
    }),
);

app.use(router.routes()).use(router.allowedMethods());

export default app;