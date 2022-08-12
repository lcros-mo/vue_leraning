import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre:'', id:'', Dificultad:''}
  },
  getters: {
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload
      },
      setTarea(state, payload){
        state.tarea = payload
      },
    // setDificultad(state, payload) {
    //   state.tareas = payload
    //   },
      setEliminarTarea(state, payload) {
        const tareasFiltradas = state.tareas.filter(item => item.id !== payload)
        state.tareas = tareasFiltradas
      },
  },
  actions: {
    getTareas({commit}){
      const tareas = []
      db.collection('tareas').get()
        .then(response => {
          response.forEach(doc => {
            console.log(doc.id);
            console.log(doc.data());
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('setTareas', tareas)
        })
    },

    getTarea({commit}, idTarea){
      db.collection('tareas').doc(idTarea).get()
        .then(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)
        })
    },
    
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(() => {
        console.log('tarea editada')
      })
    },

    agregarTarea({commit}, nombreTarea){
      db.collection('tareas').add({
        nombre: nombreTarea,
      })
      .then(doc => {
        console.log(doc.id)
      })
    },

    eliminarTarea({commit, dispatch}, idTarea){
      db.collection('tareas').doc(idTarea).delete()
      .then(() => {
        console.log('tarea eliminada')
        // dispatch('getTareas')
        commit('setEliminarTarea', idTarea)
      })
    },
      
    // agregarDificultad({commit}, dificultadTarea){
    //   db.collection('tareas').add({
    //     Dificultad: dificultadTarea
    //   })
    //   .then(doc => {
    //     console.log(doc.id)
    //     console.log(doc.Dificultad)
    //   })
    // }
  },
  modules: {
  }
})
