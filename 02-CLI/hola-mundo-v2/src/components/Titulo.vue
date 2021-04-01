<template>
  <h1>{{ texto }}</h1>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    texto: String,
  },
};
</script>

<!-- Scoped-> estilos solo en este componente -->
<style scoped>
h1 {
  color: peru;
}
</style>
