<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-2">
          <Menu />
        </div>
        <div class="col-lg-9">
          <router-view />
        </div>
        <div class="col-lg-1">
          <Sidebar />
        </div>
      </div>
    </div>
    <Foot />
    <Gotop />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Menu from '@/components/Menu.vue';
import Sidebar from '@/components/Sidebar.vue';
import Foot from '@/components/Footer.vue';
import Gotop from '@/components/Gotop.vue';

export default {
  components: {
    Navbar,
    Menu,
    Sidebar,
    Foot,
    Gotop,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 15vh);
  }
</style>
