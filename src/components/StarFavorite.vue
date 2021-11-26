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
    },
  },
};
</script>

<style scoped>
.star-favorite {
  background: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50px;
}

.star-favorite i{
  font-size: 1.5rem;
}

.active{
  color :#ECA539;
}

.disabled{
  color: #BFBFBF;
}
</style>
