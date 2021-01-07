import './index.css';

import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HN from './pages/hn.vue';
import Index from './pages/index.vue';
import Main from './Main.vue';
import {createApp} from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/hn',
    component: HN,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(Main).use(router).mount('#app');
