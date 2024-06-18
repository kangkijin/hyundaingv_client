import Cookie from 'js-cookie'
import { ACCESS_TOKEN, USER_INFO } from '@/constants/common.const'
import { ref } from 'vue'
const userInfo = ref<any>()
export const setAccessToken = (token: string) => {
  return Cookie.set(ACCESS_TOKEN, token, {
    expires: 7
  })
}

export const setUserInfo = (data: Object) => {
  const userInfo = JSON.stringify(data)
  localStorage.setItem(USER_INFO, userInfo)
}

export const getUserInfo = () => {
  return localStorage.getItem(USER_INFO)
}

export const removeUserInfo = () => {
  localStorage.clear()
}

export const getAccessToken = () => {
  return Cookie.get(ACCESS_TOKEN)
}

export const removeAccessToken = () => {
  return Cookie.remove(ACCESS_TOKEN)
}
