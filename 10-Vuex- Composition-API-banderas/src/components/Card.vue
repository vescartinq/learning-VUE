<template>
  <div class="card mb-2">
    <div class="card-body">
      <h5 class="text-center">{{ pais.name }}</h5>
      <p class="text-center">
        <img
          :src="pais.flag"
          :alt="`bandera-${pais.name}`"
          class="img-fluid w-50"
        />
      </p>
      <p class="card-text">
        <span class="badge badge-dark d-block mb-1"
          >nativeName: {{ pais.nativeName }}</span
        >
        <span class="badge badge-info p-3 d-block mb-1"
          >population: {{ numeroFormato(pais.population) }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >capital: {{ pais.capital }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >region: {{ pais.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pais'],
  setup() {
    const numeroFormato = (num) => {
      // Fórmula para devolver info de población en formato numérico
      return new Intl.NumberFormat('de-DE').format(num);
    };

    return { numeroFormato };
  },
};
</script>
