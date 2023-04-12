import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

import koaPlayground from 'graphql-playground-middleware-koa';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
    ctx.body = 'Ok';
});

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