<template>
  <div>
    <h1>contador: {{ contador }}</h1>
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
  </div>
</template>

<script>
import Btn from '../components/Btn';
import { useContador } from '../hooks/useContador';

export default {
  components: {
    Btn,
  },
  setup() {
    //   MÉTODO NORMAL
    // const {contador, aumentar, disminuir} = useContador()
    // return {contador, aumentar, disminuir}

    // MÉTODO HOOKS COMPOSITION
    return { ...useContador() };
  },
};
</script>
