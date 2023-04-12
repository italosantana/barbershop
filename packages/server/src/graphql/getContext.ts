import { Request } from 'koa';

import { getDataloaders } from '../loader/loaderRegister';

import { GraphQLContext } from './types';

type ContextVars = {
    req?: Request;
};

export const getContext = async (ctx: ContextVars) => {
    const dataloaders = getDataloaders();

    return {
        req: ctx.req,
        dataloaders,
    } as GraphQLContext;
};