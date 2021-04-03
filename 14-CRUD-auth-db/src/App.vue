<template>
  <div id="app">
    <div id="nav">
      <router-link to="/registro" v-if="!existeUsuario">Registro</router-link> |
      <router-link to="/ingreso" v-if="!existeUsuario">Ingreso</router-link> |
      <router-link to="/" v-if="existeUsuario">Inicio</router-link> |
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
