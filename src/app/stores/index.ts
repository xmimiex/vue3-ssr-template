import { createPinia } from 'pinia'
import useUser from './user'
import useSeo from './seo'
import useContext from './context'
import isServerSide from '@app/utils/context'

export default () => {
  const pinia = createPinia()

  // install all stores here
  if (isServerSide()) {
    useUser(pinia)
    useSeo(pinia)
    useContext(pinia)
  }

  return pinia
}
