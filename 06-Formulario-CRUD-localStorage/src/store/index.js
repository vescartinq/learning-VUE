import { createStore } from 'vuex';
import router from '../router';

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0,
    },
  },
  mutations: {
    // recuperar de localStorage
    cargar(state, payload) {
      state.tareas = payload;
    },
    // CREATE
    almacenar(state, payload) {
      state.tareas.push(payload);
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
    },
    // DELETE
    eliminar(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
    },
    // READ
    tarea(state, payload) {
      if (!state.tareas.find((item) => item.id === payload)) {
        router.push('/');
        return;
      }
      state.tarea = state.tareas.find((item) => item.id === payload);
    },
    // UPDATE
    actualizar(state, payload) {
      state.tareas = state.tareas.map((item) =>
        item.id === payload.id ? payload : item
      );
      router.push('/');
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
    },
  },
  actions: {
    getLocalStorage({ commit }) {
      if (localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'));
        commit('cargar', tareas);
        return;
      }

      localStorage.setItem('tareas', JSON.stringify([]));
    },
    post({ commit }, tarea) {
      commit('almacenar', tarea);
    },
    deleteTarea({ commit }, id) {
      commit('eliminar', id);
    },
    get({ commit }, id) {
      commit('tarea', id);
    },
    put({ commit }, tarea) {
      commit('actualizar', tarea);
    },
  },
  modules: {},
});
