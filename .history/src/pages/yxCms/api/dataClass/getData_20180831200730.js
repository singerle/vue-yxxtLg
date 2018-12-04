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
// 导出学生确认单
export function fetchbjsj(data) {
  data = qs.stringify(data)
  return fetch({
    url: `${$HTTP}/enroll/sjdc/bjsj`,
    method: 'post',
    data
  })
}
// 导出汇总表
export function fetchbjbdsj(data) {
    data = qs.stringify(data)
    return fetch({
      url: `${$HTTP}/enroll/sjdc/bjbdsj`,
      method: 'post',
      data
    })
  }