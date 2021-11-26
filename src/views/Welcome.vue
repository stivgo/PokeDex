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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}

.welcome h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: var(--first-color);
}

.welcome p {
  width: 75%;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--second-color);
}

@media (min-width: 720px) {
  .welcome p {
      width: 36%;
  }
}

</style>
