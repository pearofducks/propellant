import Vue from 'vue'
import App from './App'
import propellant from 'prpllnt'
import 'prpllnt/scss/demo.scss'

Vue.use(propellant)

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  render: h => h(App)
})
