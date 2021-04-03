import { createStore } from 'vuex';

export default createStore({
  state: {
    paises: [],
    // Para que al filtrar no se modifique también el array de paises
    paisesFiltrados: [],
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch('api.json'); // o url de API
        const data = await res.json();
        // console.log(data)
        commit('setPaises', data);
      } catch (error) {
        console.log(error);
      }
    },
    // ({setEstado/estado},lo que buscamos)
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter((pais) =>
        pais.region.includes(region)
      );
      // guardamos resultado en []setPaisesFiltrados
      commit('setPaisesFiltrados', filtro);
    },
    filtroNombre({ commit, state }, texto) {
      const textoCliente = texto.toLowerCase();
      const filtro = state.paises.filter((pais) => {
        const textoApi = pais.name.toLowerCase();
        if (textoApi.includes(textoCliente)) {
          return pais;
        }
      });
      commit('setPaisesFiltrados', filtro);
    },
  },
  // Retornan información del state para utilizar en la vista (igual que state)
  getters: {
    // Ordenados por población
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a, b) =>
        a.population < b.population ? 1 : -1
      );
    },
  },
  modules: {},
});
