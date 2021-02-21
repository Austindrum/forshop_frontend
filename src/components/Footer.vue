<template>
  <div class="foot bg-light py-4 mt-3">
    <div class="container">
      <div class="text">&copy; ForShop 風格小舖 Demo WebSite</div>
      <div class="list-group list-group-horizontal justify-content-center">
        <a href="#" class="list-group-item text-muted" @click.prevent="$router.push('/shop/info')">
          隱私權政策
        </a>
        <a href="#" class="list-group-item text-muted" @click.prevent="$router.push('/shop/info')">
          退換貨說明
        </a>
        <a href="#" class="list-group-item text-muted" @click.prevent="$router.push('/shop/info')">
          消費者權益須知
        </a>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .foot {
    height: 15vh;
  }
  .text {
    font-size: 0.9rem;
  }
  .list-group {
    font-size: 0.75rem;
  }
  .list-group-item {
    color: black;
    border: none;
    background: transparent;
  }
  @media (max-width: 360px) {
    .list-group {
      font-size: 0.5rem;
    }
    .list-group-item {
      padding: 0.75rem 0.7rem;
    }
  }
  @media (max-width: 280px) {
    .list-group-item {
      padding: 0.75rem 0.3rem;
    }
  }
</style>
