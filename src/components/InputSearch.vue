<template>
  <div class="input-search">
    <i class="fas fa-search"></i>
    <input
      type="text"
      placeholder="Search"
      v-model="search"
      @keyup.enter="searchPokemon"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  props: ['favorite'],
  data() {
    return {
      search: '',
    };
  },
  methods: {
    searchPokemon() {
      if (this.favorite) {
        if (this.search !== '') {
          this.$store.commit('pokemon/GET_FAVORITES', this.search);
          this.$store.commit('pokemon/SET_IS_SEARCH_FAVORITE', true);
        } else {
          this.$store.commit('pokemon/GET_FAVORITES', null);
          this.$store.commit('pokemon/SET_IS_SEARCH_FAVORITE', false);
        }
      } else if (this.search !== '') {
        this.$store.dispatch(
          'pokemon/searchPokemon',
          this.search.toLowerCase().trim(),
        );
      } else {
        this.$store.commit('pokemon/RESET_POKEMON');
        this.$store.commit('pokemon/SET_SEARCH', '');
        this.$store.dispatch('pokemon/getPokemons');
      }
    },
  },
  mounted() {
    if (this.searchStore) {
      this.search = this.searchStore;
    }
  },
  computed: {
    searchStore() {
      return this.$store.state.pokemon.search;
    },
  },
};
</script>

<style scoped>
.input-search {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  width: 90%;
  padding: 1rem;
  margin: 1rem 0;
}
input {
  font-size: 16px;
  width: 80%;
  margin-left: 1rem;
}

input::placeholder {
  color: #bfbfbf;
}
input:active,
input:focus {
  outline: none;
}
i {
  color: var(--fifth-color);
}

@media (min-width: 720px) {
  .input-search {
    width: 50%;
  }
  input {
    width: 80%;
  }
}
</style>
