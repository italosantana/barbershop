import { Request } from 'koa';

type ContextVars = {
    req?: Request;
};

export const getContext = async (ctx: ContextVars) => {

    return {};
};