import { defineStore } from 'pinia'

export interface UserState {
  name: string
}

export default defineStore('user', {
  state: () => ({
    name: 'Batman',
  } as UserState),
})
