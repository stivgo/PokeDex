import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      pokemons: [],
      pokemonSearch: {},
      isSearch: false,
      search: '',
      nextUrl: null,
      favorites: [],
      loading: false,
    };
  },
  mutations,
  actions,
};
