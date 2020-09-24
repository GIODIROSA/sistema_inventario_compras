import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        id: "001",
        nombre: "seiko",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        id: "002",
        nombre: "fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        id: "003",
        nombre: "gears of war 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        id: "004",
        nombre: "mario tennis aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        id: "005",
        nombre: "bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        id: "006",
        nombre: "forza horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters:{
    productosConStock: (state) =>{
      return state.juegos.filter((producto)=>{
        return producto.stock > 0;
      });
    },
    productoDisponiblePorId: (state, getters) => (id) =>{
      return getters.productosConStock.filter((producto)=>
       producto.id == id
      )
    }

  },
  mutations: {
    DESCONTAR(state, payload){
      state.juegos= state.juegos.map((e)=>{
        if(e.id == payload){
          e.stock--
        }
        return e

      })

    }
  },
  actions: {
    descontar({commit}, payload){
      commit('DESCONTAR', payload)
    }
  },
  modules: {},
});



