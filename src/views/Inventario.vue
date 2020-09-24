<template>
  <div>
      <h1>hola soy Inventario</h1>
     <b-table striped hover :items="juegos" :fields="fields"></b-table>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Inventario",
  data() {
    return {
      fields: ['id', 'nombre', 'stock', 'precio', 'color']
    }
  },
  computed: {
  ...mapState([
    'juegos'
  ])
  },

}
</script>

<style>

</style>