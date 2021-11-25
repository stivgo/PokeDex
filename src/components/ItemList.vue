<template>
  <article class="item-list">
    <p>Pokemon {{ item }}</p>
    <StarFavorite />
  </article>
</template>

<script>
import StarFavorite from './StarFavorite.vue';

export default {
  name: 'ItemList',
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  components: {
    StarFavorite,
  },
  data() {
    return {
      selectedItem: null,
    };
  },
};
</script>

<style>
</style>
