import { createStore } from 'vuex'
import router from '../router/index.js'

export default createStore({
  state: {
    curso:{},
    usuario:{},
    cursos:[],
    carrito:[],
    carritoContador:0,
    precioTotal:0,
  },
  mutations: {
    getCursosMutation(state,payload){
      state.cursos = [...payload];
    },
    getCursoMutation(state,payload){
      state.curso = payload;
    },
    agregarArregloCarritoMutation(state,payload)
    {      
      const car = state.carrito.includes(payload)  
      console.log(car);
      if (!car)
      {
        state.carrito.push(payload);   
        state.precioTotal = 0;
        state.carrito.forEach(cur => {
          state.precioTotal += parseFloat(cur.precio);    
        });  
      }        
    },
    procederGoPasarelaMutation(state,payload)
    {
      router.push('/pasarela');
      // state.usuario = payload;
  
      // if (state.usuario.id == null)
      // {
      //   // this.$router.push({ name: 'Home' });
      //   router.push('/login');
      // }else
      // {
      //   // this.$router.push({ name: "Pasarela"})
      //   router.push('/pasarela');
      // }         
    },
    procederPagarTodoMutation(state,payload){
       state.usuario = payload;  
       if (state.usuario.id == null)
      {
         // this.$router.push({ name: 'Home' });
         router.push('/login');
      }  
    },
    removeArregloCarritoMutation(state,payload)
    {
      const nuevoArreglo = state.carrito.filter(curso => curso != payload);
      state.carrito = [...nuevoArreglo];
      state.precioTotal = 0;
      state.carrito.forEach(cur => {
        state.precioTotal += parseFloat(cur.precio);    
      });   
    }
  },
  actions: {
    async getCursosAction({commit}){
      const data = await fetch('https://floating-spire-75692.herokuapp.com/curso/');
      const info = await data.json();
      this.cursos = info;
      console.log(this.cursos);
      commit('getCursosMutation',this.cursos);
    },
  
    async getCursoAction({commit},id){
      const data = await fetch(`https://floating-spire-75692.herokuapp.com/curso/${id}/`);
      const info = await data.json();
      this.curso = info;
      commit('getCursoMutation',this.curso);
    },
    agregarArregloCarrito({commit},curso){
      // match con mutacion
      commit('agregarArregloCarritoMutation',curso);
    },
    procederGoPasarela({commit},usuario){
      // match con mutacion
      commit('procederGoPasarelaMutation',usuario);
    },
    removeArregloCarrito({commit},curso){
      commit('removeArregloCarritoMutation',curso);
    },
    procederPagarTodo({commit},usuario){
      commit('procederPagarTodoMutation',usuario);
    }
  },
  modules: {
  }
})
