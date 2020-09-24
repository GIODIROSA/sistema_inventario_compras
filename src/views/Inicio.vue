<template>
  <div class="inicio container px-5">
    <h1>32bit</h1>
    <h2>Juegos de PC y consola</h2>
    <hr />
    <!-- codigo -->
    <label>Codigo</label>
    <b-form-input
      id="input-2"
      v-model="id"
      placeholder="Codigo"
    ></b-form-input>
    <!-- nomnbre -->
    <label>Nombre</label>
    <b-form-input
      id="input-2"
      :disabled="true"
      v-model="game.nombre"
      placeholder="Nombre"
    ></b-form-input>
    <!-- precio -->
    <label>Precio</label>
    <b-form-input
      id="input-2"
      :disabled="true"
      v-model="game.precio"
      placeholder="Precio"
    ></b-form-input>
    <!-- stock -->
    <label>Stock</label>
    <b-form-input
      id="input-2"
      :disabled="true"
     v-model="game.stock"
      placeholder="Stock"
    ></b-form-input>
    <b-button type="submit" @click="Descontar" variant="outline-primary">Comprar</b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Inicio",
  data() {
    return {
      id: "",
    }
  },
  methods: {
    Descontar() {
      this.$store.dispatch("descontar", this.id)
      
    }
  },//final de methods
  computed: {
   ...mapState(['juegos']),
   game(){
     let juego={
       nombre:"",
       precio: "",
       stock:""
     }
     return this.juegos.find((j)=> j.id == this.id) || juego


   }
  },//final de computed
};
</script>
