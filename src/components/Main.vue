<template>
  <div class="view">
    <div class="container-fluid">
      <Welcome v-scroll-reveal></Welcome>
    </div>
    <div class="container-fluid">
      <div class="space-container">
            <SpaceSVG id="space-svg"></SpaceSVG>      
        </div> 
    </div>
    <div class="container-fluid container-phone">
      <div class="row row-center">
        <div class="col-md-3">
          
        </div>
        <div class="col-md-4 col-article">
          <h2 class="small-header">Commitment to every project</h2>
          <h1 class="large-header">From coffee table to launch</h1>
          <p class="paragraph-text">Every project is an opportunity to learn - And every project is a dream to be fulfilled.<br>
          </p>
          <p class="paragraph-text">In the rapidly evolving world, even the tiniest innovation can spring a revolutionary product. 
          But this requires commitment from each team member who's involved with it.<br>
          </p>
          <p class="paragraph-text">I'm up for the challenge.</p>
          <div class="contact-button" v-on:click="scrollTo"><p class="button-text">Hire me</p></div>
        </div> 
        <div v-scroll-reveal="{ delay: 100, distance: '200px', }" class="col-md-4">
          <LaunchSVG class="launch-svg"></LaunchSVG>
        </div>   

      </div>            
    </div>
    <div id="contact"> </div>  
    <div style="padding:40px"></div>
    
    <div class="container">
      <div class="row row-center" v-scroll-reveal.reset>    
          <Browser></Browser>    
      </div>
    </div>
    <div class="container tech-container">
        <div class="row row-center">
          <div class="col-lg-6 tech-col">
            <h1 class="tech-header">- Frameworks -</h1>
            <TechPill color="green" technology="Vue.JS"></TechPill>
            <TechPill color="red" technology="Angular"></TechPill>
            <TechPill color="blue" technology="React"></TechPill>
            <TechPill color="blue" technology="Nativescript"></TechPill>
            <TechPill color="blue" technology="Laravel"></TechPill>
          </div>
          <div class="col-lg-6 tech-col">
            <h1 class="tech-header">- Languages -</h1>
            <TechPill color="blue" technology="Typescript"></TechPill>
            <TechPill color="blue" technology="PHP"></TechPill>
            <TechPill color="yellow" technology="Javascript"></TechPill>
            <TechPill color="yellow" technology="C#"></TechPill>
            <TechPill color="red" technology="HTML"></TechPill>
            <TechPill color="pink" technology="SASS"></TechPill>
          </div>
        </div>
      </div>
    <div class="container">
      <div class="row row-center">
        <div class="col-md-12">
          <p class="copyright"><i><span class="color-pink">" </span>There lies a possibility in every contact.<span class="color-pink"> "</span> </i> </p>
          <p class="copyright"> © <span class="color-pink">2019</span> Leevi Kopakkala | Handcrafted with <span class="green-vue">Vue JS</span> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Browser from '../components/Browser.vue'
import Welcome from '../components/Welcome.vue'
import PhoneSVG from '../assets/phone.svg'
import LaunchSVG from '../assets/launch.svg'
import BlueprintSVG from '../assets/blueprint.svg'
import Topics from '../components/Topics.vue'
import TechPill from '../components/TechPill.vue'
import SpaceSVG from '../assets/purespace.svg'

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
    LaunchSVG,
    TechPill,
    BlueprintSVG,
    SpaceSVG
  },
  // define methods under the `methods` object
  methods: {
    scrollTo: function (event) {
      location.href = "#contact";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../../src/assets/css/prettyprint.css';

.view {
  background: none;
}
.container {
    font-family: $primary-font;
    z-index:100;
    background:none;
}

.container-phone {
  padding-right:0;
  padding-left:0;
  margin-right:auto;
  margin-left:auto;
  margin-top: 10%;
  background: none;
}

.tech-container {
  margin-top: 0;
  padding:10px;
  padding-bottom: 0;
  font-family: $primary-font !important;
  top: 0;
}



.tech-header {
  color: rgb(143, 143, 143);
  font-size:1em;
}

.tech-col {
  opacity:1;
  margin-bottom: 10%;
}

.green-vue {
  color: rgb(0, 245, 110);
}

@media  only screen and (max-width: 600px) {
  .tech-col {
    margin-top: 0%;
  }
  .tech-container {
    margin-top: 0%;
  }
}

.blueprint-svg {
  position:absolute;
  width: 100%;
  height:50vh;
  left:0;
  margin-top:-2%;
  opacity:0.5;
}
.space-container {
  overflow:hidden;
}
#space-svg {
  height:120vh;
  right:150px;
  position:absolute;
  width:35vw;
}

@media  only screen and (max-width: 1200px) {
   #space-svg {
    display:none;
  }
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
  opacity:1;
}


.launch-svg {
  position:relative;
  height:70vh;
  z-index:1;
  width:40vw;
  animation: blinker 5s linear infinite;
}

.contact-me {
  text-align:center;
  font-family: $primary-font;
  color: $primary-dark;
  font-size:3em;
  margin-top:30%;
}

.col-article {
  margin-top: 0%;
  text-align:left;
  font-family: $primary-font;
}

.large-header {
  color: $primary-dark;
}

.small-header {
  color: $pink;
  font-size:1.5em;
}

.paragraph-text {
  color: $primary-dark;
  font-family: $primary-font;
  font-size: 1.1em;
  margin-top:5%;
}

.copyright {
  font-family: $primary-font;
  color: $primary-dark;
}

.contact-button {
  -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  margin-top: 5%;
  cursor: pointer;
  background: $pink;
  border-radius: 1px 25px 25px 25px;
  width: 100px;
  color: white;
  font-family: $primary-font;
  text-align:center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.288), 0 2px 4px rgba(0, 0, 0, 0.308);
  .button-text{
    top:50%;
    padding: 10px;
  }
}

.contact-button:hover {
  opacity: 0.8;
}

@media only screen and (max-width: 600px) {
  .contact-me {
    font-size:2em;
  }
}

.color-pink {
  color: $pink;
}

@keyframes zoomin {
  from {width:80%;}
  to {width:90%;}
}

@keyframes blinker {
  0% {
    opacity: 1.0;
  }
  50% {
    opacity: 0.99;
  }
  75% {
    opacity: 1.0;
  }
  100% {
    opacity: 1.0;
  }
}

</style>