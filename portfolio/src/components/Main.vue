<template>
  <div class="view">
    <div class="container-fluid">
      <Welcome v-scroll-reveal></Welcome>
    </div>
    <div class="container-fluid container-phone">
      <div class="row row-center">
        <div v-scroll-reveal.reset="{delay:500}" class="col-md-6">
          
        </div> 
        <div class="col-md-6">
          <LaunchSVG class="launch-svg"></LaunchSVG>
        </div>        
      </div>          
    </div>
    <div class="container">
      <div class="row row-center" v-scroll-reveal.reset>    
          <Browser></Browser>    
      </div>
    </div>
  </div>
</template>

<script>
import Browser from '../components/Browser.vue'
import Welcome from '../components/Welcome.vue'
import PhoneSVG from '../assets/phone.svg'
import LaunchSVG from '../assets/launch.svg'
import Topics from '../components/Topics.vue'

export default {
  name: 'Main',
  props: {
    mainHeader: String
  },
  components: {
    Browser,
    Welcome,
    PhoneSVG,
    Topics,
    LaunchSVG
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../../src/assets/css/prettyprint.css';


.container {
    font-family: $primary-font;
    z-index:100;
    background:#fff;
}

.container-phone {
  padding-right:0;
  padding-left:0;
  margin-right:auto;
  margin-left:auto
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


.phone-svg {
  position:relative;
  height:60vh;
  z-index:100;
  width:20vw;
  padding:5%;
}


.launch-svg {
  position:relative;
  height:70vh;
  z-index:-1;
  width:40vw;
  animation: blinker 5s linear infinite;
}


@keyframes zoomin {
  from {width:80%;}
  to {width:90%;}
}

@keyframes blinker {
  50% {
    opacity: 0.7;
  }
}

</style>