<template>
    
    <nav class="header_navegacion">
        <div class="container">
            <div class="navegacion_todo">
                <ul class="navegacion_logo">
                    <li class="opcion_logo">
                        <img src="../assets/images/logo.svg" alt="">
                    </li>
                </ul>
                <ul class="navegacion_opciones">
                    <li class="opciones_carrito">
                        <img src="../assets/images/carrito.svg" alt="">
                    </li>
                    <li class="opciones_menu">
                        <img src="../assets/images/sanguchito.svg" alt="">
                    </li>
                </ul>
            </div>
        </div>        
    </nav>
    <section class="nav2">
        <div class="container">
            <div class="nav2_contenido">
                <div class="contenido_texto">
                <h1>Especialización en Python</h1>
                <p>Python</p>    
                </div>   
                <img src="../assets/images/llave.png" alt="">                            
            </div>            
        </div>
    </section>
    <div></div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navegacion_todo
    {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .nav2{
        width: 100%;
        background-image: url('../assets/images/fondo.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #5640FF;
        height: 300px;
        color: white;
       
    }
    .nav2_contenido
    {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
    }
    .contenido_texto
    {
        flex: auto;
        justify-content: center;
    }
    .nav2 h1
    {
        border-top: white;
        border-top-width: 0.1em;
        border-top-style: solid;
        font-size: 3em;
    }
    .nav2 p
    {
        font-size: 1.5em;
    }
    .contenido_texto img
    {
        flex: auto;
        justify-content: start;
    }
    
    .header_navegacion{
        width: 100%;
        background-color: #000425;
        height: 100px;
    }
    .navegacion_logo{
        flex: auto;

    }
    .opcion_logo{
        height: 100px;
        padding-top: 10px;
        display: flex;
        align-items: center;
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
</style>