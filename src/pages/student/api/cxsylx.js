import { getDataApi } from './getDataApi'

//查询学生生源类型
export const cxsylxData = (params) => {
	return getDataApi('student/cxsylx',params)
}