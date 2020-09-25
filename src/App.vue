<template>
  <div id="app">
    <div id="nav">
      <router-link class="menu"  to="/">Inicio</router-link> 
      <router-link class="menu" :to="{name: 'Busqueda'}">Busqueda</router-link> 
      <router-link class="menu" :to="{name: 'Ventas'}">Ventas</router-link> 
      <router-link class="menu" :to="{name: 'Inventario'}">Inventario</router-link> 
    </div>
    <router-view/>
   
   <Footer />
   
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: "App",
  components:{
    Footer,
  }

}
</script>

<style lang="scss">
#app {
 font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: right;

  a {
    font-weight: 400;
    color: #8d93ab;
    padding: 0px 20px ;
    .menu{
      text-align: right;
    }

    &.router-link-exact-active {
      color: #393b44;
    }
  }
  footer{
    .footerJuego{

    width: 100%;
    height: 350px;
    background: #d6e0f0;
    }
  }
}
</style>
