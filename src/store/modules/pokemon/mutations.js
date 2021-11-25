import { SET_POKEMON, SET_LOADING } from './mutation-types';

export default {
  [SET_POKEMON](state, data) {
    state.pokemons = [...state.pokemons, ...data.results];
    state.next = data.next;
  },
  [SET_LOADING](state, data) {
    state.loading = data;
  },

};
