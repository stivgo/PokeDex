<template>
  <button :class="disabled ? 'disabled' : 'active'" @click="handleClick">
    <i v-if="all" class="fas fa-list"></i>
    <i v-if="favorite" class="fas fa-star"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
    },
    all: {
      type: Boolean,
    },
    favorite: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
button{
  color: #FFF;
  border-radius: 60px;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  font-size: 18px;
}

i{
  padding-right: 0.5rem;
  color: #FFF;
}

.active {
  background-color: var(--third-color);
}

.active:hover {
  background-color: var(--fourth-color);
  transition: all 0.3s ease-out;
}

.active:active {
  background-color: var(--fourth-color);
}

.disabled {
  background-color: var(--fifth-color);
}
</style>
