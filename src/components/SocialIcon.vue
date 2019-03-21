
<template>
<div>
    <a class="social-icon" rel="noopener" href="https://linkedin.com/in/leevi-kopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
    <a class="social-icon" rel="noopener" href="https://github.com/LeeviKopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" /></a>
    <a class="social-icon" rel="noopener" href="https://instagram.com/leevikopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'instagram']" /></a>
    <br>
    <div class="button-group">   
      <div class="contact-button" v-on:click="scrollTo"><span class="button-text">Contact</span></div>with my experience
    </div>  
</div>
    
</template>

<script>
export default {
  name: 'SocialIcon',
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
  .social-icon {
      color:$primary-dark;
      font-size:2em;
      -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
    margin: 10px;
  }  
  a:hover {
      opacity: 0.5;
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
  padding:10px;
  margin:2%;
  color: white;
  font-family: $primary-font;
  text-align:center;
  display:inline-block;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.288), 0 2px 4px rgba(0, 0, 0, 0.308);
  .button-text{
    top:50%;
    padding: 10px;
  }
}

.contact-button:hover {
  opacity: 0.8;
}

.button-group {
  
}
</style>