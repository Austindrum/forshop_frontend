<template>
  <div class="top-margin">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
          </li>
          <li class="breadcrumb-item active">
            {{ category.title }}
          </li>
        </ol>
      </nav>
      <div class="category-guide text-left">
        <h2 class="text-left my-3">{{ category.title }}</h2>
        <div class="pt-3 mb-5">
          <div class="d-flex flex-wrap">
            <div
              v-for="(sub, index) in categoryGuide"
              :key="index"
              class="sub-link pl-0"
              @click.prevent="switchSubPath(sub.id, category.id)">- {{ sub.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <ProductCard :category="category.id" ref="productCard"/>
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
      isLoading: false,
      category: {},
      categoryGuide: [],
    };
  },
  computed: {
  },
  methods: {
    switchSubPath(subCategoryId, categoryId) {
      this.$router.push({
        name: 'SubProducts',
        params: {
          category: categoryId,
          subCategory: subCategoryId,
        },
      });
    },
    async getCategoryProducts(categoryId) {
      const vm = this;
      const { data, statusText } = await productsAPI.getCategory(categoryId);
      if (data.status === 'success' && statusText === 'OK') {
        vm.category = data.category;
        vm.categoryGuide = data.category.SubCategories;
      }
    },
  },
  created() {
    const categoryId = this.$route.params.category;
    this.getCategoryProducts(categoryId);
  },
  watch: {
    $route() {
      const categoryId = this.$route.params.category;
      this.getCategoryProducts(categoryId);
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    margin-left: 2.5rem;
  }
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
  }
  .category-guide {
    h2 {
      font-size: 2rem;
      font-weight: bolder;
      opacity: 0.85;
      letter-spacing: 0.2rem;
    }
    .sub-link {
      color: gray;
      letter-spacing: 0.2rem;
      padding-right: 3.5rem;
      cursor: pointer;
      transition: all 1s ease;
      transform: translate(0);
      &:hover {
        transform: translate(0.3rem);
        opacity: 0.85;
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      margin-left: 0;
      margin-right: 0;
    }
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 576px) {
    .category-guide {
      .sub-link {
        padding-right: 2rem;
      }
    }
  }
  @media (max-width: 414px) {
    .category-guide {
      .sub-link {
        padding-right: 0;
        margin-top: 0.3rem;
        letter-spacing: 0.1rem;
        min-width: 48%;
      }
    }
  }
</style>
