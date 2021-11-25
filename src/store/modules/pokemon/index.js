import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      pokemons: [],
      nextUrl: null,
      favorites: [],
      loading: false,
    };
  },
  mutations,
  actions,
};
