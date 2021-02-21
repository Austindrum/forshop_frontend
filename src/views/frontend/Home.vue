<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="mb-5">
      <Banner class="top-margin"/>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">商品類別</h2>
        <Carousel />
      </div>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">新品上市</h2>
        <ProductCard :newArrival="number"/>
      </div>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">時裝新知</h2>
        <ColumnCard />
      </div>
    </div>
    <div class="mb-5">
      <div class="container">
        <h2 class="h3 text-muted text-left mb-3">關於我們</h2>
        <div class="row">
          <div class="col-md-6 margin-control">
            <img
              src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              class="img-fluid"
              alt="about us"
            />
          </div>
          <div class="col-md-6 text-left d-flex align-items-center">
            <div>
              <p class="pb-3">
                我們在業界逐步累積的專業知識，不斷的創造新的據點，來服務廣大的顧客，始終堅持以熱情青春的活力、服務至上的觀點，
                來教育員工，促使員工們在這個體制下能完善的執行公司所給予的每一項任務，相信在我們的努力下，
                能提供更完善舒適的空間及最時尚流行的商品來服務顧客。
              </p>
              <button
                type="button"
                class="btn btn-outline-dark btn-block"
                @click="$router.push('/shop/about')">關於我們</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Carousel from '@/components/Carousel.vue';
import ProductCard from '@/components/ProductCard.vue';
import ColumnCard from '@/components/ColumnCard.vue';

export default {
  components: {
    Banner,
    Carousel,
    ProductCard,
    ColumnCard,
  },
  data() {
    return {
      // 判斷首頁new arrival商品應載入幾個
      number: 8,
      isLoading: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  .margin-control {
    margin-bottom: 0;
  }
  @media (max-width: 992px) {
    .top-margin {
      margin-top: 3rem;
    }
  }
  @media (max-width: 768px) {
    .margin-control {
      margin-bottom: 1rem;
    }
  }
</style>
