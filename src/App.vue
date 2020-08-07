<!--T E M P L A T E-->

<template>
    <div class="childscalmsdowns">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6  col-md=offset-3">
        <h1>Built in Directives</h1>
        <p v-text="'Boring Normal Text'"></p>
        <p v-html="'<strong> Cool Strong Text </strong>'"></p>
      </div>
        <hr>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6  col-md=offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'">Color Me!</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor:'green', delay:500}">Color Me Too!</p>
    </div>
    </div>
</template>

<!--T E M P L A T E-->

<!-- --------------------------- -->

<!-- S C R I P T -->

<script>
    export default {
      data:() => ({
      }),
      directives: {
        'local-highlight': {
          bind(el,binding,vnode){
            var delay = 0;
            if (binding.modifiers['delayed']) {
                delay = 3000;
            }
            if (binding.modifiers['blink']) {
                let mainColor = binding.value.mainColor;
                let secondColor = binding.value.secondColor;
                let currentColor = mainColor;
                setTimeout(() => {
                  setInterval(() => {
                    currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                    if (binding.arg == ['background']) {
                      el.style.backgroundColor = currentColor; 
                    } else {
                        el.style.color = currentColor;
                    }
                    }, binding.value.delay);
                  
              }, delay);
            } else {
              setTimeout(() => {
                if (binding.arg == ['background']) {
                  el.style.backgroundColor = binding.value.mainColor; 
                } else {
                  el.style.color = binding.value.mainColor;
                }
              }, delay);
            } 
            
          }
        }
      },
        
    }
</script>

<!-- S C R I P T -->

<!-- --------------------------- -->

<!-- S T Y L E-->

<style>

</style>

<!-- S T Y L E-->