import Vue from 'vue'
import Vuex from 'vuex'
import quran from './modules/quran'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    quran
  }
})
