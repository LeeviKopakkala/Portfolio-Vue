
<template>
<div class="row row-center">
    <div class="col-md-4">
        <a class="social-icon" rel="noopener" href="https://linkedin.com/in/leevi-kopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
    </div>
    <div class="col-md-4">
        <a class="social-icon" rel="noopener" href="https://linkedin.com/in/leevi-kopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
    </div>
    <div class="col-md-4">
        <a class="social-icon" rel="noopener" href="https://linkedin.com/in/leevi-kopakkala" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
    </div>
</div>

    
</template>

<script>
export default {
  name: 'Topics',
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
  }  
  a:hover {
      opacity: 0.5;
  }
  .row-center {
     margin: 0 auto;
    }
    
</style>