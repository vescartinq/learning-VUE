import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
  },
  {
    path: '/blog/:id',
    name: 'Articulo',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Articulo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
