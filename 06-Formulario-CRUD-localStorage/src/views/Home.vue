<template>
  <div>
    <h1 class="my-5">Formularios con Vue.js</h1>

    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea" />
    </form>
    <hr />
    <ListaTareas />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
const shortid = require('shortid');
// import shortid from 'shortid';

import Input from '../components/Input';
import ListaTareas from '../components/ListaTareas';

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas,
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(['post']),
    procesarFormulario() {
      console.log(this.tarea);
      if (this.tarea.nombre.trim() === '') {
        console.log('Campo vacío');
        return;
      }
      console.log('no está vacio');

      // generar id
      this.tarea.id = shortid.generate();
      console.log(this.tarea.id);

      // enviar los datos
      this.post(this.tarea);

      // limpiar datos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      };
    },
  },
};
</script>
