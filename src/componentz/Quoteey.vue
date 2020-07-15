<template>
  <div>
    <div class="title" > 
        <slot name="title"  ></slot>
        <span>
            <slot name="subtitle" >˜”*°•.˜”*°• Lots Of Quotes •°*”˜.•°*”˜</slot>
        </span>
    </div>
    <hr>
    <div>
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      quoteTitle:'¸,ø¤º°`°º¤ø,¸¸,ø¤º° Quotez °º¤ø,¸¸,ø¤º°`°º¤ø,¸',
      subtitle: 'subt',
      
  }),
};


</script>

<style scoped>
div{
    border: 1px solid rgb(216, 130, 177);
    box-shadow: 1px 1px 2px rgba(107, 68, 101, 0.726);
    padding: 30px;
    margin: 10px auto;
    text-align: center;
    font-family: cursive;
}
h2 {
    color: rgb(201, 174, 209);
}

.title {
    font-style: italic;
}

p {
    font-size: 15px;
}
</style>

TeMpLaTe

<p>{{ quote }}</p>

ScRiPt

 props: ['quote']
