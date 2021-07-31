<template>
  <header class="fondo">
			<div class="contenedor">
				<div class="header">
					<div><img src="../assets/images/other/icon-pachaqtec.svg" alt="" /></div>
					<div>
						<img src="../assets/images/other/pachaqtec.svg" alt="" />
						<p>ESCUELA DE CODING</p>
					</div>
				</div>
				<nav>
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
		<div class="contenedor">
			<div class="Carrito">
				<img src="../assets/images/other/arrow.svg" alt="flecha" />
				<h2>Carrito de compras</h2>
			</div>
		</div>
		<div class="contenedor-2">
			<div class="Cursos">
				<div class="Curso">
					<div class="Curso-Imagen">
						<img src="../assets/images/other/curso.png" alt="" />
					</div>
					<div class="Curso-Info">
						<h3>Gestión de Envases, Empaques y Embalajes</h3>
						<p>Dto.25%</p>
						<a href="#">Eliminar</a>
					</div>
					<div class="Curso-Precio">
						<p>S/269</p>
					</div>
				</div>
				<div class="Curso">
					<div class="Curso-Imagen">
						<img src="../assets/images/other/curso.png" alt="" />
					</div>
					<div class="Curso-Info">
						<h3>Gestión de Envases, Empaques y Embalajes</h3>
						<p>Dto.25%</p>
						<a href="#">Eliminar</a>
					</div>
					<div class="Curso-Precio">
						<p>S/279</p>
					</div>
				</div>
				<div class="Curso">
					<div class="Curso-Imagen">
						<img src="../assets/images/other/curso.png" alt="" />
					</div>
					<div class="Curso-Info">
						<h3>Gestión de Envases, Empaques y Embalajes</h3>
						<p>Dto.25%</p>
						<a href="#">Eliminar</a>
					</div>
					<div class="Curso-Precio">
						<p>S/279</p>
					</div>
				</div>
			</div>

			<div class="Subtotal">
				<div class="Subtotal-Texto">
					<h3>Subtotal</h3>
					<p>S/.600</p>
				</div>
				<div class="Subtotal-Input">
					<input
						class="Input"
						type="text"
						placeholder="Agregar código del descuento"
					/>
					<a href="#"><img src="../assets/images/other/send.svg" alt="enviar" /></a>
				</div>
				<div class="Boton-Continuar">
					<a class="Continuar" href="#">Continuar</a>
				</div>
			</div>
		</div>
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
	background-color: black;
	width: 100%;
	color: white;
}
.contenedor {
	margin: 0 auto;
	width: 90%;
	height: 60px;
	display: flex;
	justify-content: space-between;
}

.header {
	width: 180px;
	height: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 14px;
}
.botones {
	width: 100px;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.Carrito {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 250px;
	font-size: 14px;
}

.Cursos {
	width: 52%;
	min-height: 300px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}

.Curso {
	width: 100%;
	height: 120px;
	padding-bottom: 20px;
	display: flex;
	justify-content: space-around;
}
.Curso-Info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: left;
}
.contenedor-2 {
	margin: 0 auto;
	width: 90%;
	height: 60px;
	display: flex;
	justify-content: space-between;
}

.Subtotal {
	height: 283px;
	width: 433px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 40%;
	background-color: white;
}
.Subtotal-Texto {
	width: 80%;
	display: flex;
	justify-content: space-around;
	font-size: 20px;
	color: #5640ff;
}
.Subtotal-Input {
	width: 333px;
	height: 50px;
	border: 1px solid black;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.Input {
	width: 70%;
	height: 100%;
	border: white 1px solid;
}
.Input:focus,
.Input:active {
	outline: none;
	border: 0;
}
.Boton-Continuar {
	width: 333px;
	height: 50px;
	background-color: #5640ff;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.Continuar {
	text-decoration: none;
	color: white;
}
</style>