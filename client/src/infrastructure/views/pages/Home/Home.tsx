/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react'

import { ResponseApiGithubUserDTO } from 'infrastructure/dto/ResponseApiGithubUserDTO'
import { ResponseApiGithubRepositorieDTO } from 'infrastructure/dto/ResponseApiGithubUserDTO copy'

import { Searcher } from './components'

const Home: React.FC = () => {
  const [users, setUsers] = useState<ResponseApiGithubUserDTO>()
  const [repositories, setRepositories] = useState<ResponseApiGithubRepositorieDTO>()

  return (
    <>
      <Searcher setUsers={setUsers} setRepositories={setRepositories} />
      <div className="row mt-4">
        {users !== undefined
          ? users.items.map((user, index) => {
              return (
                <div key={`user-${index}`} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div className="card">
                    <img src={user.avatar_url} width="100%" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Name: {user.login}</h5>
                      <a href={user.html_url} target="_blank" className="btn btn-primary">
                        Go to profile
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          : repositories !== undefined
          ? repositories.items.map((repositorie, index) => {
              return (
                <div key={`repositorie-${index}`} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div className="card">
                    <img src="https://via.placeholder.com/300x150" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Name: {repositorie.name}</h5>
                      <p className="card-text">Author: {repositorie?.owner?.login ?? ''}</p>
                      <p className="card-text">Stars: {repositorie.stargazers_count}</p>
                      <p className="card-text">description: {repositorie.description}</p>
                      <a href={repositorie.html_url} target="_blank" className="btn btn-primary">
                        Go to repository
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          : null}
      </div>
    </>
  )
}

export default Home
