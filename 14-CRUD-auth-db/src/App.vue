<template>
  <div class="container mt-2" id="app">
    <div>
      <router-link
        class="btn btn-dark mr-2"
        to="/registro"
        v-if="!existeUsuario"
        >Registro</router-link
      >
      <router-link class="btn btn-dark mr-2" to="/ingreso" v-if="!existeUsuario"
        >Ingreso</router-link
      >
      <router-link class="btn btn-dark mr-2" to="/" v-if="existeUsuario"
        >Inicio</router-link
      >

      <button @click="cerrarSesion" v-if="existeUsuario">Cerrar Sesión</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['cerrarSesion']),
  },
  computed: {
    ...mapGetters(['existeUsuario']),
  },
};
</script>
