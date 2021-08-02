<template>
<header class="fondo">
			<div class="contenedor ">
				<div class="header">
					<div><img src="../assets/images/other/icon-pachaqtec.svg" alt="" /></div>
					<div class="tipografia">
						<img src="../assets/images/other/pachaqtec.svg" alt="" />
						<p class="tipo">ESCUELA DE CODING</p>
					</div>
				</div>
				<nav class="menu">
					<ul class="botones">
						<li>
							<a href=""> <img src="../assets/images/other/carrito.svg" alt="carrito" /></a>
						</li>
						<li>
							<a href=""><img src="../assets/images/other/togle.svg" alt="togle" /></a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<section class="contenedor content-mobile fondo ">
			<div class="carrito">
					<div>
						<router-link class="boton" to="/">
							<p class="carrito-flecha"></p>
						</router-link>                      
                    </div>
					<div class="carrito-titulo">
						<h2>Carrito de compras</h2>
					</div>
			</div>
		</section>
        <main class="contenedor"> 
            <section class="cursos">
                <div class="row curso">
                    <div class="curso-img">
                        <img src="../assets/images/other/curso.png" alt="">
                    </div>
                    <div class="curso-info">
                        <h3 class="curso-titulo">Gestión de Envases, Empaques y Embalajes</h3>
						<p class="dscto">Dto.25%</p>
						<a class="eliminar" href="#">Eliminar</a>
                    </div>
                    <div >
                        <p class="curso-precio"> S/269</p>
                    </div>
                </div>
                <div class="row curso">
                    <div class="curso-img">
                        <img src="../assets/images/other/curso.png" alt="">
                    </div>
                    <div class="curso-info">
                        <h3 class="curso-titulo">Gestión de Envases, Empaques y Embalajes</h3>
						<p class="dscto">Dto.25%</p>
						<a class="eliminar" href="#">Eliminar</a>
                    </div>
                    <div class="curso-precio">
                        <p>S/269</p>
                    </div>
                </div>
                <div class="row curso">
                    <div class="curso-img">
                        <img src="../assets/images/other/curso.png" alt="">
                    </div>
                    <div class="curso-info">
                        <h3 class="curso-titulo">Gestión de Envases, Empaques y Embalajes</h3>
						<p class="dscto">Dto.25%</p>
						<a class="eliminar" href="#">Eliminar</a>
                    </div>
                    <div class="curso-precio">
                        <p>S/269</p>
                    </div>
                </div>
            </section>
            <section class="compra">
                <div class=" subtotal">
                    <div class="compra-box">
                        <h3 class="sub-titulo">Subtotal</h3>
                        <p class="sub-precio">S/.600</p>
                    </div>
                    <div class="descuento">
                        <input
                            class="descuento-input"
                            type="text"
                            placeholder="Agregar código del descuento"
                        />
                        <a href="#"><img src="../assets/images/other/send.svg" alt="enviar" /></a>
                    </div>
                    <div class="btn-continuar">
                        <a class="continuar" href="#">Continuar</a>
                    </div>
                </div>
            </section>
        </main>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap');
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
html {
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	/* font-family: 'Roboto', sans-serif; */
	background-color: #f8f8fa;
}

li {
	list-style: none;
}
.fondo {
	background-color: #000425;
	color: white;
	width: 100%;
}

.contenedor {
	margin: 0 auto;
	width: 90%;
	max-width: 1024px;
	display: flex;
	justify-content: space-between;
}
.header {
	width: 184px;
	height: 60px;
	display: flex;
	align-items: center;
}
.tipografia {
	height: 35px;
	margin-left: 8px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.tipo {
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
}
.carrito {
	background-color: white;
	color: #222222;
	/* border: 1px solid black; */
	width: 100%;
	height: 100px;
	font-size: 0.9rem;
	font-weight: bold;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.carrito-flecha {
	width: 17px;
	height: 18px;
	background-image: url(../assets/images/other/arrow.svg);
}
.carrito-titulo {
	margin-left: 15px;
}
.botones {
	width: 100px;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

/* Cursos*/
.cursos {
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	width: 55%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.curso {
	width: 100%;
	height: 100px;
	margin-bottom: 20px;
	display: flex;
	justify-content: flex-start;
	position: relative;
}
.curso-info {
	margin-left: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.curso-titulo {
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	font-size: 16px;
}
.dscto {
	font-size: 14px;
	color: #5640ff;
}
.eliminar {
	font-family: 'Poppins', sans-serif;
	font-size: 12px;
	color: #5640ff;
}
.curso-precio {
	margin-left: 20px;
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
}
/*Compra*/
.compra {
	background-color: white;
	box-shadow: 0px 0px 5px 1px rgb(224, 221, 221);
	width: 42%;
	height: 283px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.subtotal {
	width: 80%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.compra-box {
	display: flex;
	justify-content: space-between;
}

.sub-titulo,
.sub-precio {
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	font-weight: bold;
	color: #5640ff;
}

.descuento {
	width: 333px;
	height: 50px;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.descuento-input {
	width: 90%;
	height: 100%;
	border: white 1px solid;
	text-align: center;
}
.Input:focus,
.Input:active {
	outline: none;
	border: 0;
}
.btn-continuar {
	width: 333px;
	height: 50px;
	background-color: #5640ff;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.continuar {
	text-decoration: none;
	color: white;
}

/* Media Queries*/
@media screen and (max-width: 768px) {

	.carrito {
		background-color: #f8f8fa;
	}

	.contenedor {
		width: 90%;
		height: auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.cursos {
		width: 80%;
	}
	.curso-info {
		margin-left: 5px;
		flex-direction: column;
		justify-content: space-between;
	}
	.curso-titulo {
		font-size: 12px;
	}

	.dscto {
		font-size: 14px;
		color: #5640ff;
	}
	.eliminar {
		font-family: 'Poppins', sans-serif;
		font-size: 12px;
		color: #5640ff;
	}
	.curso-precio {
		position: absolute;
		bottom: 0;
		right: 0;
		font-family: 'Poppins', sans-serif;
		font-size: 12px;
	}
	.compra {
		width: 433px;
		height: 283px;
	}
	.descuento {
		width: 100%;
	}
	.btn-continuar {
		width: 100%;
	}
}

@media screen and (max-width: 425px) {

	.carrito {
		background-color: #f8f8fa;
	}

	.contenedor {
		width: 90%;
		height: auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 30px;
	}
	.content-mobile {
		width: 100%;
	}
	header {
		display: none;
	}
	.carrito {
		background-color: #000425;
		width: 90%;
		height: 50px;
	}
	.carrito-flecha {
		width: 15px;
		height: 13px;
		background-image: url(../assets/images/other/arrow-white.svg);
	}
	.carrito-titulo h2 {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		font-weight: bold;
	}
	.cursos {
		width: 100%;
		height: auto;
		margin-bottom: 30px;
	}
	.curso {
		width: 100%;
		margin-top: 10px;
		position: relative;
	}
	.curso-info {
		margin-left: 10px;
		flex-direction: column;
		justify-content: space-between;
	}
	.curso-titulo {
		font-size: 12px;
	}

	.dscto {
		font-size: 14px;
		color: #5640ff;
	}
	.eliminar {
		font-family: 'Poppins', sans-serif;
		font-size: 12px;
		color: #5640ff;
	}
	.curso-precio {
		position: absolute;
		bottom: 0;
		right: 0;
		font-family: 'Poppins', sans-serif;
		font-size: 12px;
	}
	.compra {
		width: 100%;
		height: 283px;
	}

	.descuento {
		width: 90%;
	}
	.btn-continuar {
		width: 90%;
	}
}
</style>