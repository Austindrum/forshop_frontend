<template>
  <div class="container-fluid">
    <Loading :active.sync="isLoading" />
    <table class="table">
      <thead>
        <tr>
          <th>下單時間</th>
          <th>客戶資訊</th>
          <th>購買商品</th>
          <th>付款方式</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr v-for="(item, index) in pageOrders" :key="index">
          <td>{{ item.createdAt.split('T')[0] }}</td>
          <td>
            <ul class="list-unstyled text-left">
              <li><strong>客戶名稱</strong>: {{ item.name }}</li>
              <li><strong>電子信箱</strong>: {{ item.email }}</li>
              <li><strong>手機</strong>: {{ item.tel }}</li>
              <li><strong>地址</strong>: {{ item.address }}</li>
            </ul>
          </td>
          <td>
            <ul class="list-unstyled text-left">
              <li class="pb-2 pt-2" style="border-bottom: 1px solid #DCDCDC"
              v-for="(product, i) in item.Products" :key="i">
                {{ product.title.substring(0, 20) }}<br/> 數量：{{ product.OrderItem.num }}
                {{ product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.payment }}</td>
          <td class="text-right">{{ item.Products[0].OrderItem.amount }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item.id, item.status)"
                :checked="item.status"
              />
              <label class="custom-control-label" :for="item.id">
                <strong v-if="item.status" class="text-paid">已付款</strong>
                <span v-else class="text-muted">尚未付款</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Paginate
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
      :container-class="'pagination'"
    />
  </div>
</template>

<script>
import adminAuthAPI from '../../apis/admin/auth';

export default {
  data() {
    return {
      pageNum: 1,
      currentPage: 1,
      pageSize: 10,
      orders: [],
      isNew: false,
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    async getOrders() {
      const vm = this;
      vm.isLoading = true;
      const { data, statusText } = await adminAuthAPI.getOrders();
      if (data.status === 'success' && statusText === 'OK') {
        vm.orders = data.orders;
      }
      vm.isLoading = false;
    },
    async setOrderPaid(productId, status) {
      const vm = this;
      const payment = {
        productId,
        status,
      };
      vm.isLoading = true;
      const { data, statusText } = await adminAuthAPI.putOrder(payment);
      if (data.status === 'success' && statusText === 'OK') {
        vm.$swal({
          icon: 'success',
          title: '客戶付款資訊編輯成功',
        });
      }
      vm.getOrders();
      vm.isLoading = false;
    },
    pageCallBack(num) {
      this.currentPage = num;
    },
    setPageNum() {
      const vm = this;
      const data = vm.orders;
      vm.pageNum = Math.ceil(data.length / vm.pageSize);
      data.forEach((order, index) => {
        vm.$set(order, 'page', parseInt(index / vm.pageSize, 10) + 1);
        vm.$set(order, 'num', index + 1);
      });
      return data;
    },
  },
  created() {
    this.getOrders();
  },
  watch: {
    orders() {
      this.setPageNum();
    },
  },
  computed: {
    pageOrders() {
      const vm = this;
      let data = vm.setPageNum();
      if (data && data.length > 0) {
        data = data.filter((product) => product.page === vm.currentPage);
        return data;
      }
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
  .text-paid {
    color: #219ebc;
  }
</style>
