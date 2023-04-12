import Koa, { Request } from 'koa';
import { graphqlHTTP, OptionsData } from 'koa-graphql';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { schema } from './modules/schema';

import koaPlayground from 'graphql-playground-middleware-koa';

import { getUser } from './auth';
import { getContext } from './graphql/getContext';
import { config } from './config';

const app = new Koa();
const router = new Router();

const graphQlSettingsPerReq = async (req: Request): Promise<OptionsData> => {
    const user = await getUser(req.header.authorization);

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
        context: getContext({
            user,
        }),
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

const graphqlServer = graphqlHTTP(graphQlSettingsPerReq);

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

app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

export default app;