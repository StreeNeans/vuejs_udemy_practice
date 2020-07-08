<template>
    <div class="eep">
        <div class="row">
            <div class="col-xs-12">
               <app-quote quote="(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ !Wondahfhul Qhuotez Hereh! 。.:☆*:･'(o∑=)">
                    <h2 class="qt">¸,ø¤º°`°º¤ø,¸¸,ø¤º° Quotez °º¤ø,¸¸,ø¤º°`°º¤ø,¸</h2>
                    <p>To be, or not to be. ThAt is the question.</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import QoutehQuotey from './componentz/Quoteey.vue'
    export default {
        name: 'eep',
        data: () => ({
            qt:'qouteTitle',
        }),
 
        components: {
            appQuote: QoutehQuotey
        },

    }
</script>



<style>

.quoteTitle {
    font-family: 'Yellowtail', cursive;
}
</style>


  