<template>
      <section class="beneficios">
        <div class="beneficios_contenido">
            <div class="container">
                <h3>Beneficios</h3>
                <div class="beneficios_lista">
                   <div class="beneficio_item">
                       <img src="../assets/images/experto.png" alt="">
                       <div class="item_texto">
                        <h4>Aprende de Expertos</h4>
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
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.beneficios
{
	display: block;
	padding-top: 100px;
	padding-bottom: 50px;
}

.beneficios_lista
{
	padding-top: 50px;
	display: grid;
	grid-template-columns: repeat(1, 55%);
	gap: 40px;
	grid-auto-rows: minmax(160px, auto);
}

.beneficios_contenido h3
{
    font-family: 'poppinsregular';
	font-size: 1.2em;
}

.beneficio_item
{
	display: flex;
	height: 160px;
	background-color: #F8F8FA;
	border-radius: 10px;
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
    font-family: 'poppinslight';
	font-size: 0.9em;
	font-weight: 500;
	padding-bottom: 10px;
}

.item_texto p
{
	font-size: 0.8em;
}

.redes_fono
{
	display: none;

}




@media (max-height: 680px), screen and (orientation: portrait) 
{ 

    .beneficios_lista
    {
        padding-top: 50px;
        display: grid;
        grid-template-columns: repeat(1, 100%);
        gap: 40px;
        grid-auto-rows: minmax(100px, auto);
    }

    .beneficios_contenido h3
    {
        font-family: 'poppinsregular';
        font-size: 0.9em;
    }

    .beneficio_item img
    {
        padding-left: 20px;
    }

    .item_texto p
    {
        display: none;
    }
    
    .beneficio_item
    {
        display: flex;
        height: 100px;
        background-color: #F8F8FA;
        border-radius: 10px;
        align-items: center;
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

}




</style>