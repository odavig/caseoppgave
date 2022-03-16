import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App.vue'

import Button from './components/design/Button.vue'
import Container from './components/design/Container.vue'
import ArrowIcon from './components/design/ArrowIcon.vue'
import Cards from './components/design/Cards.vue'
import Footer from './components/Footer.vue'

Vue.use(VueRouter)

Vue.component('app-button', Button)
Vue.component('app-container', Container)
Vue.component('app-arrow-icon', ArrowIcon)
Vue.component('app-cards', Cards)
Vue.component('app-footer', Footer)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
