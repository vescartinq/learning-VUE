<template>
  <div class="home">
    <!-- ACCIONES -->
    <!-- En el componente -->
    <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <br />
    <!-- Mediante otro componente -->
    <BtnDisminuir />

    <hr />

    <!-- ACCIONES POR PARÁMETROS -->
    <!-- Mismo componente con ejecuciones diferentes -->
    <BotonAccion :estado="true" />
    <br />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import BtnDisminuir from '../components/BtnDisminuir';
import BotonAccion from '../components/BotonAccion';

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion,
  },
  data() {
    return {
      titulo: 'Mi contador Vuex',
    };
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? { color: 'green' } : { color: 'red' }];
    },
  },
  methods: {
    ...mapMutations(['incrementar']), // No recomendado, mismo efecto que mapActions
    ...mapActions(['accionIncrementar']),
  },
};
</script>
