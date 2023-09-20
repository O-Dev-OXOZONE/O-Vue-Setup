import { defineStore } from 'pinia'
import { computed, Ref, ref } from 'vue'

import { getToken, HTTP, setToken } from '@/api/index'

export interface User {
  id?: number
  email: string
  password: string
}

export const useUserStore = defineStore('user', () => {
  const localUser = localStorage.getItem('user')
  const initialUser = localUser
    ? JSON.parse(localUser)
    : {
        email: '',
        password: '',
      }
  const user: Ref<User> = ref(initialUser)

  const isLoggedIn = computed<boolean>(() => !!user.value.id && !!getToken())

  const setUser = (newValue: User) => {
    user.value = newValue
    localStorage.setItem('user', JSON.stringify(newValue))
  }

  const retrieveUser = async () => {
    setUser(await HTTP.get('/users/user/'))
    return user.value
  }

  const userPostRequest = async (payload: any, url: string) => {
    let errors = {}
    await HTTP.post<{ key: string }>(url, payload)
      .then(async (result: { key: string }) => {
        setToken(result.key)
        await retrieveUser()
      })
      .catch(data => {
        errors = data
      })
    if (errors) return Promise.reject(errors)
    return Promise.resolve()
  }

  // eslint-disable-next-line consistent-return
  const login = (email: string, password: string) =>
    userPostRequest(
      {
        email,
        password,
      },
      '/users/login/',
    )

  const register = (email: string) =>
    userPostRequest(
      {
        email,
      },
      '/users/registration/',
    )

  return { user, setUser, retrieveUser, login, register, isLoggedIn }
})
