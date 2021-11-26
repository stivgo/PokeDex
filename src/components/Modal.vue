<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header>
          <button @click="close"><i class="fas fa-times-circle"></i></button>
          <img
            v-if="pokemon.sprites"
            :src="pokemon.sprites.other['official-artwork'].front_default"
            alt=""
          />
        </header>
        <main>
          <article>
            <strong>Name:&nbsp;</strong>
            <p>{{ pokemon.name }}</p>
          </article>
          <hr />
          <article>
            <strong>Weight:&nbsp; </strong>
            <p>{{ pokemon.weight }}</p>
          </article>
          <hr />
          <article>
            <strong>Height:&nbsp; </strong>
            <p>{{ pokemon.height }}</p>
          </article>
          <hr />
          <article>
            <strong>Types:&nbsp;</strong>
            <p v-for="(type, index) of pokemon.types" :key="index">
              {{ type.type.name }} &nbsp;
            </p>
          </article>
        </main>
        <footer class="modal-footer">
          <Button :text="'Share to my friends'" @click="copyClipboard" />
          <StarFavorite :name="info.name" :isFavorite="favorite" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from './Button.vue';
import StarFavorite from './StarFavorite.vue';

export default {
  name: 'Modal',
  components: {
    Button,
    StarFavorite,
  },
  props: {
    info: {
      type: Object,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    copyClipboard() {
      let types = '';
      this.pokemon.types.forEach((type) => {
        types += `${type.type.name} `;
      });
      const aux = document.createElement('input');
      aux.setAttribute(
        'value',
        `Name: ${this.pokemon.name}, Weight: ${this.pokemon.weight}, Height: ${this.pokemon.height}, Types: ${types}`,
      );
      document.body.appendChild(aux);
      aux.select();
      document.execCommand('copy');
      document.body.removeChild(aux);
      alert('Copied to clipboard');
    },
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon.infoPokemon;
    },
    favorite() {
      const { favorites } = this.$store.state.pokemon;
      return !!favorites.find((item) => item === this.info.name);
    },
  },
  watch: {
    info() {
      this.$store.dispatch('pokemon/searchInfoPokemon', this.info?.name);
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
}

header {
  height: 50%;
  background: url("../assets/background.png") no-repeat center center;
}

header button {
  position: absolute;
  left: 80%;
  top: 12%;
  background: transparent;
}

header img {
  position: absolute;
  width: 10rem;
  left: 35%;
  top: 13%;
}

button i {
  color: #ffffff;
  font-size: 2em;
}

main {
  padding: 1rem;
}
article {
  display: flex;
  padding: 1rem 0;
}
strong,
p {
  font-size: 18px;
  line-height: 150%;
  color: #5e5e5e;
}
footer {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
hr {
  border: 1px solid #e8e8e8;
}
.copy {
  display: none;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

@media (min-width: 720px) {
  .modal {
    width: 50%;
    height: 80%;
  }
  header button {
    left: 70%;
  }
  header img {
    left: 40%;
  }
}
@media (min-width: 1024px) {
  header img {
    left: 43%;
  }
  header button {
    left: 72%;
  }
}
</style>
