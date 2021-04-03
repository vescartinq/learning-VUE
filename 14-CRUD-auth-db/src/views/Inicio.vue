<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link to="/agregar">
      <button class="btn btn-primary mb-2">Agregar</button>
    </router-link>
    <ul class="list-group">
      <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
        {{ item.id }} - {{ item.nombre }}
        <router-link
          :to="{ name: 'Editar', params: { id: item.id } }"
          class="float-right ml-2"
        >
          <button class="btn btn-warning">Editar</button>
        </router-link>
        <button
          @click="eliminarTarea(item.id)"
          class="btn btn-danger float-right"
        >
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Inicio',
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(['getTareas', 'eliminarTarea']),
  },
  computed: {
    ...mapState(['tareas']),
  },
};
</script>
