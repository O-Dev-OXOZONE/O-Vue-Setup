import { HTTP } from '@/api'
// import emitter from '@/helpers/message'

/**
 * This composable may be useful to generate stores, like the root store
 * Especially useful to insert popups-related functionality
 */
export const useEndpoint = <T, Serialized = T>(
  endpoint: string,
  idKey?: keyof Serialized,
  // ruName?: string,
  // wordEnd: string = '',
) => {
  const get = (id: number | string, params = {}): Promise<T> =>
    HTTP.get<T>(`${endpoint}/${id}${id ? '/' : ''}`, params)

  const list = (params = {}): Promise<T[]> =>
    HTTP.get<T[]>(`${endpoint}/`, params)

  const post = (data: Serialized, params = {}): Promise<T> =>
    HTTP.post<T, Serialized>(`${endpoint}/`, data, params).then(
      element =>
        // if (ruName) emitter.$emit('success', `${ruName} успешно создан${wordEnd}`)
        element,
    )

  const patch = (data: Serialized, qargs = '', id: number = 0): Promise<T> =>
    HTTP.patch<T, Serialized>(
      `${endpoint}/${idKey ? data[idKey] : id}/${qargs}`,
      data,
    ).then(
      element =>
        // if (ruName) emitter.$emit('success', 'Изменения успешно сохранены')
        element,
    )

  const deleteItem = (id: number | string, params = {}): Promise<T> =>
    HTTP.delete<T>(`${endpoint}/${id}`, params).then(
      data =>
        // if (ruName)
        //   emitter.$emit('success', `  ${ruName} успешно удален${wordEnd}`)
        data,
    )

  return { get, list, post, patch, deleteItem }
}
