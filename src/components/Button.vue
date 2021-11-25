<template>
  <button :class="disabled ? 'disabled' : 'active'">
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
};
</script>

<style>
.active {
  background-color: #4caf50;
  color: white;
}

.active:active {
  background-color: #4caf50;
  color: white;
}

.disabled {
  background-color: #ccc;
  color: #666;
}
</style>
