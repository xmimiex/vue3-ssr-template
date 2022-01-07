import { ParameterizedContext } from 'koa'
import { IRouterParamContext } from 'koa-router'

export type KoaContext = ParameterizedContext<any, IRouterParamContext, any>;
