import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App.vue'

import store from './store'

import Button from './components/Button.vue'
import PaddingContainer from './components/PaddingContainer.vue'
import ArrowIcon from './components/ArrowIcon.vue'
import ProductCard from './components/ProductCard.vue'
import Footer from './components/Footer.vue'
import BannerTop from './components/BannerTop.vue'
import ProductContainer from './components/ProductContainer.vue'
import Input from './components/Input.vue'

Vue.use(VueRouter)

Vue.component('app-button', Button)
Vue.component('padding-container', PaddingContainer)
Vue.component('arrow-icon', ArrowIcon)
Vue.component('product-card', ProductCard)
Vue.component('app-footer', Footer)
Vue.component('banner-top', BannerTop)
Vue.component('product-container', ProductContainer)
Vue.component('app-input', Input)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
