import axios from 'axios'

const host = {
  development: 'http://localhost:3100',
  test: 'http://localhost:3100',
  production: 'http://xxx.com',
}[process.env.NODE_ENV]

const api = axios.create({
  baseURL: `${host}/api`,
})

export default api
