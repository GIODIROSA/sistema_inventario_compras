<template>
  <div>
     <b-table striped hover :items="historialDeVentas" ></b-table>
      
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Ventas",
  computed: {
    ...mapState(['historialDeVentas']),
  },

}
</script>

<style>

</style>