<template>
  <div>
    <h1>Agregar</h1>
    <form 
    @submit.prevent="agregarTarea($v.nombre.$model)" 
    class="form-inline">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input type="text" class="form-control" v-model="$v.nombre.$model">
      </div>
      <button type="submit" 
        class="btn btn-primary mb-2"
        :disabled="$v.$invalid || carga">
        Agregar
      </button>
    </form>
    <small class="text-danger d-block" v-if="!$v.nombre.required">
        Campo requerido
    </small>
    <small class="text-danger d-block" v-if="!$v.nombre.minLength">
        Mínimo 5 carácteres
    </small>
    <!-- {{$v.nombre}} -->
    {{$v}}
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Agregar',
  data(){
    return{
      nombre: ''
    }
  },
  methods:{
    ...mapActions(['agregarTarea'])
  },
  validations:{
    nombre:{required, minLength:minLength(5)}
  },
  computed:{
    ...mapState(['carga'])
  }
}
</script>

