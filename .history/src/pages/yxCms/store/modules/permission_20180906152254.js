import {stateRoute, activeRoute} from 'oa/router'
const permission = {
  state: {
    routers: stateRoute, // 用于导航栏显示
    addRouters: [] // 动态添加的路由表
  },
  mutations: {
    SET_ROUTER: (state, routers) => {
      console.log(stateRoute)
      state.addRouters = routers
      stateRoute.splice(2,1)
      console.log(stateRoute)
      state.routers = stateRoute.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({commit}, data) {
      // 到时候动态的添加路由
      return new Promise((resolve) => {alert(1)
        commit('SET_ROUTER', activeRoute)
        resolve(true)
      })
    }
  }
}
export default permission
