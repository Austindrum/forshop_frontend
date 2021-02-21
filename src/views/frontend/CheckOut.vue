<template>
  <div>
    <Loading :active.sync="isLoading" />
    <div class="row d-flex justify-content-center bg-light">
      <div class="col-md-6 order-info py-3">
        <div class="card text-left">
          <h3 class="card-header">訂單明細</h3>
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">購買時間</div>
              <div class="card-text text-right">{{ order.createdAt }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">商品數量</div>
              <div class="card-text">{{ itemNum }} 件</div>
            </div>
            <div class="d-flex mb-4">
              <div class="card-text width-control mr-auto">總金額</div>
              <span>NT.{{ total }}</span>
            </div>
            <hr />
            <div class="card mb-2 px-2 pt-2 pb-4" v-for="(item, i) in order.Products" :key="i">
            <div class="card-body d-flex py-0">
              <div class="margin-control">
                  <img
                    :src="item.image1"
                    class="rounded d-block"
                    :alt="item.title">
              </div>
              <div class="text-left py-2">
                <div class="d-flex">
                  <h5 class="mr-auto">{{ item.title }}</h5>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 py-3">
        <div class="card text-left">
          <h3 class="card-header">收件人資訊</h3>
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">付款方式</div>
              <div class="card-text text-right">{{ order.payment }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">姓名</div>
              <div class="card-text text-right">{{ order.name }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">地址</div>
              <div class="card-text text-right">{{ order.address }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">電話</div>
              <div class="card-text text-right">{{ order.tel }}</div>
            </div>
            <div class="d-flex mb-3">
              <div class="card-text width-control mr-auto">e-mail</div>
              <div class="card-text text-right">{{ order.email }}</div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary btn-block text-white mt-5 w-50"
            @click="payOrder">確認付款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsAPI from '../../apis/product';

export default {
  data() {
    return {
      order: [],
      orderId: '',
      isLoading: false,
      itemNum: 0,
      total: 0,
    };
  },
  methods: {
    async getDetailed(id) {
      const vm = this;
      vm.isLoading = true;
      vm.orderId = id;
      const { data, statusText } = await productsAPI.getOrder(id);
      if (data.status === 'success' && statusText === 'OK') {
        vm.order = data.order;
        vm.order.Products.forEach((product) => {
          vm.itemNum += product.OrderItem.num;
        });
        vm.order.Products.forEach((product) => {
          vm.total += product.OrderItem.num * product.price;
        });
      }
      vm.isLoading = false;
    },
    async payOrder() {
      const vm = this;
      vm.isLoading = true;
      // const payOrder = {
      //   id: vm.orderId,
      // };
      // const { data, statusText } = await productsAPI.putOrder(payOrder);
      // if (data.status === 'success' && statusText === 'OK') {
      vm.$swal({
        icon: 'success',
        title: '購買成功！',
        html: '<p style="font-size: 12px; margin-top: 1rem;">訂單已完成，此次購買的商品約 3 ~ 5 個工作天會送達，非常感謝您對 ForShop 風格小舖的支持！</p>',
      });
      vm.$store.commit('deleteAllCartItems');
      vm.$router.push('/shop/home');
    },
    // },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getDetailed(this.orderId);
  },
};
</script>

<style lang="scss" scoped>
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
  .width-control {
    min-width: 4.5rem;
  }
  .order-info {
    span {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
      text-align: right;
    }
    .margin-control {
      margin-right: 1.5rem;
      img {
        max-width: 6rem;
      }
    }
    h5 {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.2rem;
    }
  }
  button {
    font-weight: bolder;
    letter-spacing: 0.1rem;
  }
  @media (max-width: 768px) {
    .card-text {
      letter-spacing: 0;
    }
    .order-info {
      span {
        letter-spacing: 0.1rem;
      }
    }
  }
  @media (max-width: 414px) {
    .card-text {
      font-size: 0.9rem;
    }
    .order-info {
      .margin-control {
        margin-right: 1rem;
        img {
          max-width: 3.5rem;
        }
      }
      span {
        font-size: 0.9rem;
      }
      h5 {
        font-size: 0.9rem;
        letter-spacing: 0;
      }
    }
  }
</style>
