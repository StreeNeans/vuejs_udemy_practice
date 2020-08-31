<!--T E M P L A T E-->

<template>
    <div class="childscalmsdowns">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpperCase | tolowerCase}}</p>
                <hr>
                    <input v-model="filterText">
                    <ul>
                        <li v-for="fruit in filteredFruits" v-bind:key="fruit" >{{ fruit }}</li>
                    </ul>
                <hr>
                
            </div> 
        </div>
    </div>
</template>

<!--T E M P L A T E-->

<!-- --------------------------- -->

<!-- S C R I P T -->

<script>
    import CalmsingChilds from './ListingRees.vue';

    export default {
        name:'childscalmsdowns',
        data:() => ({
          text:'Hewo There Fren!',
          fruits: ['Acerola', 'Apricots','Avocado','Blackberries','Berries','Berry','Blackcurrant','Blueberries','Breadfruit','Cantaloepe','Carambola','Cherimoya','Cherries','Clementine','Coconut','Coconut Meat','Cranberries','Custard-Apple','Custard Apple','Date','Dates','Date Fruit','Durian'],
          filterText:'',
        }),
        filters: {
          toUpperCase(value) {
              return value.toUpperCase();
          },
        },
        computed: {
          filteredFruits() {
              return this.fruits.filter((element) => {
                  return element.match(this.filterText);
              });
          }
      },

        components:{
            appList : CalmsingChilds
        }
        
    }
</script>

<!-- S C R I P T -->
     b      
<!-- --------------------------- -->

<!-- S T Y L E-->

<style>

</style>

<!-- S T Y L E-->      