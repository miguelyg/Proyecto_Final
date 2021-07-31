<template>
  <main class="listado">
        <div class="container">
            <h2>Conoce nuestros Programas de Especialización</h2>
            <div class="listado_programas">
                <div class="programas_lista">
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso1.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso2.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso3.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso4.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso5.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso6.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>     
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso7.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>  
                    <div class="lista_curso">
                        <img src="../assets/images/cursos/curso8.png" alt="">
                        <p>Desarrollo Front-End</p>
                        <div class="curso_botones">
                            <button>Carrito</button>
                            <router-link class="boton" to="/detalle">Ver Mas</router-link>
                        </div>
                    </div>                 
                </div>
                <div class="programas_espacio">
                </div>
            </div>
        </div>        
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.listado
{
	display: block;
	padding-top: 250px;
}
.boton 
{
    font-size: 10pt;
    font-weight: 900;
    text-transform: capitalize;
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
	border-radius: 20px 20px 20px 20px;
	position: relative;
	
}
.lista_curso::after
{
	border-radius: 20px;
	content:'';
	position:absolute;
	left:0; top:0;
	width:100%; height:100%;
	display:inline-block;
	background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.65)), color-stop(100%,rgba(0,0,0,0))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* IE10+ */
	background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}


.lista_curso img
{
	display: block;
	border-radius: 20px;
}
.lista_curso p
{
	position: absolute;
	top: 210px;
	color: white;
	z-index: 9;
}
.curso_botones
{
	position: absolute;
	top: 270px;
	color: white;
	z-index: 9;
	background-color: transparent;
	width: 100%;
}

.curso_botones button
{
	flex: auto;
	width: 150px;
	background-color: transparent;
	color: white;
	height: 30px;
	border-style: none;
	cursor: pointer;
}
</style>