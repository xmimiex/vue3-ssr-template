import createApp from './app'
import { Pinia } from 'pinia'

const postCreateStore = async (store?: Pinia) => {
  const initialState = window.__INITIAL_STATE__
  if (initialState && store) {
    store.state.value = initialState
  }
  delete window.__INITIAL_STATE__
}

const entry = async () => {
  const { app, router } = await createApp({ postCreateStore })

  await router.isReady()

  app.mount('#app', true)
}

export default entry()
