import { apiV1 } from 'infrastructure/config/api'
import { SearchDTO } from 'infrastructure/dto/SearchDTO'
import { http } from 'infrastructure/lib'

export const searchRepository = {
  byType: async <T> (searchDTO: SearchDTO) => {
    const result = await http.post<T>(apiV1.search, {
      body: searchDTO
    })

    return result
  }
}
