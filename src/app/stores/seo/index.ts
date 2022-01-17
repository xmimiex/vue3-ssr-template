import { defineStore } from 'pinia'

export interface SeoState {
  title: string
  description: string
  robots: string
}

export default defineStore('seo', {
  state: () => ({
    title: 'Vue3 SSR Template',
    description: '',
    robots: '',
  } as SeoState),
})
