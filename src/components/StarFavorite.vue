<template>
  <div class="star-favorite">
    <i :class="('fas fa-star')+ (isFavorite ? ' active ': ' disabled ')" @click="addFavorite"></i>
  </div>
</template>

<script>
export default {
  name: 'StarFavorite',
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    addFavorite() {
      if (this.isFavorite) {
        this.$store.commit('pokemon/DELETE_FAVORITE', this.name);
      } else {
        this.$store.commit('pokemon/SET_FAVORITE', this.name);
      }
      this.$store.commit('pokemon/GET_FAVORITES', null);
    },
  },
};
</script>

<style scoped>
.star-favorite {
  align-items: center;
  background: var(--eight-color);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

.star-favorite i{
  font-size: 1.5rem;
}

.active{
  color :var(--sixth-color);
}

.disabled{
  color: var(--fifth-color);
}
</style>
