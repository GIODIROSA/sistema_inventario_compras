<template>
  <div id="principal" class="inicio">
    <div class="banner">
      <img
        class="imagenVertical"
        src="../assets/01.jpg"
        alt="img de video juego"
      />
    </div>
    <div class="inputs">
      <h1 class="titleApp">
        32bit <span class="modificacionTitulo">Juegos de PC y consola</span>
      </h1>
      <hr />
      <!-- codigo -->
      <!-- version ingreso con select -->
      <label class="etiqueta">Seleccione un Juego:</label>
      <select v-model="nombre" class="selectorJuego">
        <option disabled selected>Seleccione el titulo</option>
        <option
          v-for="(juego, clave) in juegos"
          :key="clave"
          :value="juego.nombre"
          >{{ juego.nombre }}</option
        >
      </select>
      <!-- version input ingresar id -->
      <!-- <b-form-input
        id="input-compra"
        v-model="id"
        placeholder="Codigo"
      ></b-form-input> -->
      <!-- nomnbre -->
      <label class="etiqueta">Nombre:</label>
      <b-form-input
        id="input-compra"
        :disabled="true"
        v-model="game.nombre"
        placeholder="Nombre"
      ></b-form-input>
      <!-- precio -->
      <label class="etiqueta">Precio:</label>
      <b-form-input
        id="input-compra"
        :disabled="true"
        v-model="game.precio"
        placeholder="Precio"
      ></b-form-input>
      <!-- stock -->
      <label class="etiqueta">Stock:</label>
      <b-form-input
        id="input-compra"
        :disabled="true"
        v-model="game.stock"
        placeholder="Stock"
      ></b-form-input>
      <b-button type="submit" @click="Descontar" class="btnComprar my-4"
        >Comprar</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Inicio",
  data() {
    return {
      id: "", //estado de id del input
      nombre: "", //estado de select por nombre
    };
  },
  methods: {
    // version 01
    ...mapActions(["descontar"]),
    Descontar() {
      // this.descontar(this.id)//le puedo pasar nombre a la mutations, solo un parametro
      this.descontar(this.nombre);
    },
    // version 02
    // Descontar() {
    //   this.$store.dispatch("descontar", this.id);
    // },
  }, //final de methods
  computed: {
    ...mapState(["juegos"]),
    game() {
      let juego = {
        nombre: "",
        precio: "",
        stock: "",
      };
      return this.juegos.find((j) => j.nombre == this.nombre) || juego;
    },
  }, //final de computed
};
</script>

<style lang="scss" scoped>
.inicio {
  // background: chartreuse;
  display: flex;
  background: url("../assets/fondo.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 550px;
  width: 100%;
  filter: grayscale(85%);
}

.titleApp {
  padding: 0px 100px;
  font-size: 100px;
  font-weight: 900;
  color: #f1f3f8;
  &:hover {
    color: #d6e0f0;
  }
  .modificacionTitulo {
    font-size: 20px;
    font-weight: 400;
  }
}
.imagenVertical {
  height: 550px;
}
.etiqueta {
  display: block;
  text-align: left;
  padding: 0 100px;
  color: white;
}
#input-compra {
  // padding: 0 100px;
  margin: 0px 100px;
}
.selectorJuego {
  padding: 10px 152px;
  border: 0;
  border-radius: 5px;
}
.btnComprar {
  text-align: center;
  padding: 5px 200px;
  margin: 0px;
}
</style>
