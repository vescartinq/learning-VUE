<template>
  <h3>Contador Dos: {{ contadorDos }}</h3>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const contadorDos = inject('contador');
    return { contadorDos };
  },
};
</script>
