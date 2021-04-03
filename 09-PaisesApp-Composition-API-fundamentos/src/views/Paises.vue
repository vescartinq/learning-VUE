<template>
  <div>
    <h1>Lista de Paises</h1>
    <p v-for="(pais, index) in arrayData" :key="index">
      <router-link :to="`/paises/${pais.name}`">
        {{ pais.name }}
      </router-link>
    </p>
  </div>
</template>

<script>
import { useFetch } from '../hooks/useFetch';
export default {
  setup() {
    return { ...useFetch('api.json') };
  },
};
</script>
