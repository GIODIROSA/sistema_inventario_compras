<template>
  <div>
    <div class="bannerInventario">
      <h1 class="tituloInventario">INVENTARIO</h1>
    </div>
    <div class="tablaImagen py-5 container">
      <b-table striped hover :items="juegos"></b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Inventario",
  data() {
    return {
      fields: ["id", "nombre", "stock", "precio"],
    };
  },
  computed: {
    ...mapState(["juegos"]),
  },
};
</script>

<style lang="scss" scoped>
.bannerInventario {
  background: url("../assets/fondoInventario.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 550px;
  width: 100%;
  filter: grayscale(85%);

  .tituloInventario {
    display: block;
    margin: auto;
    padding: 150px;
    color: white;
    font-size: 100px;
    font-weight: 900;
  }
}
</style>
