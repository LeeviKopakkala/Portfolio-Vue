<template>
  <div id="app">
    <Main mainHeader="Welcome" ></Main>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Main,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
