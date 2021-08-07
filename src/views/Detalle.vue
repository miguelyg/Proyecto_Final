<template>
  <Nav />
<section class="detalles">
  <div class="container">
    <div class="detalles_resumen">
      <h1><img src="../assets/images/infor.svg" alt=""> ¿En qué consiste?</h1>
      <p>
      El curso de Electrónica Automotriz está orientado a brindar los conocimientos técnicos en el campo automotriz relacionados con los principios de funcionamiento del sistema electrónico de vehículos automotores que permiten la comprensión y análisis de circuitos electrónicos, sensores, actuadores y ECUs automotrices, desarrollando en los alumnos habilidades y competencias del uso adecuado de herramientas e instrumentos.
      </p>
    </div>
    <div class="detalles_resumen"></div>    
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
    <div class="duracion_contenido">
      
    </div>
  </div>
</section>
<section class="planEstudio">
  <div class="container">
    <h2><img src="../assets/images/file.svg" alt=""> ¿Por qué estudiar en Idat?</h2>
    <div class="planEstudio_contenido">

    </div>
  </div>
</section>
<section class="horarios">
  <div class="container">
    <h2><img src="../assets/images/file.svg" alt=""> ¿Por qué estudiar en Idat?</h2>
    <div class="horario_contenido">

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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .detalles_resumen
  {
    width: 50%;
  }

  .detalles_banner
  {
    height: 450px;
    max-width: 100%;
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
    line-height: 20pt;
  }

  .masDetalles
  {
    font-family: 'robotoregular';
    width: 100%;
    padding-bottom: 30px;
    display: flex;
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
    width: 60%;
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
    display: flex;
    font-family: 'robotoregular';
    width: 100%;
  }

  .duracion_contenido
  {
    width: 60%;
  }

  .duracion h2
  {
    padding-bottom: 30px;
  }

  .horarios
  {
    display: flex;
    font-family: 'robotoregular';
    width: 100%;
  }

.horarios_contenido
{
  width: 60%;
}

  .planEstudio
  {
    display: flex;
    font-family: 'robotoregular';
    width: 100%;
  }

  .planEstudio_contenido
  {
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
