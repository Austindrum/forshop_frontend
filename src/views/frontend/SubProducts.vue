<template>
  <div class="top-margin ml-3">
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="switchPath(category.id)">{{ category.title }}</a>
        </li>
        <li class="breadcrumb-item active">
          {{ categoryGuide.title }}
        </li>
      </ol>
    </nav>
    <div class="text-left">
      <h2 class="text-left mt-3 mb-5 ">{{ categoryGuide.title }}</h2>
      <div class="container">
        <ProductCard :sub="categoryGuide.id" ref="subProductCard"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import productsAPI from '../../apis/product';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      para: '',
      sub: '',
      category: {},
      products: [],
      isLoading: false,
      categoryGuide: {},
    };
  },
  methods: {
    switchPath(cate) {
      this.$router.push({
        name: 'Products',
        params: { category: cate },
      });
    },
    async getSubCategory(ids) {
      const vm = this;
      const { data, statusText } = await productsAPI.getSubCategory(ids);
      if (data.status === 'success' && statusText === 'OK') {
        vm.category = data.category;
        vm.categoryGuide = data.subCategory;
      }
    },
  },
  created() {
    this.getSubCategory(this.$route.params);
  },
  watch: {
    $route() {
      const ids = {
        category: this.category.id,
        subCategory: this.$route.params.subCategory,
      };
      this.getSubCategory(ids);
    },
  //   $route(to) {
  //     // 換至其他類別時，要抓取新路由的參數。
  //     this.para = to.params.category;
  //     this.sub = to.params.subCategory;
  //     this.$refs.subProductCard.getProducts();
  //   },
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  h2 {
    font-size: 2rem;
    font-weight: bolder;
    opacity: 0.85;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
</style>
