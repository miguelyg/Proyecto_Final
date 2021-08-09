import { createStore } from 'vuex'

export default createStore({
  state: {
    curso:{},
    cursos:[],
    carrito:[],
    carritoContador:0,
  },
  mutations: {
    getCursosMutation(state,payload){
      state.cursos = [...payload];
    },
    getCursoMutation(state,payload){
      state.curso = payload;
    },
    agregarCarrito(state){
      state.carritoContador++;
    },
    agregarArregloCarritoMutation(state,payload)
    {
      state.carrito.push(payload);
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
    agregarCarrito({commit}){
      // match con mutacion
      commit('agregarCarrito');
    },
    agregarArregloCarrito({commit},curso){
      console.log(curso);
      // match con mutacion
      commit('agregarArregloCarritoMutation',curso);
    }
  },
  modules: {
  }
})
