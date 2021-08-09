<template>
  <Nav />
  <div class="container">
 <div class="informacion_detallada">
      <div class="detallada_info">
          <section class="detalles">
              <div class="detalles_resumen">     
                <h1><img src="../assets/images/file.svg" alt=""> ¿En qué consiste?</h1>      
                <p>
                  {{curso.descripcion}}
                </p>
              </div>
              <div class="detalles_resumen"></div>    
          </section>

          <section class="duracion">
              <h2><img src="../assets/images/reloj.svg" alt=""> Inicio</h2>
              <div class="duracion_div">               
                <div class="duracion_contenido">
                  <p class="subtitulo">
                    Fecha inicio :
                  </p>  
                  {{curso.fecha_inicio}}                
                </div>   
              </div>
          </section>
          <section class="horarios">
              <h2><img src="../assets/images/file.svg" alt=""> Horarios (Modalidad Virtual)</h2>
              <div  class="horarios_div">                              
                 <div class="horarios_contenido" v-for="(cur,index) in curso.horarios" :key="index">
                    <p class="subtitulo">        
                        Frecuencia :
                    </p>
                    {{cur.frecuencia}}
                    <p class="subtitulo">        
                        Horarios : 
                    </p>
                    {{cur.horario}}
                  </div>
              </div>
          </section>
          <section class="precio">
              <h2><img src="../assets/images/file.svg" alt=""> Costo</h2>
              <div  class="precio_div">                              
                 <div class="precio_contenido">
                    <p class="subtitulo">        
                        Costo Total :
                    </p>
                    S/. {{curso.precio}}
                  </div>
              </div>
          </section>
      </div>
      <div class="detallada_form">
          <div class="redes_fono">
              <form action="" class="fono_form">
                <p>
                  Postula y obtén un 10% de descuento en el programa
                </p>
                <div>
                  <input type="text" placeholder="NOMBRE">
                </div>
                <div>
                  <input type="text" placeholder="CELULAR">
                </div>
              <div>
                  <input type="text" placeholder="CORREO ELECTRÓNICO">
              </div>
                <div>
                  <select name="" id="" aria-placeholder="PROGRAMA"></select>
                </div>
                <div>
                  <input id="check1" type="checkbox"><label for="check1">Acepto las políticas de privacidad</label>
                </div>
                <div>
                  <input  type="button" value="Quiero postular">
                </div>
                
              </form>
          </div>    

      </div>
  </div>
  </div>
 


<router-view/>

</template>

<style scoped>

  .informacion_detallada
  {
    display: flex;
    flex-direction: row;
  }

  .detallada_info
  {
    flex: 50%;
    padding: 50px;
  }

  .detallada_form
  {
    flex: auto;
    padding: 50px;
  }

  .detalles
  {
    font-family: 'robotoregular';
    height: auto;
  }

  .detalles_resumen
  {
    width: 100%;
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

  .duracion
  {
    padding-top: 30px;
    font-family: 'robotoregular';
    font-weight: 900;
    width: 100%;
    line-height: 40px;
  }

  .duracion_div
  {
     padding-left: 30px;
  }

  .duracion_contenido
  {
   
    width: 60%;
    background-color: lightgray;
    box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
    border-radius: 20px;
    height: auto;
    padding: 30px;
  }

  .duracion h2
  {
    padding-bottom: 30px;
  }

  .horarios
  {
    padding-top: 30px;
    font-family: 'robotoregular';
    font-weight: 900;
    width: 100%;
    line-height: 40px;
  }

  .horarios_div
  {
     padding-left: 30px;
  }

  .horarios h2
  {
    padding-bottom: 30px;
  }

  .horarios_contenido
  {
    width: 60%;
    background-color: lightgray;
    box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
    border-radius: 20px;
    height: auto;
    padding: 50px;
  }

  .precio
  {
    padding-top: 30px;
    font-family: 'robotoregular';
    font-weight: 900;
    width: 100%;
    line-height: 40px;
  }

  .precio_div
  {
     padding-left: 30px;
  }

  .precio h2
  {
    padding-bottom: 30px;
  }

  .precio_contenido
  {
    width: 60%;
    background-color: lightgray;
    box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
    border-radius: 20px;
    height: auto;
    padding: 50px;
  }


  .redes_fono
  {
      text-align: left;
      display: block;
      padding-top: 20px;
      width: 100%;
      height: auto;
  }

  .fono_form
  {
      width: 100%;
  }

  .fono_form div
  {
      padding-bottom: 15px;
  }

  .fono_form label
  {
      height: 16px;
      font-size: 9pt;
  }


  .redes_fono p
  {
      
      text-align: left;
      padding-bottom: 60px;
      height: 42px;
      font-weight: 100;
      font-size: 1em;
      font-weight: 800;
  }

  .redes_fono input[type='text']
  {
      padding-right: 20px;
      padding-left: 20px;
      height: 50px;
      border: 1px solid #555;
      border-radius: 4px;
      width: 100%;
  }

  .redes_fono input[type='checkbox']
  {
      border: 2px solid black;
  }

  .redes_fono input[type='button']
  {
      height: 50px;
      border: 1px solid #555;
      border-radius: 4px;
      background-color: #5640ff;
      color: #fff;
      font-size: 1em;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
  }

  .redes_fono select
  {
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      height: 50px;
  }

  .subtitulo
  {
    color:  #5640FF;
    font-size: 1.2em;
  }

  @media (max-height: 680px), screen and (orientation: portrait) 
  { 

.informacion_detallada
    {
      display: flex;
      flex-direction: column;
    }

    .detallada_info
    {
      flex: 100%;
      padding: 10px;
    }

    .detallada_form
    {
      flex: auto;
      padding: 10px;
    }

    .detalles
    {
      font-family: 'robotoregular';
      height: auto;
      width: 100%;
    }

    .detalles_resumen
    {
      width: 100%;
    }

    .detalles h1
    {
      padding-top: 20px;
      font-size: 1.2em;
      padding-bottom: 20px;
    }

    .detalles p
    {
      font-family: 'roboto';
      font-size: 0.9em;
      text-align: justify;
      height: auto;
      padding-left: 10px;
      padding-bottom: 30px;
      line-height: 20pt;
    }

    .duracion
    {
      padding-top: 30px;
      font-family: 'robotoregular';
      font-weight: 900;
      width: 100%;
      line-height: 40px;
    }

    .duracion_div
    {
      padding-left: 0;
    }

    .duracion_contenido
    {
    
      width: 100%;
      background-color: lightgray;
      box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
      border-radius: 20px;
      height: auto;
      padding: 50px;
      font-size: 0.9em;  
    }

    .duracion h2
    {
      padding-bottom: 30px;
      font-size: 1.2em;
    }

    .horarios
    {
      padding-top: 30px;
      font-family: 'robotoregular';
      font-weight: 900;
      width: 100%;
      line-height: 40px;
    }

    .horarios_div
    {
      padding-left: 0;
    }

    .horarios h2
    {
      padding-bottom: 30px;
      font-size: 1.2em;      
    }

    .horarios_contenido
    {
      width: 100%;
      background-color: lightgray;
      box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
      border-radius: 20px;
      height: auto;
      padding: 50px;
      font-size: 0.9em;  
    }

    .precio
    {
      padding-top: 30px;
      font-family: 'robotoregular';
      font-weight: 900;
      width: 100%;
      line-height: 40px;
    }

    .precio_div
    {
      padding-left: 0;
    }

    .precio h2
    {
      padding-bottom: 30px;
      font-size: 1.2em;    
    }

    .precio_contenido
    {
      width: 100%;
      background-color: lightgray;
      box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
      border-radius: 20px;
      height: auto;
      padding: 50px;
      font-size: 0.9em;  
    }


    .redes_fono
    {
        text-align: left;
        display: block;
        padding-top: 20px;
        width: 100%;
        height: auto;
    }

    .fono_form
    {
        width: 100%;
    }

    .fono_form div
    {
        padding-bottom: 15px;
    }

    .fono_form label
    {
        height: 16px;
        font-size: 9pt;
    }


    .redes_fono p
    {
        
        text-align: left;
        padding-bottom: 60px;
        height: 42px;
        font-weight: 100;
        font-size: 1em;
        font-weight: 800;
    }

    .redes_fono input[type='text']
    {
        padding-right: 20px;
        padding-left: 20px;
        height: 50px;
        border: 1px solid #555;
        border-radius: 4px;
        width: 100%;
    }

    .redes_fono input[type='checkbox']
    {
        border: 2px solid black;
    }

    .redes_fono input[type='button']
    {
        height: 50px;
        border: 1px solid #555;
        border-radius: 4px;
        background-color: #5640ff;
        color: #fff;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
    }

    .redes_fono select
    {
        width: 100%;
        padding-right: 20px;
        padding-left: 20px;
        height: 50px;
    }

    .subtitulo
    {
      color:  #5640FF;
      font-size: 1.2em;
    }


  }

  @media (max-height: 375px), screen and (orientation: portrait) 
  { 
    .informacion_detallada
    {
      display: flex;
      flex-direction: column;
    }

    .detallada_info
    {
      flex: 100%;
      padding: 10px;
    }

    .detallada_form
    {
      flex: auto;
      padding: 10px;
    }

    .detalles
    {
      font-family: 'robotoregular';
      height: auto;
      width: 100%;
    }

    .detalles_resumen
    {
      width: 100%;
    }

    .detalles h1
    {
      padding-top: 20px;
      font-size: 1.2em;
      padding-bottom: 20px;
    }

    .detalles p
    {
      font-family: 'roboto';
      font-size: 0.9em;
      text-align: justify;
      height: auto;
      padding-left: 10px;
      padding-bottom: 30px;
      line-height: 20pt;
    }

    .duracion
    {
      padding-top: 30px;
      font-family: 'robotoregular';
      font-weight: 900;
      width: 100%;
      line-height: 40px;
    }

    .duracion_div
    {
      padding-left: 0;
    }

    .duracion_contenido
    {
    
      width: 100%;
      background-color: lightgray;
      box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
      border-radius: 20px;
      height: auto;
      padding: 50px;
      font-size: 0.9em;  
    }

    .duracion h2
    {
      padding-bottom: 30px;
      font-size: 1.2em;
    }

    .horarios
    {
      padding-top: 30px;
      font-family: 'robotoregular';
      font-weight: 900;
      width: 100%;
      line-height: 40px;
    }

    .horarios_div
    {
      padding-left: 0;
    }

    .horarios h2
    {
      padding-bottom: 30px;
      font-size: 1.2em;      
    }

    .horarios_contenido
    {
      width: 100%;
      background-color: lightgray;
      box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
      border-radius: 20px;
      height: auto;
      padding: 50px;
      font-size: 0.9em;  
    }

    .precio
    {
      padding-top: 30px;
      font-family: 'robotoregular';
      font-weight: 900;
      width: 100%;
      line-height: 40px;
    }

    .precio_div
    {
      padding-left: 0;
    }

    .precio h2
    {
      padding-bottom: 30px;
      font-size: 1.2em;    
    }

    .precio_contenido
    {
      width: 100%;
      background-color: lightgray;
      box-shadow: 0px 0px 10px rgb(151 151 151 / 50%);
      border-radius: 20px;
      height: auto;
      padding: 50px;
      font-size: 0.9em;  
    }


    .redes_fono
    {
        text-align: left;
        display: block;
        padding-top: 20px;
        width: 100%;
        height: auto;
    }

    .fono_form
    {
        width: 100%;
    }

    .fono_form div
    {
        padding-bottom: 15px;
    }

    .fono_form label
    {
        height: 16px;
        font-size: 9pt;
    }


    .redes_fono p
    {
        
        text-align: left;
        padding-bottom: 60px;
        height: 42px;
        font-weight: 100;
        font-size: 1em;
        font-weight: 800;
    }

    .redes_fono input[type='text']
    {
        padding-right: 20px;
        padding-left: 20px;
        height: 50px;
        border: 1px solid #555;
        border-radius: 4px;
        width: 100%;
    }

    .redes_fono input[type='checkbox']
    {
        border: 2px solid black;
    }

    .redes_fono input[type='button']
    {
        height: 50px;
        border: 1px solid #555;
        border-radius: 4px;
        background-color: #5640ff;
        color: #fff;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
    }

    .redes_fono select
    {
        width: 100%;
        padding-right: 20px;
        padding-left: 20px;
        height: 50px;
    }

    .subtitulo
    {
      color:  #5640FF;
      font-size: 1.2em;
    }

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
    console.log(this.$route.params.id);
  },
  mounted () {
    window.scrollTo(0, 0);
  }
}
</script>
