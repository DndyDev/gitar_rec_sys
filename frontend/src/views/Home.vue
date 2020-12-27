<template>
  <div class="home">
    <img alt="Dandy logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome"/>-->
    <h1>Welcome</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
