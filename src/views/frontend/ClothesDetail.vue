<template>
  <div class="top-margin">
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-2 major-img">
            <img v-if="majorImg" class="img-fluid" :src="majorImg" :alt="product.title + '產品照'" />
            <img v-else class="img-fluid" src="../../../public/images/logo.jpg">
            <div>
              <p>{{ `0${tempIndex + 1} / 0${images.length}` }}</p>
            </div>
          </div>
          <div class="d-flex other-img bg-light py-2">
            <div v-for="(image, index) in images" :key="index">
              <img
                class="img-fluid mr-1"
                :src="images[index] === null ? 'img/logo.b92b8896.jpg' : images[index]"
                @click="changeImg(index)"
                :alt="'image' + index"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 product-content text-left mt-3">
          <div class="mb-1">
            <h2>{{ product.title }}</h2>
          </div>
          <div class="my-3">
            <span v-if="product.price" class="price mr-3">NT.{{ product.price }}</span>
            <span v-if="product.origin_price != 0" class="origin-price">
              {{ `NT.${product.origin_price}` }}
            </span>
          </div>
          <div class="story-content">
            <p>{{ product.content }}</p>
          </div>
          <div class="text-left">
            <div class="container d-flex">
              <div class="mb-3">
                <h4 class="mb-2">> 尺寸</h4>
                <div class="d-flex">
                  <div class="form-check mr-2">
                    <input class="form-check-input" type="radio"
                    name="size" id="size-s" :disabled="!product.size_s"
                    v-model="size_select" value="s">
                    <label class="form-check-label" for="size-s">
                      S
                    </label>
                  </div>
                  <div class="form-check mr-2">
                    <input class="form-check-input" type="radio"
                    name="size" id="size-m" :disabled="!product.size_m"
                    v-model="size_select" value="m">
                    <label class="form-check-label" for="size-m">
                      M
                    </label>
                  </div>
                  <div class="form-check mr-2">
                    <input class="form-check-input" type="radio"
                    name="size" id="size-l" :disabled="!product.size_l"
                    v-model="size_select" value="l">
                    <label class="form-check-label" for="size-l">
                      L
                    </label>
                  </div>
                  <div class="form-check mr-2">
                    <input class="form-check-input" type="radio"
                    name="size" id="size-xl" :disabled="!product.size_xl"
                    v-model="size_select" value="xl">
                    <label class="form-check-label" for="size-xl">
                      XL
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="container d-flex">
              <div class="mb-3">
                <h4 class="mb-2">> 顏色</h4>
                <div class="d-flex">
                  <div v-for="(color, index) in colors" :key="index">
                    <label
                      :for="'color' + index"
                      class="mr-2 color-box"
                      :class="{ 'color-select': color_select === color }"
                      :style="{ background: color }">
                    </label>
                    <input
                      :id="'color' + index"
                      :value="color"
                      v-model="color_select"
                      type="radio"
                      name="color"
                      style="display:none">
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <h4>> 其他資訊</h4>
              <ul>
                <li>- 注意事項：{{ product.description }}</li>
                <li>- 其他說明：
                  <span>
                    客服電話: (02)2222-0020 (非營業時間將無法回應)(急件請購買完後來電確認.商品隨時在銷售無法100%保證有現貨)賣場皆為部分現貨+預購~
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-5">
            <p
              v-if="isDisabled"
              type="button"
              class="btn btn-outline-dark btn-block disabled">已加入購物車！</p>
            <button
              v-else
              type="button"
              class="btn btn-outline-dark btn-block"
              @click="addToCart(product)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid also-like mt-5">
      <h2 class="h3 text-muted text-left pb-3">您可能也會喜歡</h2>
      <ProductCard :alsoLikeCategory="alsoLikeCategory"
      :alsoLikeId="alsoLikeId" ref="alsolikeProductCard"/>
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
      size_select: '',
      color_select: '',
      tempColor: 'red',
      id: '',
      product: {},
      images: [],
      colors: [],
      majorImg: '',
      tempIndex: 0,
      alsoLikeCategory: '',
      alsoLikeId: '',
      isAdded: false,
      isLoading: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
  computed: {
    isDisabled() {
      return this.$store.state.cartItems.some((item) => item.product.id === parseInt(this.id, 10));
    },
  },
  methods: {
    async getProduct() {
      const vm = this;
      vm.isLoading = true;
      const { data, statusText } = await productsAPI.getProduct(vm.id);
      if (data.status === 'success' && statusText === 'OK') {
        vm.images = [];
        vm.colors = [];
        vm.product = data.product;
        vm.majorImg = data.product.image1;
        vm.images.push(data.product.image1);
        vm.images.push(data.product.image2);
        vm.images.push(data.product.image3);
        vm.images.push(data.product.image4);
        const colors = data.product.color.split(',');
        colors.forEach((color) => vm.colors.push(color));
        vm.alsoLikeCategory = vm.product.category;
        vm.alsoLikeId = vm.product.id;
      }
      vm.isLoading = false;
    },
    changeImg(index) {
      this.majorImg = this.images[index];
      this.tempIndex = index;
    },
    addToWishList(product) {
      this.isAdded = !this.isAdded;
      this.$bus.$emit('wishListUpdate', product);
    },
    addToCart(product) {
      const vm = this;
      if (vm.color_select === '' || vm.size_select === '') {
        this.$swal({
          icon: 'error',
          title: '請選擇尺寸或顏色!',
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        const item = {
          product,
          color_select: vm.color_select,
          size_select: vm.size_select,
          num: 1,
        };
        vm.size_select = '';
        vm.color_select = '';
        vm.$store.commit('setCartItems', item);
        this.$swal({
          icon: 'success',
          title: '增加到購物車成功!',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          const test = res.data.data.find((item) => this.id === item.product.id);
          if (test) {
            this.isDisabled = true;
          } else {
            this.isDisabled = false;
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getProduct();
    },
  },
};
</script>

<style lang="scss" scoped>
  .major-img {
    .img-fluid {
      height: 400px;
    }
    div {
      font-size: 0.8rem;
      bottom: 8.3rem;
      right: 2.2rem;
    }
  }
  .other-img {
    img {
      width: 80px;
      padding: 2px;
      &:hover {
        padding: 0;
        border: 2px solid #ffa010;
      }
    }
  }
  .product-content {
    h2 {
      font-size: 1.5rem;
      font-weight: bolder;
    }
    .price {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
    }
    .origin-price {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: lightgray;
      text-decoration: line-through;
    }
    .story-content {
      height: 20%;
      line-height: 1.5rem;
    }
    button {
      outline: none;
    }
    h4 {
      font-size: 1rem;
      letter-spacing: 0.2rem;
    }
    ul {
      padding: 0;
      font-size: 0.8rem;
      letter-spacing: 0.2rem;
      list-style: none;
    }
    .color-box {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .color-select {
      box-shadow: 3px 3px #DEB887;
      transition: .1s;
    }
  }
  @media (max-width: 1200px) {
    .major-img {
      div {
        bottom: 10.2rem;
        right: 2.2rem;
      }
    }
    .also-like {
      padding-top: 2rem;
    }
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
    .also-like {
      padding-top: 4rem;
    }
  }
  @media (max-width: 768px) {
    .major-img {
      div {
        font-size: 0.9rem;
        bottom: 10rem;
        right: 2rem;
      }
    }
    .also-like {
      padding-top: 6rem;
    }
  }
  @media (max-width: 414px) {
    .major-img {
      div {
        bottom: 8rem;
      }
    }
  }
  @media (max-width: 280px) {
    .major-img {
      div {
        font-size: 0.5rem;
        bottom: 7rem;
        right: 2rem;
      }
    }
    .product-content {
      .box {
        img {
          top: -1rem;
          width: 8rem;
        }
      }
    }
  }
</style>
