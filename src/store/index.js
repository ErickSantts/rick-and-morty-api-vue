import { createStore } from 'vuex'

export default createStore({
  state: {
    personage: {
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      origin: {
        name: "",
        url: ""
      },
      location: {
        name: "",
        url: ""
      },
      image: "",
    },
    statustela: false,
    url: "https://rickandmortyapi.com/api/character",
    page: 1
  },
  getters: {
  },
  mutations: {
    selectPersonage(state, personage) {
      state.personage = personage
    },
    alterarPagina(state, date){
      if(date === 1){
        if(state.page <= 42){
          state.page++
        }
      }else{
        if(state.page > 1){
          state.page--
        }
      }
      console.log("Pagina atual", state.page)
    }
  },
  actions: {
    selectPersonage(context, payload) {
      context.commit('selectPersonage', payload)
    },
    alterarPagina(context, payload){
      context.commit('alterarPagina', payload)
    }
  },
  modules: {
  }
})
