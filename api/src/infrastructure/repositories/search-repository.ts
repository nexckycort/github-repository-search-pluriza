import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { NewSearch, Search } from 'domain/models/search-model'
import { apiGitHub } from 'app/config/environment'

interface SearchType {
  users: (q: string) => Promise<ResponseApiGithub<any>>
  repositories: (q: string) => Promise<ResponseApiGithub<any>>
  issues: (q: string) => Promise<ResponseApiGithub<any>>
  [x: string]: (q: string) => Promise<ResponseApiGithub<any>>
}

export interface ResponseApiGithub<T extends any> {
  total_count: number
  incomplete_results: boolean
  items: T[]
}

export class SearchRepository extends BaseRepository<Search> {
  searchByType = async (newSearch: NewSearch) => {
    const { type, q } = newSearch
    const response = await this.searchType[type](q)
    return response
  }

  private readonly searchInApi = async <T> (type: string, q: string) => {
    const url = `${apiGitHub}/search/${type}?q=${q}`
    const { response, error } = await this.http.get<ResponseApiGithub<T>>(url)
    if (error) throw new Error(response as any)
    return response
  }

  private readonly searchType: SearchType = {
    users: async (q: string) => {
      const resultCache = await this.findOne(`${q}-users`)
      if (resultCache !== undefined) return resultCache
      const resultApi = await this.searchInApi<any>('users', q)
      await this.create(`${q}-users`, resultApi as any)
      return resultApi
    },
    repositories: async (q: string) => {
      const resultCache = await this.findOne(`${q}-repositories`)
      if (resultCache !== undefined) return resultCache
      const resultApi = await this.searchInApi<any>('repositories', q)
      await this.create(`${q}-repositories`, resultApi as any)
      return resultApi
    },
    issues: async (q: string) => {
      const resultCache = await this.findOne(`${q}-issues`)
      if (resultCache !== undefined) return resultCache
      const resultApi = await this.searchInApi<any>('issues', q)
      await this.create(`${q}-issues`, resultApi as any)
      return resultApi
    }
  }
}
