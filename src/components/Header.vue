<template>
    <header class="header">
        
            <nav class="header_navegacion">
				<div class="container">
					<div class="navegacion_contenido">
						<ul class="navegacion_logo">
							<router-link class="boton" to="/">
								<li class="opcion_logo">
									<img src="../assets/images/logo.svg" alt="">
								</li>
							</router-link>	   							
						</ul>
						<ul class="navegacion_opciones">
							<li class="opciones_carrito">
								<router-link class="boton" to="/miscompras">
									<img src="../assets/images/carrito.svg" alt="">
									<label for="">{{carrito.length}}</label>
								</router-link>	                        
							</li>
							<li class="opciones_menu">
									
								<router-link class="boton" to="/login">
									<img src="../assets/images/sanguchito.svg" alt="">	
								</router-link>	
															
							</li>
						</ul>
					</div>
					
				</div>
            </nav>
            <section class="header_banner">
				<div class="container">
					<h1>¡Explota todo tu potencial tecnológico!</h1>
					<p>Con nuestros programas de especialización</p>
				</div>
            </section>
            <section class="header_redes">
				<div class="container">
					<div class="redes_contenido">
					<div class="redes_logos">
						<img src="../assets/images/logos_header.svg" alt="">
					</div>
					<div class="redes_scroll">
						<img src="../assets/images/arrowdown.svg" alt="">
					</div>
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
								<select name="" id="" aria-placeholder="PROGRAMA">
									<option>PROGRAMA</option>
    								<option v-for="curso in cursos" :id="`${curso.id}`">{{ curso.titulo_largo }}</option>
								</select>
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

							</div>
							<div>
								<input id="check1" type="checkbox"><label for="check1">Acepto las políticas de privacidad</label>
							</div>
							<div>
								<input  type="button" value="Quiero postular">
							</div>
							
						</form>
					</div>
					<div class="redes_wsp"></div>
					</div>

				</div>
            </section>        
    </header>
</template>

<script>
import {mapState} from 'vuex';
export default {	
    computed:{
        ...mapState(['carrito','cursos']),
    },
}
</script>

<style scoped>
.header
{
	display: block;
	background-image: url('../assets/images/fondo.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    height: calc(100vh - 200px);
}
.boton 
{
    font-size: 10pt;
    font-weight: 900;
    text-transform: capitalize;
}
.header_navegacion
{
	width: 100%;
	height: 100px;
}
.navegacion_contenido
{
	display: flex;
	flex-direction: row;
	height: inherit;
}
.navegacion_logo{
	flex: auto;
	max-width: 100%;
}
.opcion_logo{
	height: 100px;
	padding-top: 10px;
}

.opcion_logo img{
	width: 138.66px;
	height: 32px;
}

.navegacion_opciones{
	display: flex;
	flex-direction: row;
	width: 5rem;
}
.opciones_carrito{
	width: 5rem;
	padding-top: 10px;
}


.opciones_carrito label
{
	position: absolute;
	background-color: #5640ff;
	border-radius: 50%;
	border-style: solid;
	border-color: #5640ff;
	border-width: 5px;
	font-size: 7pt;
	cursor: pointer;
}

.opciones_menu{
	flex: auto;
	padding-top: 10px;
}
.header_banner
{
	font-family: 'robotobold','poppinsbold';
	color: #fff;
	display: flex;
	flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    width: 100%;
    
    /* restamos la base de logos y el nav */
    height: calc(100vh - 300px);
}

.header_banner h1{
	font-size: 3.5em;
	width: 50%;
	font-weight: 900;
}

.header_banner p
{
	padding-top: 30px;
	font-family: 'poppinslight';
	font-size: 13pt;
	font-weight: 600;
}

.header_redes{
	width: 100%;
	height: 200px;
}

.redes_contenido{
	padding-top: 40px;
	display: flex;
	width: 100%;
	height: 200px;
}

.redes_logos
{
	width: 500px;
}

.redes_scroll
{
	padding-top: 20px;
	flex: auto;
	cursor: pointer;
}
.redes_scroll img:hover
{ 
	position: relative; 
	top: -5px;
} 

.redes_fono
{
	width: 370px;
	height: 900px;
	background-image: url('../assets/images/fono.svg'); 
	background-position: center;
	background-repeat: no-repeat;
	position: fixed;
	right: 8em;
	bottom: -8em;

}

.fono_form
{
	width: 370px;
	position: fixed;
	right: 3.2em;
	bottom: 6em;
}

.fono_form div
{
	padding-bottom: 15px;
}

.fono_form label
{
	width: 186px;
	height: 16px;
	font-size: 9pt;
}


.redes_fono p
{
	padding-bottom: 60px;
	width: 193px;
	height: 42px;
	font-weight: 100;
	font-size: 1em;
	text-align: center;
}

.redes_fono input[type='text']
{
	width: 216px;
	padding-right: 20px;
	padding-left: 20px;
	height: 50px;
	border: 1px solid #555;
	border-radius: 4px;
}

.redes_fono input[type='checkbox']
{
	border: 2px solid black;
}

.redes_fono input[type='button']
{
	width: 216px;
	height: 50px;
	border: 1px solid #555;
	border-radius: 4px;
	background-color: #5640ff;
	color: #fff;
	font-size: 1em;
	font-weight: 600;
	cursor: pointer;
}

.redes_fono select
{
	width: 216px;
	padding-right: 20px;
	padding-left: 20px;
	height: 50px;
}

.redes_wsp {
	width: 65px;
	height: 65px;
	background-image: url('../assets/images/logo_wsp.svg');
	background-position: center;
	z-index: 9999;
	position: fixed;
	right: 4em;
	bottom: 3em;
}

@media (max-height: 680px), screen and (orientation: portrait) 
{ 
	.redes_fono
	{
		display: none;

	}
}

@media (max-height: 375px), screen and (orientation: portrait) 
{ 

	.header{
		display: block;
		background-image: url('../assets/images/fondo.png');
		background-position: justify;
		background-repeat: no-repeat;
		background-size: cover;
		height: 300px;
	}

	.header_banner
	{
		padding-top: 100px;
		font-family: 'robotobold','poppinsbold';
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		text-align: left;
		width: 100%;
		height: 200px;
	}

	.header_navegacion
	{
		position: fixed;
		width: 100%;
		height: 50px;
		background-color: black;
		z-index: 9999;
	}

	.redes_fono
	{
		display: none;

	}

	.header_banner h1
	{
	font-size: 1.5em;
	width: 100%;
	font-weight: 900;
	}

	.header_banner p
	{
		padding-top: 30px;
		font-family: 'poppinslight';
		font-size: 11pt;
		font-weight: 100;
		width: 60%;
		line-height: 1.5em;
	}
	.header_redes
	{
		padding-top: 100px;
		width: 100%;
		height: 200px;
	}
	.redes_wsp
	{
		display: none;
	}
}



</style>