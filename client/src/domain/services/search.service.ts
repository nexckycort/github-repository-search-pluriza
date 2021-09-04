import { searchRepository } from 'infrastructure/repositories/search.repository'
import { SearchDTO } from 'infrastructure/dto/SearchDTO'

export const searchService = {
  byType: async <T> (userDTO: SearchDTO) => {
    const result = await searchRepository.byType<T>(userDTO)
    return result
  }
}
