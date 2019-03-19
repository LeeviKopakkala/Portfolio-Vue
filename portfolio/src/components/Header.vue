<template>
  <div class="container">
    <div class="row row-center">
        <Browser></Browser>
    </div>
  </div>
</template>

<script>
import Browser from '../components/Browser.vue'

export default {
  name: 'Header',
  props: {
    mainHeader: String
  },
  components: {
    Browser
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../../src/assets/css/prettyprint.css';

.container {
    font-family: $primary-font;
}
.header-text {
    height:200px;
}
.main-header {
    display:inline-block;
    height:auto;
    font-size:2em;
    vertical-align: middle;
}

.row-center {
     margin: 0 auto;
}


@keyframes zoomin {
  from {width:80%;}
  to {width:90%;}
}

</style>