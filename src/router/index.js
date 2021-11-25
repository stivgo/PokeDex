import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Results from '../views/Results.vue';
import Favorites from '../views/Favorites.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/results',
    name: 'results',
    component: Results,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
