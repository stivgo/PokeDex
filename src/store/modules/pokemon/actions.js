import axios from 'axios';

const server = 'https://pokeapi.co/api/v2/pokemon/';

export default {
  getPokemons({ commit }) {
    axios.get(server)
      .then((response) => {
        commit('SET_POKEMON', response.data);
      })
      .catch((error) => {
        console.log(error);
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

};
