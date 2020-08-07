import Vue from 'vue'
import CalmsDownsChilds from './App.vue'

Vue.directive('highlight' , {
  bind(el,binding,vnode) {
      //el.style.backgroundColor = 'green';
      //el.style.backgroundColor = binding.value; 
      var delay = 0;
      if (binding.modifiers['delayed']) {
        delay = 3000;
      }
      setTimeout(() => {
        if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
        },delay);
    }
      
});

new Vue({
  el: '#childscalmsdowns',
  render: h => h(CalmsDownsChilds)
})





