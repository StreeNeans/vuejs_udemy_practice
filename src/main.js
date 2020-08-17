import Vue from 'vue'
import CalmsDownsChilds from './App.vue'

Vue.filter('tolowerCase', function(value){
  return value.toLowerCase();
});

new Vue({
  el: '#childscalmsdowns',
  render: h => h(CalmsDownsChilds)
})





