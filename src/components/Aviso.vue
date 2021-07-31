<template>
      <section class="aviso">
        <div class="aviso_contenido">
            <img src="../assets/images/aviso.png" alt="">
            <div class="container">            
                <div class="contenido_texto">
                    <h3>Sé parte de la comunidad</h3>
                    <br>
                    <p>Programas semi-presenciales para el desarrollo de habilidades de programación a lo largo 
                        de todo el Stack tecnológico.                
                    </p>
                    <br>
                    <p>Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del 
                        funcionamiento de una aplicación, así como formar parte de una gran comunidad de 
                        desarrolladores.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.aviso
{
	display: block;
	padding-top: 100px;
}
.aviso_contenido
{
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 100%;
	background-color: #5640ff;
	height: 250px;
	align-items: center;
	color: white;
}

.aviso_contenido img
{
	flex: auto;
	position: absolute;
	left: -9em;
}

.contenido_texto
{
	flex: auto;
	width: 600px;
	font-size: 11pt;
}
.contenido_texto h3
{
	font-size: 1.1em;
}
</style>