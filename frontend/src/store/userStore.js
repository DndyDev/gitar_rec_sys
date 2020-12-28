import Vue from 'vue';
import Vuex from 'vuex'
import UserAPI from '../api'
import GuitarAPI from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users:[],
        alertText:""
    },
    getters:{

    },
    mutations: {
        'SET_USERS'(state,users){
            state.users = users;
        },
        'SET_ALLERT_TEXT'(state,alertText){
            state.alertText = alertText;
        },
        'ADD_USER'(state,user){
            state.users.push(user);
        },

    },
    actions: {
    async initialize(context) {
      try {
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
})