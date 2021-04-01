app.component('footer-banco', {
  // props: ['valor', 'fecha'],
  props: {
    valor: Number,
    fechaBanco: String,
  },
  template: /*html*/ `
    <div class="bg-dark py-3 mt-2 text-white">
        <h3>{{ texto }} - {{valor}}</h3>
        <p>{{ fechaBanco }}</p>
    </div>
    `,
  data() {
    return {
      texto: 'Footer de mi sitio web dinamico',
      // cantidad: 1000,  // lo podemos pasar como estático o dinámico (props)
    };
  },
});
