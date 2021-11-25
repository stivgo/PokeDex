<template>
  <img v-if="loading" class="loading" src="" alt="" />
</template>

<script>
export default {
  name: 'Loader',
  computed: {
    loading() {
      return this.$store.state.pokemon.loading;
    },
  },
};
</script>

<style scoped>
.loading {
  -webkit-animation-name: rebote; /* Chrome, Safari, Opera */
  -webkit-animation-duration: 1s; /* Chrome, Safari, Opera */
  -webkit-animation-iteration-count: infinite; /* Chrome, Safari, Opera */
  -webkit-animation-direction: reverse; /* Chrome, Safari, Opera */
  animation-name: rebote;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: ease-out;
}

@keyframes rebote {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:0px;}
  50%  {left:0px; top:-80px;}
  75%  {left:0px; top:-80px;}
  100% {left:0px; top:0px;}
}
</style>
