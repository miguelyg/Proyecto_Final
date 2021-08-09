<template>
  <main class="listado">
        <div class="container">
            <h2>Conoce nuestros Programas de Especialización</h2>
            <div class="listado_programas">
                <div class="programas_lista" >
                    <div class="lista_curso" v-for="curso in cursos" :key="curso.id">
                        <img :src="require(`../assets/images/cursos/curso${curso.id}.png`)" class="curso_imagen" alt="">
                        <p>{{curso.titulo_largo}}</p> 
                        <div class="curso_botones">
                            <a class="boton" @click="agregarArregloCarrito(curso)">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" :to="`/detalle/${curso.id}`">
                                 <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>                    
                    </div>
                    <!-- <div v-for="tarea in tareas" :key="tarea.id">
                        <p>{{tarea.id}}</p>
                        <p>{{tarea.nombre}}</p>
                        <hr>
                        <div v-for="(framework,index) in tarea.frameworks" :key="index">
                        <p>        
                            {{framework}}
                        </p>
                        </div>
                        <p>{{tarea.jobTitle}}</p>
                        <p>{{tarea.pretensions}}</p>
                    </div> -->
                    <!-- <div class="lista_curso">
                        <img src="../assets/images/cursos/curso2.png" class="curso_imagen" alt="">
                        <p>Desarrollo <br> Back-End</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso3.png" class="curso_imagen" alt="">
                        <p>Desarrollo de <br> Aplicaciones Móviles</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso4.png" class="curso_imagen" alt="">
                        <p>Diseño de Experiencia de <br> Usuario</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso5.png" class="curso_imagen" alt="">
                        <p>Desarrollo de <br> Videojuegos</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso6.png" class="curso_imagen" alt="">
                        <p>Marketing <br> Digital</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>     
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso7.png" class="curso_imagen" alt="">
                        <p>Data <br> Analytics</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>  
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso8.png" class="curso_imagen" alt="">
                        <p>Desarrollo <br> Front-End Avanzando</p>
                        <div class="curso_botones">
                            <a class="boton" @click="agregarCarrito">
                                <img src="../assets/images/carrito.svg" alt="">
                                Agregar
                            </a>                            
                            <router-link class="boton" to="/detalle/1">
                                <img src="../assets/images/mas.svg" alt="">
                                Ver Mas
                            </router-link>
                        </div>
                    </div>                  -->
                </div>
            </div>
        </div>        
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed:{
        ...mapState(['cursos','carrito']),
    },
    methods:{
        ...mapActions(['getCursosAction','agregarArregloCarrito']),       
    },
    created(){
        this.getCursosAction();
    },
};



</script>

<style scoped>
.listado
{
	display: block;
	padding-top: 250px;
}

.listado h2
{
    font-size: 13pt;
    font-family: 'robotobold';
}

.listado_programas
{
	padding-top: 50px;
	display: flex;
}
.programas_lista
{
	flex: auto;
	display: grid;
	grid-template-columns: repeat(2, 344px);
	gap: 50px;
	grid-auto-rows: minmax(320px, auto);
}
.programas_espacio
{
	flex: auto;
}

.lista_curso
{		
	display:flex;
	color: white;		
	border-radius: 10px 10px 10px 10px;
	position: relative;
	
}
.lista_curso::after
{
	border-radius: 10px;
	content:'';
	position:absolute;
	left:0; top:0;
	width:100%; 
    height:100%;
	display:inline-block;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.90), transparent);
    z-index: 2;
}

.curso_imagen
{
    width: 100%;
}


.lista_curso img
{
	display: block;
	border-radius: 10px 10px 10px 10px;
    z-index: 1;
}
.lista_curso p
{
    font-family: 'roboto';
    top: 50%;
    padding: 25px;
    width: 200px;
	position: absolute;
	color: white;
	z-index: 9;
    font-size: 14pt;
}
.curso_botones
{
    position: absolute;
	display: flex;
    flex-direction: row;
	top: 270px;
	color: white;
	z-index: 9;
	background-color: transparent;
	width: 100%;
    padding-left:10px;
    padding-right:10px;
}

.curso_botones a
{
	flex: auto;
    display: flex;
	background-color: transparent;
	color: white;
	height: 40px;
	border-style: none;
	cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 10pt;
    font-weight: 900;
    text-transform: capitalize;
    text-align: center;
    padding:10px;
    border-radius: 10px;
}

.curso_botones a:hover
{
    border-color: #5640ff;
	border-style: solid;
    background-color: #5640ff;
}


@media (max-height: 680px), screen and (orientation: portrait) 
{ 

   .listado
    {
        display: block;
        padding-top: 180px;
    }

    .listado h2
    {
        font-size: 13pt;
        font-family: 'robotobold';
    }

    .listado_programas
    {
        padding-top: 25px;
        display: flex;
        width: 100%;
    }
    .programas_lista
    {
        flex: auto;
        display: grid;
        grid-template-columns: repeat(2, 344px);
        gap: 50px;
        grid-auto-rows: minmax(320px, auto);
    }
    .programas_espacio
    {
        flex: auto;
    }

    .lista_curso
    {		
        display:flex;
        color: white;		
        border-radius: 10px 10px 10px 10px;
        position: relative;
        height: 222px;        
    }
    .lista_curso::after
    {
        border-radius: 10px;
        content:'';
        position:absolute;
        left:0; top:0;
        width:100%; 
        height: 222px;  
        display:inline-block;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.90), transparent);
        z-index: 2;
    }

    .curso_imagen
    {
        width: 100%;
    }


    .lista_curso img
    {
        display: block;
        border-radius: 10px 10px 10px 10px;
        z-index: 1;
    }
    .lista_curso p
    {
        font-family: 'roboto';
        top: 20%;
        position: absolute;
        color: white;
        z-index: 9;
        font-size: 14pt;
    }
    .curso_botones
    {
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 150px;
        color: white;
        z-index: 9;
        background-color: transparent;
        width: 100%;
        padding-left:10px;
        padding-right:10px;
    }

    .curso_botones a
    {
        flex: auto;
        display: flex;
        background-color: transparent;
        color: white;
        height: 40px;
        border-style: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        font-size: 10pt;
        font-weight: 900;
        text-transform: capitalize;
        text-align: center;
        border-radius: 10px;
    }

    .curso_botones a:hover
    {
        border-color: #5640ff;
        border-style: solid;
        background-color: #5640ff;
    }

}

@media (max-height: 375px), screen and (orientation: portrait) 
{ 

    .listado
    {
        display: block;
        padding-top: 180px;
    }

    .listado h2
    {
        font-size: 13pt;
        font-family: 'robotobold';
    }

    .listado_programas
    {
        padding-top: 25px;
        display: flex;
        width: 100%;
    }
    .programas_lista
    {
        flex: auto;
        display: grid;
        grid-template-columns: repeat(1, 100%);
        gap: 1px;
        grid-auto-rows: minmax(240px, auto);
    }
    .programas_espacio
    {
        flex: auto;
    }

    .lista_curso
    {		
        display:flex;
        color: white;		
        border-radius: 10px 10px 10px 10px;
        position: relative;
        height: 222px;        
    }
    .lista_curso::after
    {
        border-radius: 10px;
        content:'';
        position:absolute;
        left:0; top:0;
        width:100%; 
        height: 222px;  
        display:inline-block;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.90), transparent);
        z-index: 2;
    }

    .curso_imagen
    {
        width: 100%;
    }


    .lista_curso img
    {
        display: block;
        border-radius: 10px 10px 10px 10px;
        z-index: 1;
    }
    .lista_curso p
    {
        font-family: 'roboto';
        top: 20%;
        position: absolute;
        color: white;
        z-index: 9;
        font-size: 14pt;
    }
    .curso_botones
    {
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 150px;
        color: white;
        z-index: 9;
        background-color: transparent;
        width: 100%;
        padding-left:10px;
        padding-right:10px;
    }

    .curso_botones a
    {
        flex: auto;
        display: flex;
        background-color: transparent;
        color: white;
        height: 40px;
        border-style: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        font-size: 10pt;
        font-weight: 900;
        text-transform: capitalize;
        text-align: center;
        border-radius: 10px;
    }

    .curso_botones a:hover
    {
        border-color: #5640ff;
        border-style: solid;
        background-color: #5640ff;
    }

}



</style>