<template>
  <div>
    <div class="bannerBusqueda">
      <h1 class="titleBusqueda">Búsqueda de producto Disponible</h1>
    </div>
    <!-- input que carga la data -->
    <input class="inputBusqueda" type="text" v-model="producto" />
    <!-- listado resultado de la busqueda -->
    <b-list-group v-if="check">
      <b-list-group-item
        class="listadoBusqueda container my-2 py-2"
        v-for="(producto, clave) in productoDisponiblePorId"
        :key="clave"
        ><label
          >nombre: {{ producto.nombre }} | stock: {{ producto.stock }} | precio:
          ${{ producto.precio }}</label
        ></b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Busqueda",
  data() {
    return {
      producto: "",
    };
  },
  computed: {
    //metodo que captura el valor del input para ser utilizado en el store en getters
    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.producto);
    },
    //reset del input
    check() {
      return this.productoDisponiblePorId.length > 0 && this.producto !== "";
    },
  },
};
</script>

<style lang="scss" scoped>
.inputBusqueda {
  margin: 50px;
  padding: 10px;
  border-radius: 10px;
}
.bannerBusqueda {
  background: url("../assets/fondobusqueda.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 550px;
  filter: grayscale(85%);
}
.titleBusqueda {
  display: block;
  margin: auto;
  padding: 150px;
  font-weight: 600;
  font-size: 100px;
  color: white;
}
.listadoBusqueda {
  text-align: left;
  list-style: none;
  font-size: 20px;
}
</style>
