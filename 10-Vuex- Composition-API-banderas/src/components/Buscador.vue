<template>
  <input
    type="text"
    placeholder="Ingrese País"
    class="form-control my-3"
    v-model="texto"
    @keyup="procesarInput"
  />
  <!-- @keyup -> emite el evento al presionar la tecla enter -->
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    // valor que se irá modificando
    const texto = ref('');
    const store = useStore();

    const procesarInput = () => {
      // console.log(texto.value)
      store.dispatch('filtroNombre', texto.value);
    };

    // recibimos input, lo procesamos
    return { texto, procesarInput };
  },
};
</script>
