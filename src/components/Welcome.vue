<template>
  <div class="welcome-container">
      <div class="row h-100 row-welcome">
          <div class="col-sm-5 auto-center">
              <h3 id="header-small">Redefining the software industry</h3>
              <h1 id="header-welcome">{ Welcome }</h1>
              <p id="header-paragraph">Hi, I'm Leevi Kopakkala. Software Developer from <span class="color-pink">Jyväskylä</span>, Finland...</p>
              <SocialIcon></SocialIcon>
          </div>  
          <div v-scroll-reveal.reset="{ delay: 500 }" class="col-sm-4 auto-center">
              <WelcomeSVG id="welcome-svg"></WelcomeSVG>
              <!--<div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="leevi-kopakkala"><a class="LI-simple-link" href='https://fi.linkedin.com/in/leevi-kopakkala?trk=profile-badge'>Leevi Kopakkala</a></div>-->
          </div>             
      </div>
      <div class="row">
          <div class="col-lg-6">
            <p id="coordinates">62.2426° N, 25.7473° E</p>
          </div>   
      </div>
      <div class="row">
          <div class="col-sm-12">
              <p v-scroll-reveal.reset="{ delay: 1000 }" class="scroll-down scroll-work" ><font-awesome-icon :icon="['fas', 'fingerprint']"/></p>
            </div>
          <div class="col-sm-12">
           <p  v-scroll-reveal.reset="{ delay: 2500 }" class="scroll-down scroll-text">  Scroll down to see my work </p>
          </div>   
      </div>
  </div>
</template>

<script>
import Browser from '../components/Browser.vue'
import WelcomeSVG from '../assets/spacestars.svg'
import TechPill from '../components/TechPill.vue'
import SocialIcon from '../components/SocialIcon.vue'


export default {
  name: 'Welcome',
  props: {
    mainText: String
  },
  components: {
    Browser,
    WelcomeSVG,
    SocialIcon,
    TechPill
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.welcome-container {
    text-align:left;
    font-family: $primary-font;
    background: none;
    height:100vh;
    padding:10%;
    overflow: hidden;
}

.row-welcome {
    width:90vw !important;  
    z-index:1; 
}

.scroll-down {
    text-align:center;
    font-family: $primary-font;
    opacity:0.5;
    color: $pink;
    z-index:1002;
}

.scroll-work {
    color: #242424;
    font-size: 2em;
    opacity:0.4;
}



#header-welcome {
    color: $primary-dark;
    font-weight: bold;
    font-size: 8em;
    white-space: nowrap;
    z-index: 10;
}

@media only screen and (max-width: 600px) {
  #header-welcome {
      font-size:4em;
      margin-top: 15%;
      margin-bottom: 15%;
  }
}

.svg-welcome {
    height:100%;
}

#header-small {
    color: $pink;
    background: -webkit-linear-gradient(0deg, $pink, rgb(0, 81, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 1.2em;
}

#header-paragraph {
    color: rgb(151, 151, 151);  
    font-size:1.3em;
}

.auto-center {
    margin-top: auto;
    margin-bottom: auto;
    width:90%;
}

.LI-profile-badge {
    z-index:100 !important;
    position:relative;
    background:white;
    font-family: $primary-font !important;
}

#welcome-svg {
    height:120vh;
    left:150px;
    position:absolute;
    bottom:-250px;
    overflow: hidden;
    width:60vw;
}

.color-pink {
    color: $pink;
}

#coordinates {
    margin-left: 10px;
    color: rgb(161, 161, 161);
}

@media only screen and (max-width: 600px) {
    #welcome-svg{
        height:70vh;
    }
}

</style>