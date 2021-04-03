<template>
  <button @click="aumentar">Aumentar</button>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const contador = inject('contador');

    const aumentar = () => {
      contador.value++;
    };

    return { aumentar };
  },
};
</script>
