import request from '@/utils/request'

export function login(data: any) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token: string) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post',
  })
}
