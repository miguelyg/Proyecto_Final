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

<style scoped>
.aviso
{
	display: block;
	padding-top: 160px;
}
.aviso_contenido
{
	display: flex;
	flex-wrap: wrap;
	flex-direction: col;
	width: 100%;
	background-color: #5640ff;
    background-image: url('../assets/images/aviso_fondo.svg');
	height: 280px;
	align-items: center;
	color: white;
}

.aviso_contenido img
{
	flex: auto;
	position: absolute;
	left: -7em;
}

.contenido_texto
{    
    font-family: 'roboto';
	flex: auto;
	width: 63%;
    padding-left: 190px;
	font-size: 10pt;
}
.contenido_texto h3
{
    font-family: 'robotobold','poppinsbold';
	font-size: 1.4em;
}

@media (max-height: 680px), screen and (orientation: portrait) 
{ 

    .aviso
    {
        display: block;
        padding-top: 160px;
    }
    .aviso_contenido
    {
        width: 100%;
        background-color: #5640ff;
        background-image: url('../assets/images/aviso_fondo.svg');
        background-repeat: no-repeat;
        height: 600px;
        align-items: flex-start;
        color: white;
    }

    .aviso_contenido img
    {
        position: absolute;
        left: 2em;
        width: 290px;
    }

    .contenido_texto
    {    
        padding-top: 400px;
        font-family: 'roboto';
        width: 100%;
        font-size: 10pt;
    }
    .contenido_texto h3
    {
        font-family: 'robotobold','poppinsbold';
        font-size: 1.4em;
        width: 100%;
    }

}

@media (max-height: 375px), screen and (orientation: portrait) 
{ 

        .aviso
    {
        display: block;
        padding-top: 160px;
    }
    .aviso_contenido
    {
        width: 100%;
        background-color: #5640ff;
        background-image: url('../assets/images/aviso_fondo.svg');
        background-repeat: no-repeat;
        height: 600px;
        align-items: flex-start;
        color: white;
    }

    .aviso_contenido img
    {
        position: absolute;
        left: 2em;
        width: 290px;
    }

    .contenido_texto
    {    
        padding-top: 400px;
        font-family: 'roboto';
        width: 100%;
        font-size: 10pt;
        padding-left:0px ;
    }
    .contenido_texto h3
    {
        font-family: 'robotobold','poppinsbold';
        font-size: 1.4em;
        width: 100%;
    }

}



</style>