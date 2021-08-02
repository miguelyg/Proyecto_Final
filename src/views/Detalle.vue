<template>
  <Nav />
<section class="detalles">
  <div class="container">
    <h1><img src="../assets/images/infor.svg" alt=""> ¿En qué consiste?</h1>
    <p>
    El curso de Electrónica Automotriz está orientado a brindar los conocimientos técnicos en el campo automotriz relacionados con los principios de funcionamiento del sistema electrónico de vehículos automotores que permiten la comprensión y análisis de circuitos electrónicos, sensores, actuadores y ECUs automotrices, desarrollando en los alumnos habilidades y competencias del uso adecuado de herramientas e instrumentos.
    </p>
    <img class="detalles_banner" src="../assets/images/curso.jpg" alt="">
  </div>
</section>

<section class="masDetalles">
  <div class="container">
    <h2><img src="../assets/images/file.svg" alt=""> ¿Por qué estudiar en Idat?</h2>
    <div class="cursos">
        <div class="curso">
          <img src="../assets/images/cursos/curso8.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
        <div class="curso">
          <img src="../assets/images/cursos/curso7.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
      </div>
  </div>
</section>
<section class="duracion">
  <div class="container">
    <h2><img src="../assets/images/file.svg" alt=""> ¿Por qué estudiar en Idat?</h2>
    <div class="cursos">
        <div class="curso">
          <img src="../assets/images/cursos/curso8.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
        <div class="curso">
          <img src="../assets/images/cursos/curso7.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
      </div>
  </div>
</section>
<section class="horarios">
  <div class="container">
    <h2><img src="../assets/images/file.svg" alt=""> ¿Por qué estudiar en Idat?</h2>
    <div class="cursos">
        <div class="curso">
          <img src="../assets/images/cursos/curso8.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
        <div class="curso">
          <img src="../assets/images/cursos/curso7.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
      </div>
  </div>
</section>
<section class="planEstudio">
  <div class="container">
    <h2><img src="../assets/images/file.svg" alt=""> ¿Por qué estudiar en Idat?</h2>
    <div class="cursos">
        <div class="curso">
          <img src="../assets/images/cursos/curso8.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
        <div class="curso">
          <img src="../assets/images/cursos/curso7.png" alt="">
          <div class="curso_contenido">
            <h3>Programa y diseña Macros</h3>
            <p>En los cursos de Excel avanzado aprenderás a utilizar y diseñar Macros de manera profesional.</p>
          </div>
        </div>
      </div>
  </div>
</section>

<router-view/>

</template>

<style scoped>
  .detalles
  {
    font-family: 'robotoregular';
    height: auto;
    width: 60%;
  }

  .detalles_banner
  {
    width: 100%;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  .detalles h1
  {
    padding-top: 20px;
    font-size: 1.6em;
    padding-bottom: 20px;
  }

  .detalles p
  {
    font-family: 'roboto';
    font-size: 1em;
    text-align: justify;
    height: auto;
    padding-left: 25px;
    padding-bottom: 30px;
  }

  .masDetalles
  {
    font-family: 'robotoregular';
    width: 60%;
    padding-bottom: 30px;
  }

  .masDetalles h2
  {
    padding-bottom: 30px;
  }

  .cursos 
  {
    display: grid;
    grid-template-columns: repeat(2, 344px);
    gap: 20px;
    grid-auto-rows: minmax(150px, auto);
    padding-left: 20px;
  }

  .curso
  {
    display: flex;
    background-color: #F8F8FA;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
  }

   .curso h3
  {
    font-size: 1.1em;
  }

  .curso p
  {
    font-size: 0.9em;
  }

  .curso img
  {
    width: 150px;
  }
  .curso_contenido
  {
    flex: auto;
    padding: 30px;
  }

  .duracion
  {
    font-family: 'robotoregular';
    width: 60%;
  }

  .duracion h2
  {
    padding-bottom: 30px;
  }

  .horarios
  {
    font-family: 'robotoregular';
    width: 60%;
  }
  .planEstudio
  {
    font-family: 'robotoregular';
    width: 60%;
  }

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
