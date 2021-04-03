<template>
  <div class="home">
    <h1>Home</h1>
    <contador-uno />
    <aumentar />
    <disminuir />
    <contador-dos />
  </div>
</template>

<script>
import Aumentar from '../components/Aumentar.vue';
import ContadorDos from '../components/ContadorDos.vue';
import ContadorUno from '../components/ContadorUno.vue';
import Disminuir from '../components/Disminuir.vue';

export default {
  name: 'Home',
  components: { ContadorUno, Aumentar, Disminuir, ContadorDos },
};
</script>
