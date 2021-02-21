<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item active">
          購物車
        </li>
      </ol>
    </nav>
    <div class="row d-flex justify-content-center bg-light">
      <div class="col-lg-6 col-md-8 cart-list py-3">
        <div v-if="cart.length === 0" class="card p-2">
          <div class="card-body d-flex align-items-center product-img py-0">
            <div>
              <img
                src="../../../public/images/logo.jpg"
                class="rounded d-block my-4"
                alt="default picture">
            </div>
            <div class="text-left py-2">
              <div class="d-flex">
                <h5>購物車內沒有商品！</h5>
              </div>
            </div>
           </div>
        </div>
        <div v-else class="card mb-2 px-2 pt-2 pb-4"
        v-for="(item, index) in cart" :key="index">
          <button
            type="button"
            class="close btn-block text-right p-0"
            aria-label="Close"
            @click="deleteCartProduct(item.product.id)">
            <span class="mr-1" aria-hidden="true">&times;</span>
          </button>
          <div class="card-body d-flex product-img py-0">
            <div>
              <a href="#" @click.prevent="getDetail(item.product.id)">
                <img
                  :src="item.product.image1"
                  class="rounded d-block"
                  :alt="item.product.title">
              </a>
            </div>
            <div class="text-left py-2">
              <div class="d-flex flex-wrap">
                <h5 class="mr-auto">{{ item.product.title }}</h5>
                <span>NT.{{ item.product.price }}</span>
              </div>
               <ul>
                <li class="card-text">
                  - 數量：{{ item.num }}{{ item.product.unit }}
                  <button class="minus"
                  @click.prevent="item.num > 1 ? item.num -= 1 : ''">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button class="plus" @click.prevent="item.num += 1">
                    <i class="fas fa-plus"></i>
                  </button>
                </li>
                <li class="card-text more-text">- 內容：{{ item.product.content }}</li>
                <li class="card-text more-text">
                  - 顏色：
                  <label
                    class="color-box"
                    :style="{ 'background-color': item.color_select }">
                  </label>
                </li>
                <li class="card-text more-text">- 尺寸：{{ item.size_select.toUpperCase() }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="cart.length !== 0" class="text-right my-4 mr-2">
          <a href="#" class="delete-all" @click.prevent="deleteAllCart">刪除全部商品</a>
        </div>
      </div>
      <div class="col-md-4 cart-info py-3">
        <div class="card text-left">
          <h3 class="card-header">購物車資訊</h3>
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="card-text mr-auto">商品數量</div>
              <div class="card-text">{{ cartNum }} 件</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text mr-auto">金額小計</div>
              <div class="card-text">NT.{{ cartTotal }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text mr-auto">運費小計</div>
              <div class="card-text">NT.0</div>
            </div>
            <hr />
            <div class="d-flex mb-5">
              <div class="card-text-total mr-auto">總計</div>
              <div v-if="cart.length === 0" class="price-style">NT.0</div>
              <div v-else class="price-style">NT.{{ cartTotal }}</div>
            </div>
            <button
              type="button"
              class="btn btn-primary btn-block text-white"
              :disabled="cart.length === 0"
              @click="switchPath">前往結帳</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      isLoading: false,
    };
  },
  computed: {
    cartTotal() {
      let total = 0;
      if (this.cart.length < 1) {
        total = 0;
      } else if (this.cart.length === 1) {
        total = this.cart[0].product.price * this.cart[0].num;
      } else {
        this.cart.forEach((item) => {
          total += item.num * item.product.price;
        });
      }
      return total;
    },
    cartNum() {
      let totalNum = 0;
      this.cart.forEach((item) => {
        totalNum += item.num;
      });
      return totalNum;
    },
  },
  methods: {
    getCart() {
      this.cart = this.$store.state.cartItems;
    },
    deleteCartProduct(id) {
      this.$store.commit('deleteCartItem', id);
      this.getCart();
    },
    deleteAllCart() {
      this.$store.commit('deleteAllCartItems');
      this.getCart();
    },
    getDetail(productId) {
      this.$router.push({
        name: 'Product',
        params: { id: productId },
      });
    },
    switchPath() {
      this.$router.push({
        name: 'Order',
        params: {
          total: this.cartTotal,
          amount: this.cartNum,
          items: this.cart,
        },
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
  .color-box {
    margin-left: 13px;
    display: block;
    padding: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .breadcrumb {
    font-size: 0.8rem;
    background-color: transparent;
    padding-left: 0;
    margin-left: 0.5rem;
  }
  .row {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .cart-list {
    button {
      outline: none;
    }
    .product-img {
      img {
        width: 6rem;
        margin-right: 2.5rem;
      }
      h5 {
        font-size: 1rem;
        font-weight: bolder;
        letter-spacing: 0.2rem;
      }
      button.minus, button.plus {
        font-size: 4px;
        cursor: pointer;
        line-height: 20px;
        border: 1px solid #A9A9A9;
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 0 5px;
        border-radius: 5px;
        transition: .2s;
      }
      span {
        font-size: 1rem;
        letter-spacing: 0.2rem;
        color: #219ebc;
      }
    }
    .card-text {
      line-height: 1.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
      }
    }
    .delete-all {
      font-size: 1rem;
      color: red;
      letter-spacing: 0.1rem;
      text-decoration: none;
    }
  }
  .cart-info {
    margin-left: 2rem;
    .card-header {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.2rem;
    }
    .card-text {
      font-size: 1rem;
      letter-spacing: 0.1rem;
      color: gray;
    }
    .card-text-total {
      font-size: 1rem;
      letter-spacing: 0.1rem;
      font-weight: bolder;
    }
    .price-style {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
    }
    button {
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 992px) {
    .cart-info {
      margin-left: 0;
    }
  }
  @media (max-width: 576px) {
    .cart-info {
      margin: 0 auto;
    }
  }
  @media (max-width: 414px) {
    .breadcrumb {
      margin-left: 0;
    }
    .row {
      margin-left: 0;
      margin-right: 0;
    }
    .cart-list {
      .product-img {
        h5 {
          display: block;
          min-width: 100%;
          font-size: 1rem;
          font-weight: bolder;
          letter-spacing: 0.1rem;
        }
        span {
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  @media (max-width: 320px) {
    .cart-list {
      .product-img {
        img {
          width: 4.5rem;
          margin-right: 1rem;
        }
        h5 {
          font-size: 0.8rem;
        }
        span {
          font-size: 0.6rem;
          margin-bottom: 0.5rem;
        }
      }
      ul {
        li {
          font-size: 0.6rem;
          letter-spacing: 0.1rem;
        }
        .more-text {
          display: none;
        }
      }
    }
  }
</style>
