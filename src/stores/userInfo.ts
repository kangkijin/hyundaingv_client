import { defineStore } from 'pinia'

export const userInfoStore = defineStore('user_info', {
  state: () => ({ user_info: null }),
  getters: {
    userInfo: (state) => state.user_info
  },
  actions: {
    setInfo(data: any) {
      this.user_info = data
    },
  },
})
