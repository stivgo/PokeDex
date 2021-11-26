<template>
  <div class="welcome">
    <img src="@/assets/welcome.png" alt="Imagen pikachu" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <Button :text="'Get started'" @click="changeView" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Welcome',
  components: {
    Button,
  },
  created() {
    this.$store.commit('pokemon/RESET_POKEMON');
  },
  methods: {
    changeView() {
      this.$router.push('/results');
    },
  },
};
</script>

<style scoped>
.welcome {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
}

.welcome h1 {
  color: var(--first-color);
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
}

.welcome p {
  color: var(--second-color);
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  width: 75%;
}

@media (min-width: 720px) {
  .welcome p {
      width: 36%;
  }
}

</style>
