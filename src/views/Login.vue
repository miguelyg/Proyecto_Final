<template>

  <div class="fondo">
			<div class="contenedor">
				<header class="header">
					<div>
						<img src="../assets/images/other/icon-pachaqtec.svg" alt="icon-pachaqtec" />
					</div>
					<div>
						<img src="../assets/images/other/pachaqtec.svg" alt="" />
						<p>ESCUELA DE CODING</p>
					</div>
				</header>
				<div class="marcas">
					<div class="marca-principal">
						<p class="respaldo">Con el respaldo de:</p>
						<div>
							<img src="../assets/images/other/intercorp.svg" alt="intercorp" />
						</div>
					</div>
					<div>
						<img src="../assets/images/other/idat.svg" alt="idat" />
					</div>
					<div>
						<img src="../assets/images/other/zegel-ipae.svg" alt="segel-ipae" />
					</div>
				</div>
			</div>
			<div>
				<main class="main">
					<div class="titulo">
						<h1>¡Explota todo tu potencial técnologico!</h1>

						<p class="subtitulo">Con nuestros programas de especialización</p>
					</div>
				</main>
			</div>
			<div class="contenedor-2">
				<div class="menu-metodo">
					<button class="menu-button" onclick="openMetodo('Iniciar')">
						Iniciar Sesión
					</button>
					<button class="menu-button" onclick="openMetodo('Registrarse')">
						Registrarse
					</button>
				</div>
				<div class="form">

					<div id="Iniciar" class="metodo">

						<p>Inicia sesión con tu correo</p>
						<div>
							<input
								class="input-correo"
								type="text"
								placeholder="Correo electrónico"
							/>
							<input
								class="input-contrasena"
								type="password"
								placeholder="Contraseña "
							/>
						</div>
						<div class="ingresar">
							<div class="form-boton">
								<a href="#">ingresar</a>
							</div>
							<a class="form-link" href="#">¿Olvidaste tu contraseña?</a>
						</div>
					</div>
					<div id="Registrarse" class="metodo" style="display: none">
						<p>Tambien puedes iniciar sesión con tu correo</p>
						<div>
							<input
								class="input-nombre"
								type="text"
								placeholder="Nombre y apellidos"
							/>
							<input
								class="input-correo"
								type="text"
								placeholder="Correo electrónico"
							/>
							<input
								class="input-contrasena"
								type="password"
								placeholder="Contraseña "
							/>
							<input
								class="input-repite-contrasena"
								type="password"
								placeholder="Repite Contraseña "
							/>
						</div>
						<div class="acepto">
							<label for=""
								><input type="checkbox" />Acepto
								<a href="#">Terminos y Condiciones</a></label
							>
						</div>
						<div class="registrarse">
							<div class="form-boton">
								<a href="#">Registrarse</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {



}

</script>

<style scoped>
:root {
	--bg-primary: #000425;
	--bg-sencondary: #f8f8fa;
	--bg-inactive: #efefef;
	--color-primary: #222222;
	--color-secondary: #5640ff;
	--color-white: #ffff;
	--color-warnig: #f22a40;
	--color-opacity: #c4c4c4;
	--color-inactive: #555555;
	--font-poppins: 'Poppins', sans-serif;
	--font-roboto: 'Roboto', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&family=Poppins:wght@100;300;400;600&family=Roboto:wght@100;300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	background-color: var(--bg-sencondary);
	color: var(--color-primary);
}
li {
	list-style: none;
}
a {
	text-decoration: none;
}
h1 {
	font-family: var(--font-poppins);
	font-size: 26px;
}
.fondo {
	background: url(../assets/images/other/fondo.png);
	width: 100%;
	height: 100vh;
	background-size: cover;
	display: flex;
	display: grid;
	grid-template-columns: 40% 30% 30%;
	grid-template-rows: repeat(4, 1fr);
	overflow: hidden;
}
.contenedor {
	margin: 0 auto;
	width: 80%;
	height: 90vh;
	display: flex ;
	flex-direction: column;
	justify-content: space-between;
}
.header {
	width: 210px;
	height: 20%;
	padding-top: 10px;
	padding-left: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 14px;
	color: white;
}
.respaldo {
	font-family: 'Open Sans', sans-serif;
	font-size: 11px;
}

.marcas {
	width: 320px;
	height: 63.08px;
	color: white;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-end;
}
.marca-principal{
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.main {
	width: 80%;
	height: 100%;
	text-align: right;
	color: white;
	display: grid;
	grid-column: 2;
	grid-row: 2/3;
}
.titulo {
	height: 800px;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.subtitulo {
	width: 70%;
	padding-top: 20px;
	font-size: 1.5rem;
}

.contenedor-2 {
	width: 100%;
	height: 100%;
	background-color: white;
	display: grid;
	grid-column: 3/-1;
	grid-row: 1/5;
}
.menu {
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: space-around;
	align-self: center;
}

.form {
	width: 100%;
	min-width: 375px;
	height: 100%;
	padding-bottom: 30%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 55px;
	text-align: center;
}
.sesion {
	height: 50%;
	width: 100%;
	margin-bottom: px;
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: space-between;
}
.ingresar {
	display: flex;
	flex-direction: column;
}

.input-contrasena,
.input-correo,
.form-boton {
	width: 70%;
	height: 50px;
	margin-bottom: 20px;
	border: solid 1px;
	border-radius: 5px;
	padding-left: 10px;
}

.form-boton {
	background-color: #5640ff;
	border: 0;
	align-self: center;
	padding: 20px;
}
.form-boton a {
	color: white;
	font-size: 16px;
	text-decoration: none;
}
.form-link {
	color: #5640ff;
	font-weight: bold;
}

</style>