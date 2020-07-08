<template>
  <div>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
export default {
    props: ['quote']


};


</script>

<style scoped>
div {
    border: 1px solid rgb(216, 130, 177);
    box-shadow: 1px 1px 2px rgba(107, 68, 101, 0.726);
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    font-family: cursive;
}

</style>

