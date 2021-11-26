import {
  SET_POKEMON, SET_LOADING,
  SET_POKEMON_SEARCH, SET_SEARCH,
  RESET_POKEMON,
} from './mutation-types';

export default {
  [SET_POKEMON](state, data) {
    state.isSearch = false;
    state.pokemons = [...state.pokemons, ...data.results];
    state.next = data.next;
  },
  [SET_LOADING](state, data) {
    state.loading = data;
  },
  [SET_POKEMON_SEARCH](state, data) {
    state.isSearch = true;
    state.pokemons = [];
    state.pokemonSearch = data;
  },
  [SET_SEARCH](state, data) {
    state.search = data;
  },
  [RESET_POKEMON](state) {
    state.pokemons = [];
  },

};
