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
					<div>
						<p>Con el respaldo de:</p>
						<img src="../assets/images/other/intercorp.svg" alt="intercorp" />
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
				<nav>
					<ul class="menu">
						<li><a href="#">Iniciar Sesión</a></li>
						<li><a href="#">Registrarse</a></li>
					</ul>
				</nav>
				<div class="form">
					<div class="sesion">
						<p>Puedes iniciar sesión con:</p>
						<section class="form-redes">
							<img src="../assets/images/other/fb.svg" alt="Facebook" />
							<img src="../assets/images/other/in.svg" alt="Linkenin" />
						</section>
						<p>Tambien puedes iniciar sesión con tu correo</p>
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
					</div>
                    <div class="ingresar">
                        <div class="form-boton">
                            <a href="#">ingresar</a>
                        </div>
                        <a class="form-link" href="#">¿Olvidades tu contraseña?</a>
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
}

li {
	list-style: none;
}
.fondo {
	background: url(../assets/images/other/fondo.png);
	width: 100%;
	height: 100vh;
	background-size: cover;
	display: flex;
	display: grid;
	grid-template-columns: 30% 40% 30%;
	grid-template-rows: repeat(4, 1fr);
	overflow: hidden;
}
.contenedor {
	margin: 0 auto;
	width: 100%;
	height: 100vh;
	display: grid;
	grid-column: 1/2;
	grid-row: 1/5;
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
.marcas {
	width: 320px;
	height: 88%;
	color: white;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-end;
}
.main {
	width: 100%;
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