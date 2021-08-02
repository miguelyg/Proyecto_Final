<template>
  <Nav />
  <section class="detalles">
    <h1>¿En qué consiste?</h1>
  </section>
  <section>
      
  </section>
  <router-view/>

</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import {mapActions} from 'vuex'
import {mapState} from 'vuex';

export default {
  name: 'Detalle',
  components: {
   Nav
  },
  computed:{
    ...mapState(['curso']),
  },
  methods:{
    ...mapActions(['getCursoAction']),
  },
  created()
  {
    this.getCursoAction(this.$route.params.id);
    console.log(this.curso);
  }
}
</script>
