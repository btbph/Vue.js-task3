import Vue from 'vue'
import App from './App'
import ShowName from './components/ShowName'

Vue.component('ShowName', ShowName)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
