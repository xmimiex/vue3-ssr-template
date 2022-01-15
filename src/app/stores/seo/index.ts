import { defineStore } from 'pinia'

export interface SeoState {
  title: string
  description: string
  robots: string
}

export default defineStore('seo', {
  state: () => ({
    title: 'Maisons du Monde',
    description: '',
    robots: '',
  } as SeoState),
})
