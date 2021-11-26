<template>
  <div class="results">
    <Loader v-if="loading" />
    <div class="info" v-else>
      <header>
        <InputSearch />
      </header>
      <div v-if="isSearch">
        <section v-if="!pokemonSearch.name" class="no-result">
          <h2>Uh-oh!</h2>
          <p>You look lost on your journey!</p>
          <Button :text="'Go back home'" @click="getPokemons" />
        </section>
        <section v-else>
          <ItemList :item="pokemonSearch" />
        </section>
      </div>
      <div v-else>
        <section>
          <ItemList
            v-for="(item, index) of pokemons"
            :key="index"
            :item="item"
            @click="showModal(item)"
          />
        </section>
      </div>
      <footer v-if="!isSearch || pokemonSearch.name">
        <Button :text="'All'" :all="true" />
        <Button
          :text="'Favorites'"
          :favorite="true"
          :disabled="true"
          @click="changeToFavorites"
        />
      </footer>
    </div>
    <Modal v-show="isModalVisible" @close="closeModal" :info="data" />
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import InputSearch from '../components/InputSearch.vue';
import ItemList from '../components/ItemList.vue';
import Button from '../components/Button.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'Results',
  components: {
    Loader,
    InputSearch,
    ItemList,
    Button,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      data: {},
    };
  },
  created() {
    this.getPokemons();
    window.addEventListener('scroll', this.getNextPokemons);
  },
  destroyed() {
    window.removeEventListener('scroll', this.getNextPokemons);
  },
  methods: {
    getPokemons() {
      this.$store.dispatch('pokemon/getPokemons');
    },
    getNextPokemons() {
      const scroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight;
      const offset = document.documentElement.offsetHeight;
      if (scroll + offset >= height - 100) {
        this.$store.dispatch('pokemon/getNextPokemons');
      }
    },
    changeToFavorites() {
      this.$router.push('/favorites');
    },
    showModal(item) {
      this.data = item;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    loading() {
      return this.$store.state.pokemon.loading;
    },
    pokemons() {
      const { pokemons, favorites } = this.$store.state.pokemon;
      return pokemons.map((pokemon) => ({
        ...pokemon,
        favorite: favorites.includes(pokemon.name),
      }));
    },
    pokemonSearch() {
      const { pokemonSearch, favorites } = this.$store.state.pokemon;
      return {
        ...pokemonSearch,
        favorite: favorites.includes(pokemonSearch.name),
      };
    },
    isSearch() {
      return this.$store.state.pokemon.isSearch;
    },
  },
};
</script>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.info {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
  background: #f5f5f5;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.no-result {
  height: 30vh;
  justify-content: space-around;
}

.no-result h2 {
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #353535;
}

.no-result p {
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #5e5e5e;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  padding: 1rem;
}

footer button {
  width: 50%;
  margin: 1%;
}

@media (min-width: 720px) {
  footer button {
    width: 23%;
  }
}
</style>
