<template>
  <div class="input-search">
    <i class="fas fa-search"></i>
    <input type="text" v-model="search" @keyup.enter="searchPokemon" />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    searchPokemon() {
      // this.$emit('search', this.search)
    },
  },
};
</script>

<style>
</style>
