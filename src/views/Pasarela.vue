<template>
  <div class="fondo">
			<div class="container">
				<header class="header">
					<div class="logo">
						<div><img src="../assets/images/other/icon-pachaqtec.svg" alt="" /></div>
						<div class="tipografia">
							<img src="../assets/images/other/pachaqtec.svg" alt="" />
							<p class="eslogan">ESCUELA DE CODING</p>
						</div>
					</div>
					<div class="menu">
						<div class="carrito">
							<a href="#"> <img src="../assets/images/other/carrito.svg" alt="carrito" /></a>
						</div>
						<div class="menu-toggle">
							<a href="#"><img src="../assets/images/other/togle.svg" alt="togle" /></a>
						</div>
					</div>
				</header>
			</div>
		</div>
		<main class="container">
			<section class="left">
				<div class="seccion-titulo">
					<div>
                        <router-link to="/miscompras">
									<p class="icon-flecha"></p>
						</router-link>	     
						
					</div>
					<div>
						<h1>Pasarela de pagos</h1>
					</div>
				</div>
				<section class="pasarela">
					<div class="metodo-pago">
						<div>
							<h2 class="subtitulo">Selecciona tu método de pago</h2>
						</div>
						<div class="menu-metodo">
							<button class="btn" onclick="openMetodo('Credito')">
								Credito
							</button>
							<button class="btn" onclick="openMetodo('Debito')">Debito</button>
							<button class="btn" onclick="openMetodo('Efectivo')">
								Pago Efectivo
							</button>
						</div>
					</div>

					<div id="Credito" class="metodo">
						<section class="datos-personales">
							<h2 class="subtitulo">Datos personales</h2>

							<div class="usuario">
								<input
									class="usuario-dni"
									type="text"
									placeholder="Documento de identidad"
								/>
								<input
									class="usuario-correo"
									type="email"
									placeholder="Correo electrónico"
								/>
							</div>
						</section>
						<section class="info-tarjeta">
							<h2 class="subtitulo">Ingresar la información de tu tarjeta</h2>
							<div class="datos-tarjeta">
								<input
									class="nombre-titular"
									type="text"
									placeholder="Nombre en la tarjeta"
								/>
								<input
									class="numero-tarjeta"
									type="text"
									placeholder="0000 1111 2222 3333"
								/>
							</div>
							<div class="valida-tarjeta">
								<input class="tarjeta-mes" type="text" placeholder="Mes" />
								<input class="tarjeta-anio" type="text" placeholder="Año" />
								<input class="tarjeta-cvc" type="text" placeholder="CVC/CVV" />
							</div>
						</section>
						<section class="cuotas">
							<h2 class="subtitulo">Nº de cuotas</h2>
							<div class="nro-cuotas">
								<btn class="cuota">01</btn>
								<btn class="cuota">02</btn>
								<btn class="cuota">03</btn>
								<btn class="cuota">04</btn>
								<btn class="cuota">05</btn>
								<btn class="cuota">06</btn>
								<btn class="cuota">12</btn>
								<btn class="cuota">24</btn>
							</div>
						</section>
						<div class="bloque">
							<p>solicitar factura</p>
						</div>
						<div class="finalizar">
							<button class="btn btn-activo"> Finalizar compra</button>
						</div>
					</div>

					<div id="Debito" class="metodo" style="display: none">
						<section class="datos-personales">
							<h2 class="subtitulo">Datos personales</h2>

							<div class="usuario">
								<input
									class="usuario-dni"
									type="text"
									placeholder="Documento de identidad"
								/>
								<input
									class="usuario-correo"
									type="email"
									placeholder="Correo electrónico"
								/>
							</div>
						</section>
						<section class="info-tarjeta">
							<h2 class="subtitulo">Ingresar la información de tu tarjeta</h2>
							<div class="datos-tarjeta">
								<input
									class="nombre-titular"
									type="text"
									placeholder="Nombre en la tarjeta"
								/>
								<input
									class="numero-tarjeta"
									type="text"
									placeholder="0000 1111 2222 3333"
								/>
							</div>
							<div class="valida-tarjeta">
								<input class="tarjeta-mes" type="text" placeholder="Mes" />
								<input class="tarjeta-anio" type="text" placeholder="Año" />
								<input class="tarjeta-cvc" type="text" placeholder="CVC/CVV" />
							</div>
						</section>
						<div class="bloque">
							<p>solicitar factura</p>
						</div>
						<div class="finalizar">
							<button class="btn btn-activo"> Finalizar compra</button>
						</div>
					</div>

					<div id="Efectivo" class="metodo" style="display: none">
						<section class="pagoEfectivo-logo">
							<img src="../assets/images/other/logo-pago-efectivo.svg" alt="" />
							<div>
								<img src="../assets/images/other/pago-efectivo.svg" alt="" />
							</div>
						</section>
						<section class="bloque">
							<h2 class="subtitulo">Pasos a seguir:</h2>
							<p class="parrafo">
								Enviaremos un código de pago CIP a tu correo electrónico, con el
								cual podrás pagar de la siguiente manera:
							</p>
						</section>

						<section class="bloque">
							<h2 class="subtitulo">Banca por internet y móvil</h2>
							<p class="parrafo">
								Paga por internet vía transferencia desde el aplicativo móvil o
								web de tu banco de preferencia.
							</p>
						</section>
						<div class="banca">
							<img src="../assets/images/other/bbva.svg" alt="" />
							<img src="../assets/images/other/bcp.svg" alt="" />
							<img src="../assets/images/other/interbank.svg" alt="" />
							<img src="../assets/images/other/scotiabank.svg" alt="" />
							<img src="../assets/images/other/banbif.svg" alt="" />
							<img src="../assets/images/other/caja-aqp.svg" alt="" />
						</div>
						<section class="bloque">
							<h2 class="subtitulo">Agencia y agentes</h2>
							<p class="parrafo">
								Realiza depósitos en efectivo en agencias bancarias, agentes,
								bodegas a nivel nacional.
							</p>
						</section>
						<div class="agencias">
							<img src="../assets/images/other/bbva.svg" alt="" />
							<img src="../assets/images/other/bcp.svg" alt="" />
							<img src="../assets/images/other/interbank.svg" alt="" />
							<img src="../assets/images/other/scotiabank.svg" alt="" />
							<img src="../assets/images/other/banbif.svg" alt="" />
							<img src="../assets/images/other/caja-aqp.svg" alt="" />
							<img src="../assets/images/other/kasnet.svg" alt="" />
							<img src="../assets/images/other/western-union.svg" alt="" />
							<img src="../assets/images/other/fullcarga.svg" alt="" />
							<img src="../assets/images/other/tambo.svg" alt="" />
						</div>
						<div class="nuevas-agencias"> 
							<img src="../assets/images/other/moneygram.svg" alt="" />
							<img src="../assets/images/other/disashop.svg" alt="" />
						</div>
						<div class="bloque">
							<p>solicitar factura</p>
						</div>
						<div class="finalizar">
							<button class="btn btn-activo"> Finalizar compra</button>
						</div>
					</div>
				</section>
			</section>

			<section class="right">
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
						<div >
							<p class="curso-precio"> S/269</p>
						</div>
					</div>
				</section>
				<div class="descuento">
					<input
						class="descuento-input"
						type="text"
						placeholder="Agregar código del descuento"
					/>
					<a href="#"><img src="../assets/images/other/send.svg" alt="enviar" /></a>
				</div>
				<div class="compra-box">
					<h3 class="sub-titulo">Subtotal</h3>
					<p class="sub-precio">S/.600</p>
				</div>
			</section>
				
		</main>
</template>run

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
	background-color: var('--bg-sencondary');
	color: var(--color-primary);
}
li {
	list-style: none;
}
a {
	text-decoration: none;
}
h1 {
	font-size: 20px;
}

.fondo {
	background-color: var(--bg-primary);
}
.container {
	margin: 0 auto;
	width: 90%;
	max-width: 1186px;
}
main {
	display: flex;
	justify-content: space-between;
}
.header {
	height: 100px;
	background-color: var(--bg-primary);
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
}
.eslogan {
	color: var(--bg-sencondary);
	font-size: 12px;
}
.logo,
.menu {
	display: flex;
	justify-content: space-between;
	width: 184.22px;
	height: 32px;
}
.menu {
	width: 100px;
}
.left {
	max-width: 693px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

.right {
	border: 0;
	max-width: 443px;
	width: 50%;
}
.seccion-titulo {
	width: 210px;
	height: 50px;
	display: flex;
	justify-content: space-between;
}
.icon-flecha {
	width: 20px;
	height: 17px;
	background: url(../assets/images/other/arrow.svg);
}
.titulo {
	font-size: 20px;
}
.subtitulo {
	font-size: 16px;
	width: 100%;
}
.pasarela {
	border: 0;
}
.metodo-pago {
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
}
.menu-metodo {
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/*  Link Visited Hover Active: */
.btn {
	width: 227px;
	height: 50px;
	font-family: var(--font-roboto);
	font-size: 14px;
	font-weight: bold;

	border: var(--bg-inactive);
	border-radius: 6px;
	background-color: var(--bg-inactive);
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn:link {
	background-color: var(--color-inactive);
}
.btn:visited {
	background-color: var(--color-secondary);
	color: var(--color-white);
}
.btn:hover {
	background-color: var(--color-secondary);
	color: var(--color-white);
}

.btn:active {
	background-color: var(--color-secondary);
}

.metodo  {
	height: auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.datos-personales{
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
}
input{
	height: 50px;
	width:330px;
	padding-left: 15px;
	background-color: var(--bg-sencondary);
	border: 1px var(--color-opacity) solid ;
	border-radius:6px;
	
}
.info-tarjeta{
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
}
.usuario, .datos-tarjeta{
	display: flex;
	justify-content: space-between;
}
.valida-tarjeta{
	width: 48%;
	display:flex;
	justify-content: space-between;
}
.tarjeta-mes, .tarjeta-anio, .tarjeta-cvc{
	width: 95px;
	
}
.cuotas{
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
}
.cuota{
	width: 60px;
	height: 50px;
	border: 1px solid var(--color-opacity);
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cuota:hover{
	background-color: var(--color-secondary);
	color: var(--color-white);
}

.nro-cuotas{
	display: flex;
	justify-content: space-evenly;
}
.pagoEfectivo-logo{
	width: 243px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.bloque{
	width: 90%;
	height: 80px;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
}
.parrafo{
	font-family: var(--font-roboto);
	font-size: 14px;
}
.banca, .agencias,.nuevas-agencias{
	width: 75%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-content: space-around;
	flex-wrap: wrap;

}
.agencias{
	width: 75%;
	height: 100px;
}
.nuevas-agencias{
	width: 28.5%;
	height: 45px;
}
.btn-activo{
	
	background-color: var(--color-secondary);
	color: var(--color-white);
}

.finalizar{
	height: 100px;
	display: flex;
	justify-content: flex-end;
}


/* right */
.right{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
}
.cursos{
	height: auto;
	width: 80%;
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
}
.curso{
	position: relative;
	width: 335px;
	height: 100px;
	margin-top: 20px;
	display: flex;
	justify-content: flex-start;
}
.curso-info {
	margin-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.curso-titulo, .dscto{
	font-family: var(--font-roboto);
	font-size: 12px;
}
.eliminar, .curso-precio{
font-family: var(--font-poppins);
font-size: 12px;
}
.curso-precio{
	position: absolute;
	bottom: 0;
}

.descuento {
	width: 333px;
	height: 50px;
	border: 1px solid var(--color-opacity);
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
.compra-box {
	width: 80%;
	height: 100px;
	margin-top: 50px;
	border-top:var(--color-opacity) 1px solid ;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>