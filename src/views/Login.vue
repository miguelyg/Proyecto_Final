<template>

<div class="fondo">
			<div class="contenedor">
				<header class="header">
					<div>
						<router-link class="boton" to="/">
							<img src="../assets/images/other/icon-pachaqtec.svg" alt="icon-pachaqtec" />
						</router-link>							
					</div>
					<div>
						<img src="../assets/images/other/pachaqtec.svg" alt="" />
						<p class="slogan">ESCUELA DE CODING</p>
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
			<div class="contenedor-extra">
				<main class="main">
					<h1 class="titulo">¡Explota todo tu potencial técnologico!</h1>
					<p class="subtitulo">Con nuestros programas de especialización</p>
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
						<div class="encabezado">
							<img
								class="logo-azul"
								src="../assets/images/other/icon-pachaqtec-azul.svg"
								alt=""
							/>
							<p>Inicia sesión con tu correo</p>
						</div>
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
						<div class="footer">
							<button class="btn btn-activo">Ingresar</button>

							<a class="form-link" href="#">¿Olvidaste tu contraseña?</a>
						</div>
					</div>
					<div id="Registrarse" class="metodo" style="display: none">
						
						<div class="titulo-registrate">
							<p>Puedes registrarte con tu correo</p>
						</div>
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
						<div class="footer">
							<button class="btn btn-activo">Registrarse</button>

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

.fondo {
	background: url(../assets/images/other/fondo.png);
	width: 100%;
	height: 100vh;
	background-size: cover;
	display: flex;
}
.contenedor {
	margin: 0 auto;
	width: 40%;
	height: 95vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.header {
	width: 205px;
	height: 10%;
	padding-top: 10px;
	padding-left: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 14px;
	color: white;
}
.slogan {
	font-size: 12px;
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
.marca-principal {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.main {
	width: 75%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;

	color: var(--color-white);
}
.titulo {
	height: 80px;
	width: 90%;
	font-family: var(--font-poppins);
	font-size: 26px;
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.subtitulo {
	width: 85%;
	padding-top: 20px;
	font-size: 16px;
	text-align: right;
}

.contenedor-2 {
	width: 450px;
	height: 100%;
	background-color: var(--bg-sencondary);
}
.menu-metodo {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-self: center;
}
.menu-button {
	font-family: var(--font-poppins);
	font-size: 14px;
	font-weight: bold;
	border: none;
	width: 100%;
}
.logo-azul {
	width: 60px;
	height: 60px;
}
.encabezado {
	height: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.menu-button:hover {
	border-bottom: #222222 3px solid;
}
.menu-button:link {
	border-bottom: #222222 3px solid;
}
.form {
	width: 100%;
	min-width: 375px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
}

.input-nombre,
.input-contrasena,
.input-repite-contrasena,
.input-correo,
.form-boton {
	width: 350px;
	height: 50px;
	margin-bottom: 20px;
	padding-left: 10px;
	border: solid 1px var(--color-opacity);
	border-radius: 5px;
}

.footer {
	width: 100%;
	height: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}

.btn {
	width: 350px;
	height: 50px;
	font-family: var(--font-roboto);
	font-size: 14px;
	font-weight: bold;
	border: 1px;
	border-radius: 6px;
	background-color: var(--color-secondary);
	color: var(--bg-sencondary);
	display: flex;
	justify-content: center;
	align-items: center;
}
.form-link {
	color: #5640ff;
	font-weight: bold;
}

.titulo-registrate {
	height: 12vh;
}

@media screen and (max-width: 768px) {
	
	.contenedor {
		display: none;
	}
	.contenedor-extra {
		display: none;
	}	
	
}

@media screen and (max-width: 425px) {
	.contenedor {
		display: none;
	}

	.contenedor-extra {
		display: none;
	}
	
}


</style>