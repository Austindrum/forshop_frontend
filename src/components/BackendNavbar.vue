<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ForShop 後台管理系統</a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"><span class="navbar-toggler-icon" /></button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
             class="nav-link mr-2"
             :class="{active: $route.name === 'Backend_products'}"
             :to="{ name: 'Backend_products'}">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link
             class="nav-link mr-2"
             :class="{active: $route.name === 'Backend_orders'}"
             :to="{ name: 'Backend_orders'}">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link
             class="nav-link mr-2"
             :class="{active: $route.name === 'Backend_storages'}"
             :to="{ name: 'Backend_storages'}">圖片管理</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      token: '',
    };
  },
  methods: {
    signOut() {
      // 清空token
      this.$store.commit('logout');
      this.$router.push('/login');
    },
  },
};
</script>
