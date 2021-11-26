<template>
  <article class="item-list">
    <p>{{ item.name }}</p>
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
};
</script>

<style scoped>
.item-list{
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  width: 90%;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0.3rem;
}

.item-list p{
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
