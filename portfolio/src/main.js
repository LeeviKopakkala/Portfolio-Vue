import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

// Import Components
import HelloWorld from './components/HelloWorld'

// Routes
const routes = [
	{ path: '/', component: HelloWorld },
	{ path: '/test', component: HelloWorld },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
