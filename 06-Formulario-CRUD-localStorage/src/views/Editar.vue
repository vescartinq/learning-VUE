<template>
  <div>
    <!-- Editar {{$route.params.id}} - {{tarea}} -->
    <h1 class="my-5">Editar Tarea: {{ tarea.nombre }}</h1>
    <form @submit.prevent="put(tarea)">
      <Input :tarea="tarea" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Input from '../components/Input';
export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(['tarea']),
  },
  methods: {
    ...mapActions(['get', 'put']),
  },
  created() {
    this.get(this.$route.params.id);
  },
};
</script>
