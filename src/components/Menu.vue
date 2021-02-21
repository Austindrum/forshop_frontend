<template>
  <!-- 此元件是左邊的選單 -->
  <div class="menu sticky-top">
    <div class="logo" @click="$router.push('/shop/home')">
      <img src="../../public/images/logo.jpg" alt="logo">
    </div>
    <div class="accordion mb-5" id="menuAccordion">
      <div v-for="(item, index) in categoryGuide" :key="index">
        <div class="d-flex mb-2" :id="'heading' + index">
            <div class="title">
              <a href="#" @click.prevent="switchPath(item.id)">
                {{ item.title }}
              </a>
            </div>
            <button
              type="button"
              class="ml-auto"
              data-toggle="collapse"
              :data-target="'#collapse' + index"
              aria-expanded="true"
              :aria-controls="'#collapse' + index">+</button>
        </div>
        <div
          :id="'collapse' + index"
          class="collapse mb-2"
          :aria-labelledby="'heading' + index"
          data-parent="#menuAccordion"
        >
          <div>
            <ul class="list-group text-left">
              <li
                class="list-group-item subtitle"
                v-for="(sub, i) in item.SubCategories"
                :key="i"
                @click="switchSubPath(sub.id, item.id)">- {{ sub.title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-left text-muted">
      <ul class="list-group">
        <li class="list-group-item" @click="$router.push('/shop/columns')">時裝新知</li>
        <li class="list-group-item" @click="$router.push('/shop/about')">關於我們</li>
        <li class="list-group-item" @click="$router.push('/shop/info')">其他資訊</li>
        <li class="list-group-item" @click="$router.push('/shop/storeInfo')">實體店資訊</li>
        <li class="list-group-item" @click="$router.push('/')">ForShop 形象頁</li>
      </ul>
    </div>
  </div>
</template>

<script>
import productsAPI from '../apis/product';

export default {
  data() {
    return {
      categoryGuide: [],
    };
  },
  methods: {
    async getCategories() {
      const vm = this;
      const { data, statusText } = await productsAPI.getCategorys();
      if (data.status === 'success' && statusText === 'OK') {
        vm.categoryGuide = data.categories;
      }
    },
    switchPath(categoryId) {
      this.$router.push({
        name: 'Products',
        params: { category: categoryId },
      });
    },
    switchSubPath(subCategoryId, categoryId) {
      this.$router.push({
        name: 'SubProducts',
        params: {
          category: categoryId,
          subCategory: subCategoryId,
        },
      });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
    }
  }
  .sticky-top {
    top: 2rem;
  }
  .menu {
    .logo {
      img {
        max-width: 90%;
        opacity: 0.85;
      }
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  .accordion {
    min-height: 40vh;
    .title {
      font-size: 0.9rem;
      letter-spacing: 0.2rem;
      transition: all 1s ease;
      transform: translate(0);
      a {
        color: black;
        text-decoration: none;
      }
      &:hover {
        transform: translate(0.3rem);
        opacity: 0.4;
      }
    }
    button {
      background-color: transparent;
      border: none;
      outline: none;
      &:hover {
        color: #ffa010;
      }
    }
  }
  .list-group-item {
    color: black;
    border: none;
    background: transparent;
    padding: 0.15rem 0.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
    transition: all 1s ease;
    transform: translate(0);
    text-decoration: none;
    line-height: 1.4rem;
    &:hover {
      transform: translate(0.3rem);
      opacity: 0.4;
    }
  }
  @media (max-width: 1024px) {
    .accordion {
      min-height: 60vh;
    }
    .list-group-item {
      padding-top: 0.5rem;
    }
  }
  @media (max-width: 992px) {
    .menu {
      display: none;
    }
  }
</style>
