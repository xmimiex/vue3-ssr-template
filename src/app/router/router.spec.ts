import createRouter from '.'
import { setActivePinia, createPinia } from 'pinia'
import { ROUTES } from './constants'
import notFound from './routes/not-found'

describe('Router', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should name routes correctly', () => {

    const router = createRouter()
    const routeNames = router.getRoutes().map(route => route.name)
    const routeNamesFromContant = Object.values(ROUTES)

    routeNames.forEach(routeName => {
      expect(routeNamesFromContant).toContain(routeName)
    })
  })

  it('should set 404 status on not-found', async () => {
    const ctx = {
      status: 200,
    } as any
    const router = createRouter(ctx)
    router.push('/a-fake-path/with/fake/params/')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe(ROUTES.NOTFOUND)
    expect(ctx.status).toBe(404)
  })
})
