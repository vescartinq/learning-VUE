<template>
  <button @click="disminuir">Disminuir</button>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const contador = inject('contador');
    const disminuir = () => {
      contador.value--;
    };
    return { disminuir };
  },
};
</script>
