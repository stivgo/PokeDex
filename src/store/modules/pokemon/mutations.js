import {
  SET_POKEMON, SET_LOADING,
  SET_POKEMON_SEARCH, SET_SEARCH,
  RESET_POKEMON, SET_FAVORITE,
  DELETE_FAVORITE, SET_INFO_POKEMON,
  GET_FAVORITES, SET_IS_SEARCH_FAVORITE,
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
  [SET_FAVORITE](state, data) {
    state.favorites.push(data);
  },
  [DELETE_FAVORITE](state, data) {
    state.favorites = state.favorites.filter((item) => item !== data);
  },
  [SET_INFO_POKEMON](state, data) {
    state.infoPokemon = data;
  },
  [GET_FAVORITES](state, data) {
    if (data) {
      state.favoritesFilter = state.favorites.filter((item) => item === data);
    } else {
      state.favoritesFilter = state.favorites;
    }
  },
  [SET_IS_SEARCH_FAVORITE](state, data) {
    state.isSearchFavorite = data;
  },
};
