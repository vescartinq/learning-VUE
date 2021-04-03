<template>
  <div class="row">
    <div class="col-12" v-for="pais in paises" :key="pais.name">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import Card from './Card';

export default {
  components: {
    Card,
  },
  setup() {
    //   Recibir info del store
    const store = useStore();

    // Propiedad computada, porque se irá modificando con las peticiones
    const paises = computed(() => {
      return store.getters.topPaisesPoblacion;
    });

    // Consumo de la API antes de montar el componente
    // dispatch para ejecutar la acción del store
    onMounted(async () => {
      await store.dispatch('getPaises');
      await store.dispatch('filtrarRegion', 'Americas');
    });

    return { paises };
  },
};
</script>

<style></style>
