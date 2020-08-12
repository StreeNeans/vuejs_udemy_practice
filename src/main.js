import Vue from 'vue'
import CalmsDownsChilds from './App.vue'

Vue.filter('to-lowercase');

new Vue({
  el: '#childscalmsdowns',
  render: h => h(CalmsDownsChilds)
})





