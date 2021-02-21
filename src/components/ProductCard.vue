<template>
  <div class="row">
    <loading :active.sync="isLoading"></loading>
    <div class="col-md-3 col-6 mb-3" v-for="(product) in pageProducts" :key="product.id">
        <div class="card">
          <div class="inner">
            <a href="#" @click.prevent="getDetail(product.id)">
              <img
                v-if="product.image1"
                class="card-img-top"
                :src="product.image1"
                :alt="product.title + '產品照'" />
              <img
                v-else
                class="card-img-top"
                src="../../public/images/logo.jpg">
            </a>
            <button type="button" class="wish">
              <div v-if="wishListId.includes(product.id)"
              @click="addToWishList(product, status = false)">
                <i class="fas fa-heart text-primary"></i>
              </div>
              <div v-else @click="addToWishList(product, status = true)">
                <i class="far fa-heart text-muted"></i>
              </div>
            </button>
            <button
              type="button"
              class="see-more"
              @click.prevent="getDetail(product.id)">
              <i class="fas fa-search"> see more</i>
            </button>
          </div>
          <div class="card-body px-0">
            <div class="card-title d-flex mb-0">
              <div class="mr-auto">
                <button type="button" class="p-0" @click.prevent="getDetail(product.id)">
                  <h5 class="text-left text-muted">
                    {{ product.title.substring(0, 9) + ' ....' }}
                  </h5>
                </button>
              </div>
            </div>
            <div class="price-style card-text text-left my-0">
              <span class="mr-2">
                NT.{{ product.price }}
              </span>
              <span v-if="product.origin_price != 0" class="line-through text-muted">
                NT.{{ product.origin_price }}
              </span>
            </div>
          </div>
        </div>
    </div>
    <Paginate
      v-if="sub || category"
      :page-count="pageNum"
      :prev-text="'<<'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-text="'>>'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :click-handler="pageCallBack"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :container-class="'pagination col-md-12 col-12'"
    />
  </div>
</template>

<script>
import productsAPI from '../apis/product';

export default {
  /* 傳入篩選條件，
     number(首頁)、para(products主分類)、sub(subProducts次分類)、alsoLike(clothesDetail關聯商品) */
  props: ['newArrival', 'para', 'sub', 'alsoLikeCategory', 'alsoLikeId', 'category'],
  data() {
    return {
      pageNum: 1,
      pageSize: 12,
      currentPage: 1,
      products: [],
      wishList: [],
      isLoading: false,
    };
  },
  computed: {
    wishListId() {
      return this.$store.state.wishList.map((product) => product.id);
    },
    pageProducts() {
      const vm = this;
      let data = vm.setPageNum();
      if (data && data.length > 0) {
        data = data.filter((product) => product.page === vm.currentPage);
        return data;
      }
      return [];
    },
  },
  methods: {
    async getProducts() {
      const vm = this;
      vm.products = [];
      if (vm.category) {
        const { data, statusText } = await productsAPI.getCategoryProducts(vm.category);
        if (data.status === 'success' && statusText === 'OK') {
          data.categoryProducts.forEach((product) => {
            if (product.enabled) {
              vm.products.push(product);
            }
          });
        }
      }
      if (vm.sub) {
        const { data, statusText } = await productsAPI.getSubCategoryProducts(vm.sub);
        if (data.status === 'success' && statusText === 'OK') {
          data.products.forEach((product) => {
            if (product.enabled) {
              vm.products.push(product);
            }
          });
        }
      }
      if (vm.alsoLikeCategory) {
        const { data, statusText } = await productsAPI.getCategoryProducts(vm.alsoLikeCategory);
        if (data.status === 'success' && statusText === 'OK') {
          const temp = data.categoryProducts.filter((product) => product.id !== vm.alsoLikeId);
          temp.forEach((product) => {
            if (product.enabled) {
              vm.products.push(product);
            }
          });
        }
      }
      if (vm.newArrival) {
        const { data, statusText } = await productsAPI.getProducts();
        if (data.status === 'success' && statusText === 'OK') {
          const formatTime = (dateTime) => new Date(dateTime).getTime();
          const temp = data.products.filter((product) => product.enabled);
          temp.sort((a, b) => formatTime(b.createdAt) - formatTime(a.createdAt));
          temp.forEach((product, index) => {
            if (index < vm.newArrival) {
              vm.products.push(product);
            }
          });
        }
      }
    },
    getDetail(productId) {
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
    addToWishList(product, status) {
      this.$store.commit('setWishList', product);
      if (status) {
        this.$swal({
          icon: 'success',
          title: '新增願望清單',
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.$swal({
          icon: 'error',
          title: '刪除願望清單',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    setPageNum() {
      const vm = this;
      const data = vm.products;
      vm.pageNum = Math.ceil(data.length / vm.pageSize);
      data.forEach((product, index) => {
        vm.$set(product, 'page', parseInt(index / vm.pageSize, 10) + 1);
        vm.$set(product, 'num', index + 1);
      });
      return data;
    },
    pageCallBack(num) {
      this.currentPage = num;
    },
  },
  watch: {
    // 當透過點選下方關聯產品而進入新的單一產品頁時，再次按照新的id判斷新的關聯產品
    category() {
      this.getProducts();
    },
    sub() {
      this.getProducts();
    },
    alsoLikeCategory() {
      this.getProducts();
    },
    // alsoLikeId() {
    //   this.getProducts();
    // },
    products() {
      this.setPageNum();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border: none;
  }
  .inner {
    overflow: hidden;
    position: relative;
    img {
      transition: all 1s ease;
      max-height: 178px;
    }
    .wish {
      position: absolute;
      top: 0.6rem;
      right: 0.8rem;
      outline: none;
    }
    .fa-heart {
      font-size: 1.3rem;
      font-weight: lighter;
    }
    .see-more {
      position: absolute;
      top: 50%;
      right: 50%;
      opacity: 0;
      transform: translate(0);
      transition: all 0.8s ease;
      outline: none;
      .fas {
        font-size: 1.3rem;
        color: #ffa010;
        opacity: 0.85;
      }
    }
    &:hover {
      img {
        opacity: 0.6;
        transform: scale(1.08);
      }
      .see-more {
        opacity: 0.8;
        transform: translate(50%);
      }
    }
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h5 {
    font-size: 1rem;
    font-weight: bolder;
  }
  .price-style {
    font-size: 0.75rem;
    color: #219ebc;
    letter-spacing: 0.2rem;
    .line-through {
      text-decoration: line-through;
    }
  }
  @media (max-width: 1199px) {
    .card .inner img{
      max-height: 145px;
    }
  }
  @media (max-width: 768px) {
    .card{
      max-width: 80%;
      max-height: 90%;
      .inner {
        .wish {
          right: 0.5rem;
        }
      }
    }
  }
  @media (max-width: 414px) {
    .inner {
      .wish {
        top: 0.4rem;
        right: 0.3rem;
      }
      .fa-heart {
        font-size: 1rem;
      }
      .see-more {
        .fas {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 320px) {
    h5 {
      font-size: 0.8rem;
    }
    .price-style {
      font-size: 0.45rem;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 280px) {
    .inner {
      .wish {
        top: 0.2rem;
        right: 0.18rem;
      }
      .fa-heart {
        font-size: 0.7rem;
      }
      .see-more {
        .fas {
          font-size: 0.7rem;
        }
      }
    }
    .price-style {
      letter-spacing: 0;
    }
  }
</style>
