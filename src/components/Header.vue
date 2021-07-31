<template>
    <header class="header">
        <div class="container">
            <nav class="header_navegacion">
                <ul class="navegacion_logo">
                    <li class="opcion_logo">
                        <img src="../assets/images/logo.svg" alt="">
                    </li>
                </ul>
                <ul class="navegacion_opciones">
                    <li class="opciones_carrito">
						<router-link class="boton" to="/miscompras">
							<img src="../assets/images/carrito.svg" alt="">
						</router-link>	                        
                    </li>
                    <li class="opciones_menu">
                        	
						<router-link class="boton" to="/login">
							<img src="../assets/images/sanguchito.svg" alt="">	
						</router-link>	
													
                    </li>
                </ul>
            </nav>
            <section class="header_banner">
                <h1>¡Explota todo tu potencial tecnológico!</h1>
            </section>
            <section class="header_redes">
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
                <div class="redes_wsp"></div>
            </section>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
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
.header_navegacion{
	display: flex;
	flex-direction: row;
	height: 100px;
}
.navegacion_logo{
	flex: auto;
}
.opcion_logo{
	height: 100px;
	padding-top: 10px;
}
.navegacion_opciones{
	display: flex;
	flex-direction: row;
	width: 5rem;
}
.opciones_carrito{
	flex: auto;
	padding-top: 10px;
}
.opciones_menu{
	flex: auto;
	padding-top: 10px;
}
.header_banner
{
	color: #fff;
	display: flex;
    align-items: center;
    justify-content: start;
    text-align: left;
    width: 100%;
    
    /* restamos la base de logos y el nav */
    height: calc(100vh - 300px);
}

.header_banner h1{
	font-size: 3.5em;
	width: 800px;
	font-weight: 900;
}

.header_redes{
	padding-top: 50px;
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

.fono_form
{
	position: fixed;
	width: 500px;
	min-height: 900px;	
	padding-top: 150px;
	padding-right: 100px;
	padding-left: 100px;
	background-image: url('../assets/images/fono.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 999;
	right: 15em;
	top: 3em;
}
.fono_form div
{
	padding-bottom: 30px;
}

.redes_fono p
{
	padding-bottom: 20px;
	width: 100%;
	font-weight: 100;
	font-size: 1.5em;
	text-align: center;
}

.redes_fono input[type='text']
{
	width: 100%;
	height: 70px;
	border: 1px solid #555;
	border-radius: 4px;
}

.redes_fono input[type='checkbox']
{
	height: 20px;
	width: 20px;
	border: 2px solid black;
}

.redes_fono input[type='button']
{
	width: 100%;
	height: 70px;
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
	width: 100%;
	height: 70px;
}

.redes_wsp {
	width: 65px;
	height: 65px;
	background-image: url('../assets/images/logo_wsp.svg');
	background-position: center;

	position: fixed;
	right: 4em;
	bottom: 3em;
}
</style>