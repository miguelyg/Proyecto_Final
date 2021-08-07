import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

function openMetodo(metodoName) {
	var i;
	var x = document.getElementsByClassName('metodo');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	document.getElementById(metodoName).style.display = 'block';
}
