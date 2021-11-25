import { SET_POKEMON } from './mutation-types';

export default {
  [SET_POKEMON](state, data) {
    state.pokemons = [...state.pokemons, ...data.results];
    state.next = data.next;
  },

};
