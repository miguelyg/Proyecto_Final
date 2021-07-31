<template>
  <Header/>	
    <Listado />
    <Aviso />
    <Beneficios />
    <Footer />
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'
import Listado from '@/components/Listado.vue'
import Aviso from '@/components/Aviso.vue'
import Beneficios from '@/components/Beneficios.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Listado,
    Aviso,
    Beneficios,
    Footer
  }
}
</script>

<style>

</style>