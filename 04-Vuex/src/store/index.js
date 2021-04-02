import { createStore } from 'vuex';

export default createStore({
  // ESTADO INICIAL
  state: {
    contador: 150,
  },
  // MODIFICAN EL ESTADO
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload;
    },
    disminuir(state, payload) {
      state.contador = state.contador - payload;
    },
  },
  // EJECUTAN LAS MUTATIONS
  actions: {
    accionIncrementar({ commit }) {
      commit('incrementar', 10);
    },
    accionDisminuir({ commit }, numero) {
      commit('disminuir', numero); // numero viene como argumento en el compo
    },
    accionBoton({ commit }, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.numero);
      } else {
        commit('disminuir', objeto.numero);
      }
    },
  },
  modules: {},
});
