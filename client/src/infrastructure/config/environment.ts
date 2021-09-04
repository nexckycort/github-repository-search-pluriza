// Mapper for environment variables
const environment = process.env.NODE_ENV
const apiPath = process.env.REACT_APP_PREFIX_API_V1 ?? ''

const origin = {
  development: process.env.REACT_APP_ORIGIN ?? '',
  production: window.location.origin,
  test: process.env.REACT_APP_ORIGIN ?? ''
}

export const apiUrlV1 = [origin[environment], apiPath].join('/')
