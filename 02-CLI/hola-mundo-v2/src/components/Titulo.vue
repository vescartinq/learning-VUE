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

<!-- Scope-> estilos solo en este componente -->
<style scope>
h1 {
  color: peru;
}
</style>
