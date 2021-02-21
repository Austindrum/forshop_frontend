<template>
  <div>
    <BackendNavbar />
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto px-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BackendNavbar from '@/components/BackendNavbar.vue';

export default {
  components: {
    BackendNavbar,
  },
};
</script>
