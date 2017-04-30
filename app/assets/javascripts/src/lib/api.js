import axios from 'axios'
import _ from 'lodash'

const host = {
  development: 'http://localhost:3100',
  test: 'http://localhost:3100',
  production: 'http://xxx.com',
}[process.env.NODE_ENV]

const api = axios.create({
  baseURL: `${host}/api`,
})

api.interceptors.request.use((config) => {
  config.data = _.snakecaseKeys(config.data)
  return config
})

api.interceptors.response.use((res) => {
  res.data = _.camelcaseKeys(res.data)
  return res
})

export default api
