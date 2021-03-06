// import fetch from 'oa/utils/fetch-notoken'
import fetch from 'oa/utils/fetch'
import qs from 'qs'
import { $HTTP } from 'static/yxCmsConfig'
// 获取更新数据
export function fetchtbsj() {
  let data = {
  }
  data = qs.stringify(data)
  return fetch({
    // url: 'https://dsn.apizza.net/mock/a36657f269d8bc38b9979c1bbf019699/uploadList',
    url: `${$HTTP}/enroll/configuration/tbsj`,
    method: 'post',
    data
  })
}
// 查看更新数据
export function fetchcktbsj(cktbsj) {
  console.log(cktbsj);
  let data = {
    page: cktbsj.page,
    pagesize: cktbsj.pagesize
  }
  data = qs.stringify(data)
  return fetch({
    // url: 'https://dsn.apizza.net/mock/a36657f269d8bc38b9979c1bbf019699/addIntroductory',
    url: `${$HTTP}/enroll/configuration/getUpdateRecord`,
    method: 'post',
    data
  })
}