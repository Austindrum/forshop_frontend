<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/cart/cartDetail')">購物車</a>
        </li>
        <li class="breadcrumb-item active">填寫資料</li>
      </ol>
    </nav>
    <div class="row d-flex justify-content-center bg-light">
      <div class="col-md-4 order-info py-3">
        <div class="card text-left">
          <h3 class="card-header">訂單說明</h3>
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="card-text mr-auto">數量</div>
              <div class="card-text">{{ amount }} 件</div>
            </div>
            <div class="d-flex mb-4">
              <div class="card-text mr-auto">總計</div>
              <span class="price-style">NT.{{ total }}</span>
            </div>
            <hr class="mb-4" />
            <div class="mb-3">
              <h5 class="card-text">商品配送須知</h5>
              <p class="card-text-secondary">
                配送時間約 3 ~ 5 工作天，配送範圍限於台北市、新北市、基隆市、桃園市、新竹市、台中市、彰化縣、嘉義縣、嘉義市、台南市、高雄市、屏東縣、宜蘭縣、花蓮縣，敬請見諒。
              </p>
            </div>
            <div class="mb-3">
              <h5 class="card-text">退換貨資訊</h5>
              <p class="card-text-secondary">
                本商品為二手衣物，恕不提供鑑賞期。但若加入為會員，每月可享有 5 件商品退換貨服務。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-8 py-3">
        <div class="form text-left py-3 px-1">
          <validation-observer v-slot="{ invalid }">
            <form class="px-3" @submit.prevent="createOrder">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <validation-provider v-slot="{ errors, classes }" rules="required">
                    <label for="userName">姓名</label>
                    <input
                      type="text"
                      name="姓名"
                      class="form-control"
                      :class="classes"
                      id="userName"
                      v-model="form.name"
                      placeholder="請輸入您的姓名"
                    />
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group col-md-6">
                  <validation-provider v-slot="{ errors, classes }" rules="required">
                    <label for="email">E-mail</label>
                    <input
                      type="email"
                      class="form-control"
                      :class="classes"
                      id="email"
                      v-model="form.email"
                      placeholder="請輸入您的E-mail"
                    />
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md">
                  <label for="payment">付款方式</label>
                  <select id="payment" class="form-control" v-model="form.payment" required>
                    <option value disabled>請選擇付款方式</option>
                    <option value="WebATM">WebATM</option>
                    <option value="ATM">ATM</option>
                    <option value="CVS">CVS</option>
                    <option value="Barcode">Barcode</option>
                    <option value="Credit">Credit</option>
                    <option value="ApplePay">ApplePay</option>
                    <option value="GooglePay">GooglePay</option>
                  </select>
                </div>
                <div class="form-group col-md">
                  <validation-provider v-slot="{ errors, classes }" rules="required|min:10">
                    <label for="tel">電話</label>
                    <input
                      type="tel"
                      name="電話"
                      class="form-control"
                      :class="classes"
                      id="tel"
                      v-model="form.tel"
                      placeholder="請輸入您的電話"
                    />
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="address">通訊地址</label>
                  <input
                    type="text"
                    name="地址"
                    class="form-control"
                    :class="classes"
                    id="address"
                    v-model="form.address"
                    placeholder="請輸入您的地址"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="message">留言</label>
                <textarea
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="5"
                  v-model="form.message"
                  placeholder="有什麼想和我們說的嗎？"
                ></textarea>
              </div>
              <div class="text-center mb-5">
                <button
                  type="button"
                  class="btn btn-outline-info"
                  @click="$router.push('/shop/home')">取消</button>
                <button
                  type="submit"
                  class="btn btn-primary text-white ml-3"
                  :disabled="invalid">送出訂單</button>
              </div>
            </form>
          </validation-observer>
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
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      total: 0,
      amount: 0,
      items: [],
      isLoading: false,
    };
  },
  methods: {
    async createOrder() {
      this.isLoading = true;
      const info = {
        user: this.form,
        items: this.items,
      };
      const { data, statusText } = await productsAPI.postOrder(info);
      if (data.status === 'success' && statusText === 'OK') {
        this.$router.push({
          name: 'CheckOut',
          params: { orderId: data.order },
        });
      }
    },
  },
  created() {
    this.total = this.$route.params.total;
    this.amount = this.$route.params.amount;
    this.$route.params.items.forEach((item) => {
      this.items.push({
        id: item.product.id,
        num: item.num,
        color: item.color_select,
        size: item.size_select,
        total: this.$route.params.total,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
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
  .order-info {
    .card-header {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.2rem;
    }
    .card-text {
      font-size: 1rem;
      letter-spacing: 0.1rem;
      font-weight: bolder;
    }
    span {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: #219ebc;
    }
    p {
      font-size: 0.85rem;
      letter-spacing: 0.1rem;
    }
  }
  .form {
    border: 2px solid lightgray;
    border-radius: 0.5rem;
    button {
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
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
    .breadcrumb {
      margin-left: 0;
    }
    .row {
      margin-left: 0;
      margin-right: 0;
    }
    .card-text {
      font-size: 0.9rem;
    }
  }
</style>
