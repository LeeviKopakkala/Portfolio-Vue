<template>
  <div class="welcome-container">
      <div class="row h-100 row-welcome">
          <div class="col-sm-5 auto-center">
              <h3 id="header-small">Redefining the software industry</h3>
              <h1 id="header-welcome">{ Welcome }</h1>
              <p id="header-paragraph">Development through creativity</p>
          </div>  
          <div class="col-sm-7 auto-center col-browser">
          </div>
              
      </div>
  </div>
</template>

<script>
import Browser from '../components/Browser.vue'
export default {
  name: 'Welcome',
  props: {
    mainText: String
  },
  components: {
    Browser
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.welcome-container {
    text-align:left;
    font-family: $primary-font;
    background-color: $primary-dark;
    height:100vh;
    padding:10%;
}

.row-welcome {
    width:90vw !important;   
}

#header-welcome {
    color: white;
    font-weight: bold;
    font-size: 8em;
}

@media only screen and (max-width: 600px) {
  #header-welcome {
      font-size:4em;
  }
}

#header-small {
    color: $pink;
    font-weight: bold;
    font-size: 1.2em;
}

#header-paragraph {
    color: rgb(223, 223, 223);  
}

.auto-center {
    margin-top: auto;
    margin-bottom: auto;
    width:90%;
}


</style>