import axios, { type AxiosRequestConfig } from 'axios'

const request = axios.create({
  // baseURL: 'https://shop.fed.lagounews.com'
  baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 统一设置用户身份 token
  return config
}, async function (error) {
  // Do something with request error
  return await Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
//   统一设置错误回调
  return response
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return await Promise.reject(error)
})
export default < T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
