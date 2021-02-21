<template>
  <div class="container top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item active">專欄</li>
      </ol>
    </nav>
    <h2 class="h3 text-muted text-left my-3">所有文章</h2>
    <div class="my-5">
      <columnCard />
    </div>
  </div>
</template>

<script>
import ColumnCard from '@/components/ColumnCard.vue';

export default {
  components: {
    columnCard: ColumnCard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
</style>
