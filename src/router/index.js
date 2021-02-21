import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/frontend/layout/LandingPage.vue'),
  },
  {
    path: '/shop',
    component: () => import('../views/frontend/layout/Shop.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        path: 'products/:category',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue'),
      },
      {
        path: 'products/:subCategory',
        name: 'SubProducts',
        component: () => import('../views/frontend/SubProducts.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/frontend/ClothesDetail.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontend/About.vue'),
      },
      {
        path: 'info',
        name: 'Info',
        component: () => import('../views/frontend/Info.vue'),
      },
      {
        path: 'storeInfo',
        name: 'StoreInfo',
        component: () => import('../views/frontend/StoreInfo.vue'),
      },
      {
        path: 'columns',
        name: 'Columns',
        component: () => import('../views/frontend/Columns.vue'),
      },
      {
        path: 'column/:id',
        name: 'Column',
        component: () => import('../views/frontend/Column.vue'),
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('../views/frontend/layout/Cart.vue'),
    children: [
      {
        path: 'cartDetail',
        name: 'CartDetail',
        component: () => import('../views/frontend/CartDetail.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/frontend/Order.vue'),
      },
      {
        path: 'checkout',
        name: 'CheckOut',
        component: () => import('../views/frontend/CheckOut.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Backend_products',
        component: () => import('../views/backend/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Backend_orders',
        component: () => import('../views/backend/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'storages',
        name: 'Backend_storages',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch('fetchCurrentUser');
  if (to.meta.requiresAuth) {
    if (!store.state.adminLogin) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// 每次切換路由，視野都會回到頁頂
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
