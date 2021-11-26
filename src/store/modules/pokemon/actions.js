import axios from 'axios';

const server = 'https://pokeapi.co/api/v2/pokemon/';

export default {
  getPokemons({ commit }) {
    commit('SET_LOADING', true);
    axios.get(server)
      .then((response) => {
        commit('SET_POKEMON', response.data);
        commit('SET_LOADING', false);
      })
      .catch((error) => {
        console.log(error);
        commit('SET_LOADING', false);
      });
  },
  getNextPokemons({ commit, state }) {
    const { next } = state;
    axios.get(next)
      .then((response) => {
        commit('SET_POKEMON', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  searchPokemon({ commit }, name) {
    commit('SET_LOADING', true);
    commit('SET_SEARCH', name);
    axios.get(`${server}${name}`)
      .then((response) => {
        commit('SET_POKEMON_SEARCH', response.data);
        commit('SET_LOADING', false);
      })
      .catch((error) => {
        console.log(error);
        commit('SET_POKEMON_SEARCH', {});
        commit('SET_LOADING', false);
      });
  },
  searchInfoPokemon({ commit }, name) {
    axios.get(`${server}${name}`)
      .then((response) => {
        commit('SET_INFO_POKEMON', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

};
