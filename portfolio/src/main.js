import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueScrollReveal from 'vue-scroll-reveal';


import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1200,
  scale: 1,
  distance: '10px',
  mobile: false
});

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
