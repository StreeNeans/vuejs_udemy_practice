<template>
  <div class="eep">
    <div class="row" >
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Just Quotes</button>
        <button @click="selectedComponent = 'appAuthor'">Quotes by Authors</button>
        <button @click="selectedComponent = 'appNew'">New Quotes</button>
        <hr>
         <p>{{ selectedComponent}}</p>
        <component :is="selectedComponent">
        </component>
        <!--<app-quote>
            <h2 slot="title" >{{ quoteTitle }}</h2>
          <p slot="content">To be, or not to be: that is the question.</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import QoutehQuotey from "./componentz/Quoteey.vue";
import Thorsday from "./componentz/Thor.vue";
import Newzyboyz from "./componentz/Newzflash.vue";
export default {
  name: "eep",
  data: () => ({
      quoteTitle:'¸,ø¤º°`°º¤ø,¸¸,ø¤º° Quotez °º¤ø,¸¸,ø¤º°`°º¤ø,¸',
      selectedComponent: 'appQuote',
  }),

  components: {
    appQuote: QoutehQuotey,
    appAuthor: Thorsday,
    appNew: Newzyboyz,
  }
};
</script>

<style >
h2 {
    color: rgb(201, 174, 209);
}

p {
    font-size: 15px;
}



.div {
    border: 1px solid rgb(216, 130, 177);
    box-shadow: 1px 1px 2px rgba(107, 68, 101, 0.726);
    padding: 30px;
    margin: 10px auto;
    text-align: center;
    font-family: cursive;
}
</style>

TeMpLaTe

  quote="(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ !Wondahfhul Qhuotez Hereh! 。.:☆*:･'(o∑=)"
  
     