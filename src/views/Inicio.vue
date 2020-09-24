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
      
      placeholder="Nombre"
    ></b-form-input>
    <!-- precio -->
    <label>Precio</label>
    <b-form-input
      id="input-2"
      
      placeholder="Precio"
    ></b-form-input>
    <!-- stock -->
    <label>Stock</label>
    <b-form-input
      id="input-2"
     
      placeholder="Stock"
    ></b-form-input>
    <b-button type="submit" @click="Descontar" variant="outline-primary">Comprar</b-button>
  </div>
</template>

<script>
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
  },
};
</script>
