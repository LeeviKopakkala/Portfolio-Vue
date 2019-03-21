
<template>
<div>
    <a class="social-icon" rel="noopener" href="https://linkedin.com/in/leevi-kopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
    <a class="social-icon" rel="noopener" href="https://github.com/LeeviKopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" /></a>
    <a class="social-icon" rel="noopener" href="https://instagram.com/leevikopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'instagram']" /></a>
</div>
    
</template>

<script>
export default {
  name: 'SocialIcon',
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
</style>