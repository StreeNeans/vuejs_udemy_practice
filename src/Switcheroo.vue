<template>
    <div id="childscalmedsdowns">
        <div
                id="on"
                @click="value = (true)"
                :class="{active: value}">On</div>
        <div
                id="off"
                @click="value = (false)"
                :class="{active: !value}">Off</div>
    </div>
</template>

<!--T E M P L A T E-->

<!-- --------------------------- -->

<!-- S C R I P T -->

<script>
    export default {
      data:() => ({
        isOn: true,
      }),
      props: ['value'],

      methods: {
          switched(isOn){
              this.$emit('input', isOn);
          }
      }
    }
</script>

<!-- S C R I P T -->

<!-- --------------------------- -->

<!-- S T Y L E-->

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>



