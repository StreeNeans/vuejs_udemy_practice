<!--T E M P L A T E-->

<template>
    <div class="childscalmsdowns">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text }}</p>
            </div> 
        </div>
    </div>
</template>

<!--T E M P L A T E-->

<!-- --------------------------- -->

<!-- S C R I P T -->

<script>
    export default {
      data:() => ({
          text:'Hewo There Fren!',
      }),
      filters: {
          touppercase(value) {

          },
      },
        
    }
</script>

<!-- S C R I P T -->

<!-- --------------------------- -->

<!-- S T Y L E-->

<style>

</style>

<!-- S T Y L E-->