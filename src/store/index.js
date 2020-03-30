import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 导出一个创建的仓库
export default new Vuex.Store({
  state,
  mutations
})
