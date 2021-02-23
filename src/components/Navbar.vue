<template>
  <!-- 本元件綜合menu、sideBar兩元件，可參考兩個元件內的註解 -->
  <nav class="navbar navbar-expand-lg fixed-top text-left mb-3 pt-4">
    <div class="container">
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isShow = !isShow"
      >
        <div class="toggler-icon">
          <span v-if="!isShow">
            <i class="fas fa-bars"></i>
          </span>
          <span v-else>
            <i class="fas fa-times text-muted"></i>
          </span>
        </div>
      </button>
      <div class="navbar-brand" @click="$router.push('/shop/home')">
        <img src="../../public/images/logo.jpg" alt="logo" class="w-100">
      </div>
      <div class="mr-3">
        <a href="#" @click.prevent="goToCart" class="btn-cart">
          <div class="cart">
            <i class="text-muted fas fa-size fa-shopping-cart"></i>
            <span class="badge badge-pill badge-primary text-white">
             {{ cartAmount }}
            </span>
          </div>
        </a>
      </div>
      <div>
        <div class="dropdown">
          <button
            type="button"
            class="btn-sm btn-wishList btn-none dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="text-muted far fa-size fa-heart"></i>
          </button>
          <!-- 以下是願望清單(下拉式選單) -->
          <div id="dropdown" class="dropdown-menu drop-menu-right" data-stopPropagation="true">
            <div class="px-3 py-4">
              <table class="table table-sm px-3">
                <thead>
                  <tr>
                    <th scope="col">名稱</th>
                    <th scope="col" width="45" class="more-text">數量</th>
                    <th scope="col" width="65">單價</th>
                    <th scope="col" width="45">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in wishList" :key="index">
                    <td class="align-middle title" @click="getDetail(item.id)">{{ item.title }}</td>
                    <td class="align-middle more-text">1 {{ item.unit }}</td>
                    <td class="align-middle">NT.{{ item.price }}</td>
                    <td class="align-middle text-center">
                      <button
                        type="button"
                        class="text-muted btn-none"
                        @click="deleteWishItem(item)">
                        <i class="fas fa-trash-alt" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p v-if="wishList.length === 0">還沒有衣服加入願望清單喔！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav pl-5">
          <a href="#" @click.prevent="$router.push('/shop/home')">
            <img class="mb-3" src="../../public/images/logo.jpg" alt="logo">
          </a>
          <div class="accordion mb-5" id="menuAccordion">
            <div v-for="(item, index) in categoryGuide" :key="index">
              <div class="d-flex mb-2 w-75" :id="'heading' + index">
                  <div class="text-hover">
                    <a href="#"  @click.prevent="switchPath(item.id)">
                      {{ item.title }}
                    </a>
                  </div>
                    <button
                      type="button"
                      class="btn-none ml-auto"
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
                      v-for="(sub, i) in item.SubCategories"
                      :key="i"
                      class="list-group-item text-hover"
                      @click="switchSubPath(sub.id, item.id)">
                      - {{ sub.title }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/columns')">時裝新知</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/about')">關於我們</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/info')">其他資訊</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/shop/storeInfo')">實體店資訊</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push('/')">ForShop 形象頁</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
/* global $ */
import productsAPI from '../apis/product';

export default {
  data() {
    return {
      categoryGuide: [],
      isShow: false,
    };
  },
  computed: {
    wishList() {
      return this.$store.state.wishList;
    },
    cartAmount: {
      get() {
        return this.$store.state.cartItems.length;
      },
      set() {},
    },
  },
  methods: {
    async getCategories() {
      const vm = this;
      const { data, statusText } = await productsAPI.getCategorys();
      if (data.status === 'success' && statusText === 'OK') {
        vm.categoryGuide = data.categories;
      }
    },
    switchPath(option) {
      this.isShow = false;
      $('#navbarCollapse').removeClass('show');
      this.$router.push({
        name: 'Products',
        params: { category: option },
      });
    },
    switchSubPath(sub, cate) {
      this.isShow = false;
      $('#navbarCollapse').removeClass('show');
      this.$router.push({
        name: 'SubProducts',
        params: {
          category: cate,
          subCategory: sub,
        },
      });
    },
    deleteWishItem(product) {
      this.$store.commit('setWishList', product);
      this.$swal({
        icon: 'error',
        title: '刪除願望清單',
        showConfirmButton: false,
        timer: 1000,
      });
    },
    goToCart() {
      this.isShow = false;
      $('#navbarCollapse').removeClass('show');
      this.$router.push('/cart/cartDetail');
    },
    getDetail(productId) {
      this.isShow = false;
      $('#navbarCollapse').removeClass('show');
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
  },
  created() {
    this.getCategories();
  },
  beforeDestroy() {
    this.$bus.$off('addCartAmount');
    this.$bus.$off('wishListUpdate');
    this.$bus.$off('getWishList');
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
  .navbar {
    display: none;
    background: rgba(255, 255, 255, 0.85);
  }
  .navbar-toggler {
    outline: none;
  }
  .toggler-icon {
    width: 1.5rem;
  }
  .navbar-brand {
    &:hover {
      opacity: 0.85;
      cursor: pointer;
    }
  }
  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  .dropdown-menu {
    border: none;
    background-color: transparent;
    .title {
      cursor: pointer;
      &:hover {
        color: #ffa010;
      }
    }
    .add-cart-btn {
      color: white;
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
  }
  .cart {
    position: relative;
    span {
      position: absolute;
      top: -0.3rem;
      right: -0.8rem;
      font-size: 0.6rem;
    }
  }
  .btn-none {
    background-color: transparent;
    border: none;
    outline: none;
    &:hover {
      color: #ffa010;
    }
  }
  .list-group-item {
    border: none;
    padding: 0.15rem 0.5rem;
  }
  .text-hover {
    transition: all 1s ease;
    transform: translate(0);
    color: black;
    text-decoration: none;
    a {
      color: gray;
      text-decoration: none;
    }
    &:hover {
      transform: translate(0.3rem);
      opacity: 0.4;
    }
  }
  .collapse .show {
    background: rgba(255, 255, 255, 0.85);
  }
@media (max-width: 992px) {
  .navbar {
    display: flex;
  }
  .navbar-brand {
    // max-width: 6rem;
    // margin: 0 auto;
    display: none;
  }
  .navbar-collapse {
    position: fixed;
    top: 3rem;
    left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    background: rgba(255, 255, 255, 0.85);
    width: 50%;
    height: 100%;
    img {
      width: 5rem;
    }
  }
  .navbar-collapse.collapsing {
    left: -75%;
    transition: height 0s ease;
    margin-top: 1.2rem;
  }
  .navbar-collapse.show {
    left: 0;
    transition: left 300ms ease-in-out;
    margin-top: 1.2rem;
    backdrop-filter: blur(5px);
  }
  .navbar-toggler.collapsed ~ .navbar-collapse {
    transition: left 500ms ease-in-out;
  }
  .dropdown-menu {
    min-width: 50vw;
    background: rgba(255,255,255,0.85);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(3px);
    border: none;
    margin-top: 2rem;
  }
  .drop-menu-right {
    right: 0;
    left: auto;
  }
  .fa-size {
    font-size: 1rem;
  }
}
@media (max-width: 768px) {
  .dropdown-menu {
    min-width: 80vw;
  }
}
@media (max-width: 576px) {
  // .navbar-brand {
  //   max-width: 5rem;
  // }
  .navbar-collapse {
    width: 80%;
    height: 100%;
  }
  .dropdown-menu {
    min-width: 90vw;
  }
  .cart {
    position: relative;
    span {
      top: -0.2rem;
      right: -0.45rem;
      font-size: 0.35rem;
    }
  }
  .fa-size {
    font-size: 0.85rem;
  }
}
@media (max-width: 360px) {
  .dropdown-menu {
    th, td {
      font-size: 0.8rem;
    }
    .more-text {
      display: none;
    }
    .add-cart-btn {
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>
