<template>
<div id="exercise">
  <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
  <div>
    <button @mouseover="startEffect">Start Effect</button>
    <div id="effect" :class="nena"  ></div>
  </div>
  <!-- 2) Create a couple of CSS styles and attach them via the array syntax -->
  <div :style="[myStyle, dadStyle]">here</div>
  <!-- 2b) Create a couple of CSS classes and attach them via the array syntax -->
  <div :class="[lb, lbw]">stuff</div>
  <!-- 3) Let the user enter a class (create some example classes) and attach it -->
  <div>
    <div :class="[imgonnachnge, itoowillchange, tof]">
      <div>im changin</div>
    </div>
    <input type="text" placeholder="change me" v-model="imgonnachnge">
    
  </div>
  <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
  <div>
    <input type="text" v-model="itoowillchange"><label>which class</label>
    <input type="text" v-model="shouldishrink" placeholder='border'><label>border</label>
  </div>
  <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
  <div>
    <input type="text">
    <div></div>
  </div>
  <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
  <div>
    <button @click="startProgress">Start Progress</button>
    <div :class="[done]" :style="[progressBar]">{{progress}} {{progressStatus}}</div>       
  </div>
</div>
</template>

<script>
export default {

  el: 'exercise',
  data: () => ({
      nena:'highlight',
      color: 'lightblue',
      lb:'lightblue',
      lbw: 'lightbluewidth',
      imgonnachnge: 'lightblue',
      itoowillchange: 'highlight',
      shouldishrink: 'false',
      progress: 0,
      progressDone: false,
      hi:false,
  }),
  methods: {
    startEffect: function() {
      if(this.nena=="highlight") {
        this.nena="shrink";
      } else if(this.nena=="shrink") {
        this.nena="highlight";
      }
    },
    startProgress: function() {
        let interval = setInterval(() => {
          if(this.progress >= "100") {
            console.log("calling setInterval")
            clearInterval(interval);
            this.progressDone = true;
            return;
          }
          this.progress++;
        }, 1000);
    },
    
  },
   computed: {
    myStyle: function() {
      return {
          backgroundColor: this.color,
      }
    },
    progressBar: function() {
        return {
          width: `${this.progress}px`, 
        }
    },
    tof: function() {
      if(this.shouldishrink == "true") {
          return 'bordered'
      } else {
          return '';
      }
    },
    dadStyle: function(){
      return {
          color: this.color,
      }
    },
    progressStatus: function() {

        if(this.progressDone) {
          return 'Done';
        }else {
          return 'not done';
        }
    },
    done: function() {
      if (this.progressDone) { 
        return 'progressDone';
      } else {
        return this.lb
      }
    }
  }
}

</script>

<style lang="scss">
#effect {
  width: 100px;
  height: 100px;
  border: 2px solid rgb(244, 255, 240);
}
.effect{
  height:100px;
  border:30px solid navajowhite;
  background-color: beige;
}
.highlight {
  background-color: red;
  width: 200px !important;
  transition: all 1s;
}

.shrink {
  background-color: gray;
  width: 500px !important;
  transition: all 1s;
}

.lightblue {
  background-color: lightblue;
}

.lightbluewidth {
  background-color:lightcoral;
  width:120px;
}
.center {

  display: flex;
    align-items: center;
    justify-content: center;
}
.bordered {
  border: 20px solid red;
}
.progressDone {
  background-color:green;
}


</style>
