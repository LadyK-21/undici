import { expectAssignable } from 'tsd'
import Undici, { Pool, Client, errors, fetch, Interceptable, RedirectHandler, Headers, Response, Request, FormData, SnapshotAgent } from '../..'
import Dispatcher from '../../types/dispatcher'

expectAssignable<Pool>(new Undici.Pool('', {}))
expectAssignable<Client>(new Undici.Client('', {}))
expectAssignable<Interceptable>(new Undici.MockAgent().get(''))
expectAssignable<SnapshotAgent>(new Undici.SnapshotAgent())
expectAssignable<typeof errors>(Undici.errors)
expectAssignable<typeof fetch>(Undici.fetch)
expectAssignable<typeof Headers>(Undici.Headers)
expectAssignable<typeof Response>(Undici.Response)
expectAssignable<typeof Request>(Undici.Request)
expectAssignable<typeof FormData>(Undici.FormData)
expectAssignable<Dispatcher.DispatcherComposeInterceptor>(Undici.interceptors.dump())
expectAssignable<Dispatcher.DispatcherComposeInterceptor>(Undici.interceptors.redirect())
expectAssignable<Dispatcher.DispatcherComposeInterceptor>(Undici.interceptors.retry())
expectAssignable<Dispatcher.DispatcherComposeInterceptor>(Undici.interceptors.cache())

const dispatcher = new Dispatcher()
const handler: Dispatcher.DispatchHandler = {}

const redirectHandler = new Undici.RedirectHandler(dispatcher.dispatch, 10, {
  path: '/', method: 'GET'
}, handler, false) as RedirectHandler
expectAssignable<RedirectHandler>(redirectHandler)
