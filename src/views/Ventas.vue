<template>
  <div>
    <div class="bannerVentas">
      <h1 class="tituloHistorial">Historial de Ventas</h1>
    </div>
    <div class="container py-5">
      <b-table striped hover :items="historialDeVentas"></b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ventas",
  computed: {
    ...mapState(["historialDeVentas"]),
  },
};
</script>

<style lang="scss" scoped>
.bannerVentas {
  background: url("../assets/fondoventas.jpg");
  background-attachment: fixed;
  width: 100%;
  height: 550px;
  filter: grayscale(85%);
}
.tituloHistorial {
  display: block;
  margin: auto;
  padding: 150px;
  font-size: 100px;
  font-weight: 600;
  color: white;
  text-shadow: 2px 5px 3px gray;
}
</style>
