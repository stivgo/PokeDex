<template>
  <div class="favorites">
     <header>
        <InputSearch :favorite="true"/>
      </header>
      <section v-if="favorites.length === 0 && isSearchFavorite" class="no-result">
          <h2>Uh-oh!</h2>
          <p>You look lost on your journey!</p>
          <Button :text="'Go back home'" @click="getFavorites" />
        </section>
        <section >
          <ItemList
            v-for="(item, index) of favorites"
            :key="index"
            :item="item"
            @click="showModal(item)"
          />
        </section>
      <footer v-if=" !isSearchFavorite || favorites.length > 0 ">
        <Button :text="'All'" :all="true" :disabled="true" @click="changeToAll"/>
        <Button :text="'Favorites'" :favorite="true"  />
      </footer>
      <Modal v-show="isModalVisible" @close="closeModal" :info="data" />
  </div>
</template>

<script>
import InputSearch from '../components/InputSearch.vue';
import ItemList from '../components/ItemList.vue';
import Button from '../components/Button.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'Favorites',
  components: {
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
    this.$store.commit('pokemon/GET_FAVORITES', null);
  },
  methods: {
    changeToAll() {
      this.$router.push('/results');
    },
    showModal(item) {
      this.data = item;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getFavorites() {
      this.$store.commit('pokemon/GET_FAVORITES', null);
      this.$store.commit('pokemon/SET_IS_SEARCH_FAVORITE', false);
    },
  },
  computed: {
    favorites() {
      const favoritesArray = this.$store.state.pokemon.favoritesFilter;
      const favorites = [];
      favoritesArray.forEach((favorite) => {
        favorites.push({
          name: favorite,
          favorite: true,
        });
      });
      return favorites;
    },
    isSearchFavorite() {
      return this.$store.state.pokemon.isSearchFavorite;
    },
  },
};
</script>

<style scoped>
header {
  background: var(--eight-color);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
}

section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
}
.no-result {
  height: 30vh;
  justify-content: space-around;
}

.no-result h2 {
  color: var(--first-color);
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
}

.no-result p {
  color: var(--second-color);
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
}

footer {
  background: var(--seventh-color);
  bottom: 0;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
}

footer button {
  margin: 1%;
  width: 50%;
}

@media (min-width: 720px) {
  footer button {
    width: 23%;
  }
}

</style>
