export interface Search {
  total_count: number
  incomplete_results: boolean
  items: any[]
}

export interface NewSearch {
  type: string
  q: string
}

export const SEARCH_TYPE = ['users', 'repositories', 'issues']
