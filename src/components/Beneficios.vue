<template>
      <section class="beneficios">
        <div class="beneficios_contenido">
            <div class="container">
                <h3>Beneficios</h3>
                <div class="beneficios_lista">
                   <div class="beneficio_item">
                       <img src="../assets/images/experto.png" alt="">
                       <div class="item_texto">
                        <h4>Aprender de Expertos</h4>
                        <p>Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.</p>
                       </div>                       
                   </div>
                   <div class="beneficio_item">
                    <img src="../assets/images/virtual.png" alt="">
                    <div class="item_texto">
                     <h4>Clases Virtuales</h4>
                     <p>Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación tecnológica del Perú.</p>
                    </div>       
                   </div>
                   <div class="beneficio_item">
                    <img src="../assets/images/empleabilidad.png" alt="">
                    <div class="item_texto">
                     <h4>Empleabilidad</h4>
                     <p>Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas 
                        laborales especialmente identificadas para la comunidad PachaQTec, a través de 
                        nuestra plataforma de empleabilidad IDAT JOB.</p>
                    </div>       
                   </div>
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
.beneficios
{
	display: block;
	padding-top: 100px;
	padding-bottom: 100px;
}

.beneficios_lista
{
	padding-top: 50px;
	display: grid;
	grid-template-columns: repeat(1, 55%);
	gap: 40px;
	grid-auto-rows: minmax(160px, auto);
}

.beneficios_lista h3
{
	font-size: 1.2em;
}

.beneficio_item
{
	display: flex;
	height: 160px;
	background-color: #F8F8FA;
	border-radius: 20px;
	align-items: center;
}

.beneficio_item img
{
	padding: 40px;
}
.item_texto
{
	padding-right: 40px;
}

.item_texto h4
{
	font-size: 1em;
	font-weight: 500;
	padding-bottom: 10px;
}

.item_texto p
{
	font-size: 0.9em;
}
</style>