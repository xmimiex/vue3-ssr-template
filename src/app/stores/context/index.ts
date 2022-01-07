import { defineStore } from 'pinia'

export interface ContextState {
  country: string
  language: string
}

export default defineStore('context', {
  state: () => ({
    country: '',
    language: '',
  } as ContextState),
})
