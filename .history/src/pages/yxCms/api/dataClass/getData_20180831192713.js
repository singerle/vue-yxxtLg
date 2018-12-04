// import fetch from 'oa/utils/fetch-notoken'
import fetch from 'oa/utils/fetch'
import qs from 'qs'
import { $HTTP } from 'oa/utils/config'
// 获取更新数据
export function fetchbjlb(data) {
  data = qs.stringify(data)
  return fetch({
    url: `${$HTTP}/enroll/sjdc/bjlb`,
    method: 'post',
    data
  })
}
// 查看更新数据
export function fetchbjsj(data) {
  data = qs.stringify(data)
  return fetch({
    url: `${$HTTP}/enroll/sjdc/bjsj`,
    method: 'post',
    data
  })
}