import Vue from 'vue'
import Vuex from 'vuex'
var firebase = require("firebase/app");
import router from './router'

import db from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: '',
    tareas: [],
    tarea: {nombre: '', id: ''},
    carga: false,
    texto: ''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setTareas(state, tareas){
      state.tareas = tareas
    },
    setTarea(state, tarea){
      state.tarea = tarea
    },
    eliminarTarea(state, id){
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id
      } )
    },
    cargarFirebase(state, payload){
      state.carga = payload
    }
  },
  actions: {

    buscador({commit, state}, payload){
      console.log(payload);
      state.texto = payload.toLowerCase();
    },

    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.pass)
        .then(res=>{
          console.log(res.user.email);
          console.log(res.user.uid);
          commit('setUsuario',{email:res.user.email, uid: res.user.uid})
          
          // Crear una colección
          db.collection(res.user.email).add({
            nombre: 'Tarea de ejemplo'
          })
          .then(()=>{
            router.push({name: 'inicio'})
          })
          .catch(err=>{
            console.log(err);
            commit('setError', err.code)
          })

        })
        .catch(err=>{
          console.log(err);
          commit('setError', err.code)
        })
    },
    ingresoUsuario({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res=>{
          console.log(res);
          commit('setUsuario',{email:res.user.email, uid: res.user.uid})
          router.push({name: 'inicio'})
        })
        .catch(err=>{
          console.log(err);
          commit('setError', err.code)
        })
    },
    detectarUsuario({commit}, payload){
      if(payload != null){
        commit('setUsuario',{email:payload.email, uid:payload.uid})
      }else{
        commit('setUsuario',null)
      }
    },
    cerrarSesion({commit}){
      firebase.auth().signOut()
      commit('setUsuario', null)
      router.push({name: 'ingreso'})
    },
    getTareas({commit}){

      commit('cargarFirebase', true);

      const usuario = firebase.auth().currentUser
      const tareas = []
      db.collection(usuario.email).get()
      .then(snapshot => {
        snapshot.forEach( doc => {
          // console.log(doc.id);
          // console.log(doc.data());
          let tarea = doc.data();
          tarea.id = doc.id
          tareas.push(tarea)
        } )
        
        setTimeout(() => {
          commit('cargarFirebase', false);
        }, 1000);

      }) 

      commit('setTareas', tareas)

    },
    getTarea({commit}, id){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(id).get()
      .then(doc => {
        // console.log(doc.data());
        // console.log(doc.id);
        let tarea = doc.data();
        tarea.id = doc.id
        commit('setTarea', tarea)
      })
    },
    editarTarea({commit}, tarea){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(()=>{
        router.push({name: 'inicio'})
      })
    },
    agregarTarea({commit}, nombre){
      commit('cargarFirebase', true);
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).add({
        nombre: nombre
      })
      .then(doc => {
        console.log(doc.id);
        router.push({name: 'inicio'})
        commit('cargarFirebase', false);
      })
    },
    eliminarTarea({commit, dispatch}, id){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(id).delete()
      .then(()=>{
        console.log('Tarea fue eliminada');
        // dispatch('getTareas')
        commit('eliminarTarea',id)
      })
    }
  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false
      }else{
        return true
      }
    },
    arrayFiltrado(state){
      let arregloFiltrado = []
      for(let tarea of state.tareas){
        let nombre = tarea.nombre.toLowerCase();
        if(nombre.indexOf(state.texto) >= 0){
          arregloFiltrado.push(tarea)
        }
      }
      return arregloFiltrado;
    }
  }
})
