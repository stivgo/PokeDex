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
  border-radius: 60px;
  color: var(--seventh-color);
  font-size: 18px;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
}

i{
  color: var(--seventh-color);
  padding-right: 0.5rem;
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
