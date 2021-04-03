<template>
  <Home />
</template>

<script>
import { provide, ref } from 'vue';

import Home from './components/Home';

export default {
  name: 'App',
  components: { Home },
  setup() {
    const contador = ref(0);

    provide('contador', contador);
  },
};
</script>
