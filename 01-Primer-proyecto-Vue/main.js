const app = Vue.createApp({
  data() {
    return {
      nombre: 'Victor',
      edad: 39,
      google: 'https://www.google.es',
      estado: true,
      cantidad: 50,
      servicios: ['Transferencias', 'Pagos', 'Giros'],
      desactivar: false,
    };
  },
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100;
    },
    restarSaldo() {
      this.cantidad = this.cantidad - 50;
    },
    disminuirSaldo() {
      if (this.cantidad === 0 || this.cantidad < 0) {
        alert('llegaste al final');
        this.desactivar = true;
        return;
      }
      this.cantidad = this.cantidad - 100;
    },
  },
  // Propiedades computadas-> Siempre retornan una información
  computed: {
    colorCantidad() {
      return this.cantidad > 500 ? 'text-success' : 'text-danger';
    },
    mayusculasTexto() {
      return this.nombre.toUpperCase();
    },
  },
});
