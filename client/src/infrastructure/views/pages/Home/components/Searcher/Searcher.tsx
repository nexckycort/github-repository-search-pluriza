import React, { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

import { Input, Loader, Select } from 'infrastructure/views/components/ui'
import { searchService } from 'domain/services/search.service'
import { ResponseApiGithubUserDTO } from 'infrastructure/dto/ResponseApiGithubUserDTO'
import { ResponseApiGithubRepositorieDTO } from 'infrastructure/dto/ResponseApiGithubUserDTO copy'

interface Props {
  setUsers: React.Dispatch<React.SetStateAction<ResponseApiGithubUserDTO | undefined>>
  setRepositories: React.Dispatch<React.SetStateAction<ResponseApiGithubRepositorieDTO | undefined>>
}

const Searcher: React.FC<Props> = ({ setUsers, setRepositories }) => {
  const [typeSearch, setTypeSearch] = useState<'users' | 'repositories'>('users')

  const [qSearch, setQSearch] = useState('')

  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')

  const [error, setError] = useState('')

  const searchAsync = async () => {
    const { error, response } = await searchService.byType<ResponseApiGithubUserDTO | ResponseApiGithubRepositorieDTO>({
      q: qSearch,
      type: typeSearch
    })
    if (error) {
      throw new Error(response.message)
    }
    return response.data
  }

  const delayedSearch = useCallback(
    debounce(() => {
      setUsers(undefined)
      setRepositories(undefined)
      setStatus('pending')
      searchAsync()
        .then((result) => {
          setStatus('success')
          if (typeSearch === 'users') setUsers(result as ResponseApiGithubUserDTO)
          else if (typeSearch === 'repositories') setRepositories(result as ResponseApiGithubRepositorieDTO)
        })
        .catch((error) => {
          setStatus('error')
          setError(error.message)
        })
    }, 1000),
    [qSearch, typeSearch]
  )

  const options = [
    {
      text: 'Users',
      value: 'users'
    },
    {
      text: 'Repositories',
      value: 'repositories'
    }
  ]

  useEffect(() => {
    if (qSearch.length >= 3) {
      delayedSearch()
    } else {
      setUsers(undefined)
      setRepositories(undefined)
    }
    return delayedSearch.cancel
  }, [qSearch, typeSearch, delayedSearch])

  return (
    <div className="pt-4">
      <h1>GitHub Searcher</h1>
      <p>Search users of repositories below</p>
      {status === 'error' && <span>{error}</span>}
      {status === 'pending' && <Loader />}
      <div className="row">
        <div className="col-lg-5 col-md-8 col-sm-8">
          <Input type="text" className="form-control" placeholder="Start typing to search .." onInput={setQSearch} />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4">
          <Select className="form-select" options={options} onChange={setTypeSearch} />
        </div>
      </div>
    </div>
  )
}

export default Searcher
