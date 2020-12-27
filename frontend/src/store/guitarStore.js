import Vue from 'vue';
import Vuex from 'vuex';
import GuitarAPI from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guitars: [],
    alertText: ""
  },
  getters: {

  },
  mutations: {
    'SET_GUITARS'(state, guitars) {
      state.guitars = guitars;
    },
    'SET_ALERT_TEXT'(state, alertText) {
      state.alertText = alertText;
    },
    'ADD_GUITAR'(state, guitar) {
      state.guitars.push(guitar);
    },
    'EDIT_RSS_ITEM'(state, guitar) {
      const item = state.guitars.find(item => item.id === guitar.id);
      Object.assign(item, guitar);
    },
    'REMOVE_GUITAR'(state, guitar) {
      const index = state.guitars.findIndex(item => item.id === guitar.id);
      state.guitars.splice(index, 1);
    }
  },
  actions: {
    async initialize(context) {
      try {
        console.log(2)
        const response = await GuitarAPI.guitar.getAll();
        context.commit('SET_GUITARS', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async addItem(context, item) {
      try {
        const response = await GuitarAPI.guitar.add(item);
        context.commit('ADD_GUITAR', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async editItem(context, item) {
      try {
        const response = await GuitarAPI.guitar.edit(item.id, item);
        context.commit('EDIT_GUITAR', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    },
    async removeItem(context, id) {
      try {
        const response = await GuitarAPI.guitar.delete(id);
        context.commit('REMOVE_GUITAR', response.data );
      } catch (error) {
        context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
      }
    }
  }
});
