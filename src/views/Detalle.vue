<template>
  <Nav />
  <section class="detalles">
    <h1>¿En qué consiste?</h1>
  </section>
  <h1>¿En qué consiste?</h1>
  <h1>¿En qué consiste?</h1>
  <h1>¿En qué consiste?</h1>
  <h1>¿En qué consiste?</h1>
  <h1>¿En qué consiste?</h1>
  <router-view/>

</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'Detalle',
  components: {
   Nav
  }
}
</script>
