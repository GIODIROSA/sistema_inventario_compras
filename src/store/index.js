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
      },
      {
        id: "002",
        nombre: "fifa 21",
        stock: 100,
        precio: 25000,
      },
      {
        id: "003",
        nombre: "gears of war 4",
        stock: 100,
        precio: 15000,
      },
      {
        id: "004",
        nombre: "mario tennis aces",
        stock: 100,
        precio: 35000,
      },
      {
        id: "005",
        nombre: "bloodborne",
        stock: 100,
        precio: 10000,
      },
      {
        id: "006",
        nombre: "forza horizon 4",
        stock: 100,
        precio: 2000,
      },
    ],
    historialDeVentas: [],
  },
  getters: {
    // filtra el elemento de los productos disponible con stock
    productosConStock: (state) => {
      return state.juegos.filter((producto) => {
        return producto.stock > 0;
      });
    },
    // filtra el producto ingresado en el input de busqueda e incluye el nombre de objeto juegos
    productoDisponiblePorId: (state, getters) => (producto) => {
      return getters.productosConStock.filter(
        (p) => p.id == producto || p.nombre.includes(producto)
      );
    },
  },
  mutations: {
    // transformar el id del evento btn y mutarlo
    //recepcionar el elemento iterado, se guarda en un array vacio en el state (historialdeVenta)
    DESCONTAR(state, payload) {
      state.juegos = state.juegos.map((e) => {
        if (e.id == payload.trim()) {
          e.stock--;
          state.historialDeVentas.push(e);
        }
        return e;
      });
    },
  },
  actions: {
    // recepción del id cargado por el evento btn
    descontar({ commit }, payload) {
      commit("DESCONTAR", payload);
    },
  },
  modules: {},
});
