
<template>
<div :class="['tech-pill', color]">
    <p>{{ technology }}</p>
</div>
    
</template>

<script>
export default {
  name: 'TechPill',
  props: {
    technology: String,
    color: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tech-pill {
      font-family: $primary-font;
      display:inline-block;
      font-size:1em;
      border-radius: 25px;
      text-align:center;
      padding: 2px 12px 2px 12px;
      margin: 10px;
      height:25px;
      color:white;
      -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.288), 0 2px 4px rgba(0, 0, 0, 0.308);
    opacity: 1;
    margin: 10px;
  }  
  .tech-pill:hover {
      opacity: 0.5;
  }
  .green {
      background-color: rgb(74, 216, 121);
  }
  .red {
      background-color: rgb(255, 45, 98);
  }
  .blue {
      background-color: rgb(53, 100, 255);
  }
  .yellow {
      background-color: rgb(230, 233, 58);
  }
  .pink {
      background-color: $pink;
  }
</style>