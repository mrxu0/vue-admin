import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    login (state) {
      state.login = true
    },
    logout (state) {
      state.login = false
    }
  },
  actions: {
    toLogin () {
      return axios.post(`/admin/login`)
    }
  }
})
