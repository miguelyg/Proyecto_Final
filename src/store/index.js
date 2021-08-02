import { createStore } from 'vuex'

export default createStore({
  state: {
    curso:{},
    cursos:[],
    carrito:[],
    carritoContador:0
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
      console.log(this.carritoContador);
    }
  },
  actions: {
    async getCursosAction({commit}){
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const info = await data.json();
      this.cursos = info;
      console.log(this.cursos);
      commit('getCursosMutation',this.cursos);
    },
    async getCursoAction({commit},id){
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const info = await data.json();
      this.curso = info;
      console.log(this.curso);
      commit('getCursoMutation',this.curso);
    },
    agregarCarrito({commit}){
      // match con mutacion
      commit('setTareMutation');
    }
  },
  modules: {
  }
})
