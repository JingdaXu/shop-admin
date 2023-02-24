// 公共基础接口封装
import request from '@/utils/request'

// 方法四需要该接口
// interface ResponseData <T = any> {
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  // 如果需要status和msg，修改utils里面的返回值
  return request<{
    logo_square: string
    logo_rectangle: string
    login_logo: string
    slide: string[]
  }>({
    method: 'GET',
    url: '/login/info'
  })
// 方法一
//   return request({
//     method: 'GET',
//     url: '/login/info'
//   })
// 方法二
//   return request.get('/login/info')
// 方法三
//   return request.get<{
//     status: string
//     msg: string
//     data: {
//       logo_square: string
//       logo_rectangle: string
//       login_logo: string
//       slide: string[]
//     }
//   }>('/login/info')
// 方法四
  // return request.get< ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }> >('/login/info')
}
