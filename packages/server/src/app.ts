
import Koa from 'koa';
import GraphQLHTTP from 'koa-graphql';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';


import koaPlayground from 'graphql-playground-middleware-koa';

const app = new Koa();
const router = new Router();

const graphqlSettingsPerReq = async (req, ctx, koaContext) => {
    const { event } = koaContext;
    return {
        graphiql: true,
        context: {
            event,
            req,
            // dataloaders,
        },
        formatError: error => {
            console.log(error.message);
            console.log(error.locations);
            console.log(error.stack);

            return {
                message: error.message,
                locations: error.locations,
                stack: error.stack,
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

app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

export default app;