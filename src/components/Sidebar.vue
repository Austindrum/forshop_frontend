<template>
  <!-- 這個元件是右側的購物車、願望清單 -->
  <div class="sticky-top side-bar">
    <div>
      <a href="#" @click.prevent="goToCart" class="btn-cart">
        <div class="mt-3 mb-5">
          <i class="text-muted fas fa-shopping-cart"></i>
        </div>
        <span class="badge badge-pill badge-primary">
          {{ cartAmount }}
        </span>
      </a>
    </div>
    <div>
      <div class="dropleft">
        <button
          type="button"
          class="btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"><i class="text-muted far fa-heart"></i></button>
        <div id="stopPropagation" class="dropdown-menu" data-stopPropagation="true">
          <div class="px-3 py-4">
            <table class="table table-sm px-3">
              <thead>
                <tr>
                  <th scope="col">名稱</th>
                  <th scope="col" width="50">數量</th>
                  <th scope="col" width="100">單價</th>
                  <th scope="col" width="50">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in wishList" :key="index">
                  <td class="align-middle title" @click="getDetail(item.id)">{{ item.title }}</td>
                  <td class="align-middle">1{{ item.unit }}</td>
                  <td class="align-middle">NT.{{ item.price }}</td>
                  <td class="align-middle text-center">
                    <button
                      type="button"
                      class="text-muted trash-btn"
                      @click="deleteWishItem(item)">
                      <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="wishList.length < 1">還沒有商品加入願望清單喔！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* 此元件的 $bus 溝通，對象都是ProductCard元件 */

export default {
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
    deleteWishItem(product) {
      this.$store.commit('setWishList', product);
      this.$swal({
        icon: 'error',
        title: '刪除願望清單',
        showConfirmButton: false,
        timer: 1000,
      });
    },
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          this.cartAmount = res.data.data.length;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    goToCart() {
      this.$router.push('/cart/cartDetail');
    },
    getDetail(productId) {
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
  .sticky-top {
    top: 2rem;
  }
  .side-bar {
    .btn-cart {
      position: relative;
      .fas {
        font-size: 1.5rem;
      }
      span {
        position: absolute;
        top: -0.4rem;
        right: -1.5rem;
        color: white;
      }
    }
    .dropdown-toggle {
      background-color: transparent;
      border: none;
      outline: none;
      .far {
        font-size: 1.5rem;
      }
      &::before {
        display: none;
      }
    }
    .dropdown-menu {
      min-width: 40vw;
      background: rgba(255,255,255,0.85);
      border: none;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(3px);
      .title {
        cursor: pointer;
        &:hover {
          color: #ffa010;
        }
      }
      .trash-btn {
        background-color: transparent;
        border: none;
        outline: none;
        .fas {
          &:hover {
            color: #ffa010;
          }
        }
      }
      .add-cart-btn {
        color: white;
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media (max-width: 992px){
    .side-bar {
      display: none;
    }
  }
</style>
