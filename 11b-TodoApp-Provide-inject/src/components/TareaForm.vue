<template>
  <form @submit.prevent="agregarTarea">
    <input
      type="text"
      placeholder="Ingrese tarea"
      class="form-control my-2"
      v-model.trim="texto"
    />
    <button class="btn btn-primary w-100">Agregar</button>
  </form>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  setup() {
    const texto = ref('');
    const tareas = inject('tareas');

    const agregarTarea = () => {
      if (texto.value === '') {
        return console.log('texto vacio');
      }
      const tarea = {
        texto: texto.value,
        estado: false,
        id: Date.now(),
      };

      tareas.value.push(tarea);

      texto.value = '';
    };

    return { agregarTarea, texto };
  },
};
</script>

<style></style>
