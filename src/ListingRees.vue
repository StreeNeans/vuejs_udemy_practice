<!--T E M P L A T E-->

<template>
    <div class="childscalms">
        
    </div>
</template>

<!--T E M P L A T E-->

<!-- --------------------------- -->

<!-- S C R I P T -->

<script>
    export default {
        name:'childscalms',
        data:() => ({
          fruits: ['Acerola', 'Apricots','Avocado','Blackberries','Berries','Berry','Blackcurrant','Blueberries','Breadfruit','Cantaloepe','Carambola','Cherimoya','Cherries','Clementine','Coconut','Coconut Meat','Cranberries','Custard-Apple','Custard Apple','Date','Dates','Date Fruit','Durian'],
          filterText:'',
        }),
       computed: {
          filteredFruits() {
              return this.fruits.filter((element) => {
                  return element.match(this.filterText);
              });
          }
      }, 
    }
</script>

<!-- S C R I P T -->
     b      
<!-- --------------------------- -->

<!-- S T Y L E-->

<style>

</style>

<!-- S T Y L E-->      