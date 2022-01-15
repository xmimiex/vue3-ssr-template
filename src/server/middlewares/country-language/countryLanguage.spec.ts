import countryLanguageMiddleware from '.'

describe('countryLanguageMiddleware', () => {

  it('should do redirect to right language', async () => {
    const ctx = {
      headers: {
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      path: '/FR/it',
      redirect: jest.fn(),
    } as any
    await countryLanguageMiddleware(ctx, async () => null)
    expect(ctx.status).toBe(301)
    expect(ctx.redirect).toBeCalledWith('/FR/fr')
  })
})
