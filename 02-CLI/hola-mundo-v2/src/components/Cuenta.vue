<template>
  <div>
    <h2>Tipo de cuenta: {{ cuenta }}</h2>
    <h2>Saldo: {{ saldo }}</h2>
    <h2>Cuenta {{ estado ? 'Activa' : 'Desactivada' }}</h2>
    <div v-for="(servicio, index) in servicios" :key="index">
      {{ index + 1 }} - {{ servicio }}
    </div>

    <br />

    <AccionSaldo texto="Aumentar Saldo" @accion="aumentarSaldo" />
    <br />
    <AccionSaldo
      texto="Disminuir Saldo"
      @accion="disminuirSaldo"
      :desactivar="desactivar"
    />
  </div>
</template>

<script>
import AccionSaldo from './AccionSaldo';

export default {
  components: {
    AccionSaldo,
  },
  data() {
    return {
      saldo: 1000,
      cuenta: 'Visa',
      estado: false,
      servicios: ['giro', 'abono', 'transferencia'],
      desactivar: false,
    };
  },
  methods: {
    aumentarSaldo() {
      this.saldo = this.saldo + 100;
      this.desactivar = false;
    },
    disminuirSaldo() {
      if (this.saldo === 0) {
        this.desactivar = true;
        alert('llegaste al final');
        return;
      }
      this.saldo = this.saldo - 100;
    },
  },
};
</script>

<style></style>
