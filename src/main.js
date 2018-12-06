import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGridLayout from 'vue-grid-layout'
import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.scss'
Vue.config.productionTip = false
Vue.use(VueGridLayout.GridLayout)
Vue.use(VueGridLayout.GridItem)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
