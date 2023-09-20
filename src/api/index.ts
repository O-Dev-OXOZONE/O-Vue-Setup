import axios from 'axios'

export const getToken = () => {
  const token = document.cookie.match(/odev-token=([^ ;]*)/)
  const localstorageToken = window.localStorage.getItem('odev-token')

  if (token && token.length > 0) {
    return token[1]
  }
  if (localstorageToken) {
    return localstorageToken
  }
  return null
}

// eslint-disable-next-line no-magic-numbers
const msInMonth = 1000 * 3600 * 24 * 30

export const setToken = (token: string) => {
  const expirationDate = new Date(Date.now() + msInMonth).toUTCString()

  document.cookie = `odev-token=${token}; expires${expirationDate}; path=/`
  window.localStorage.setItem('odev-token', token)
}

export const deleteToken = () => {
  document.cookie.split(';').forEach(cookie => {
    document.cookie = cookie
      .replace(/^ +/, '')
      // eslint-disable-next-line no-div-regex
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
  })
  window.localStorage.removeItem('odev-token')
}

export const apiClient = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
})

apiClient.interceptors.request.use(request => {
  const token = getToken()
  if (token && request.url !== '/login/') {
    request.headers.Authorization = `Token ${token}`
  }
  return request
})

apiClient.interceptors.response.use(
  ({ config, data }) => {
    if (config.url === '/login/') setToken(data.token)
    return data
  },
  error => {
    console.error(error.response.data)
    // to let others parts of the code to catch the same error
    // and to omit the fail to the `then` block
    return Promise.reject(error.response.data)
  },
)

// api methods return any type because of AxiosInstance response intercepting
/* eslint-disable @typescript-eslint/no-explicit-any */
export class HTTP {
  static get<T>(endpoint = '', params = {}): Promise<T> {
    return apiClient.get(`${endpoint}`, params)
  }

  static post<T>(endpoint = '', data = {}, config = {}): Promise<T> {
    return apiClient.post(`${endpoint}`, data, config)
  }

  static patch<T>(endpoint = '', data = {}): Promise<T> {
    return apiClient.patch(`${endpoint}`, data)
  }

  static put<T>(endpoint = '', data = {}): Promise<T> {
    return apiClient.put(`${endpoint}`, data)
  }

  static delete<T>(endpoint = '', params = {}): Promise<T> {
    return apiClient.delete(`${endpoint}`, params)
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
