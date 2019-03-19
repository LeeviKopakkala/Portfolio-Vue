<template>
  <div class="view">
    <div class="container-fluid">
      <Welcome></Welcome>
    </div>
    <div class="container">
      <div class="row row-center">      
          <Browser></Browser>
      </div>
    </div>
  </div>
</template>

<script>
import Browser from '../components/Browser.vue'
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Main',
  props: {
    mainHeader: String
  },
  components: {
    Browser,
    Welcome
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../../src/assets/css/prettyprint.css';

.container {
    font-family: $primary-font;
}
.container-fluid {
  padding-right:0;
    padding-left:0;
    margin-right:auto;
    margin-left:auto
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