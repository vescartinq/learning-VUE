<template>
  <div>
    <h1>Ingreso de usuarios</h1>
    <form @submit.prevent="ingresoUsuario({email:$v.email.$model,pass:$v.pass.$model})">
      <input type="email" v-model="$v.email.$model" class="form-control my-2" placeholder="Ingresa un Email">

      <small class="text-danger d-block" v-if="!$v.email.required">Campo Requerido</small>
      <small class="text-danger d-block" v-if="!$v.email.email">
        Email no válido
      </small>

      <input type="password" v-model="$v.pass.$model" class="form-control my-2" placeholder="Ingresa una contraseña">

      <small class="text-danger d-block" v-if="!$v.pass.required">
        Campo Requerido
      </small>
      <small class="text-danger d-block" v-if="!$v.pass.minLength">
        Mínimo 6 carácteres
      </small>

      <button type="submit" class="btn btn-info"
              :disabled="$v.$invalid">
        Acceder
      </button>
    </form>
    <p v-if="error === 'auth/user-not-found'">Usuario incorrecto</p>
    <p v-if="error === 'auth/wrong-password'">Contraseña incorrecta</p>
    <!-- {{$v.email}} -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'Ingreso',
  data(){
    return{
      email: '',
      pass: ''
    }
  },
  methods:{
    ...mapActions(['ingresoUsuario'])
  },
  computed:{
    ...mapState(['error'])
  },
  validations:{
    email:{required, email},
    pass:{required, minLength: minLength(6) }
  }
}
</script>
