import Vue from 'vue'
import CalmsDownsChilds from './Apple.vue'
import CalmsingChilds from './ListingRees'

Vue.filter('tolowerCase', function(value){
  return value.toLowerCase();
});

new Vue({
  el: '#childscalmsdowns',
  render: h => h(CalmsDownsChilds)
})

new Vue({
  el: '#childscalms',
  render: h => h(CalmsingChilds)
})





