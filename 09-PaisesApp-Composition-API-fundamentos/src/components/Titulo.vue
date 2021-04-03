<template>
  <h1 :style="{ color: color }">Contador: {{ signoEuro }}</h1>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['contador', 'color'],
  setup(props) {
    console.log(props.contador);

    const signoEuro = computed(() => {
      return props.contador + ' €';
    });

    return { signoEuro };
  },
  // computed: {
  //     signoPeso(){
  //         return '$' + this.contador
  //     }
  // }
};
</script>
