<template>
  <article class="item-list">
    <p @click="handleClick">{{ item.name }}</p>
    <StarFavorite :isFavorite="item.favorite" :name="item.name" />
  </article>
</template>

<script>
import StarFavorite from './StarFavorite.vue';

export default {
  name: 'ItemList',
  props: {
    item: {
      type: Object,
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
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.item-list{
  align-items: center;
  background: var(--seventh-color);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding: 0.5rem;
  width: 90%;
}

.item-list p{
  cursor: pointer;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
}

 @media (min-width: 720px) {
  .item-list{
    width: 50%;
  }
 }

</style>
