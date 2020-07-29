import Vue from 'vue'
import CalmsDownsChilds from './App.vue'
import CalmedsChilds from './Switcheroo.vue'

new Vue({
  el: '#childscalmsdowns',
  render: h => h(CalmsDownsChilds)
}),

new Vue({
  el: '#childscalmedsdowns',
  render: h => h(CalmedsChilds)
})



