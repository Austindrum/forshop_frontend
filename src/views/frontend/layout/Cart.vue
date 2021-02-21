<template>
  <div>
    <div class="cart">
      <div class="container box d-flex mt-5 mb-3 justify-content-between">
        <div v-for="(item, index) in cartIndex" :key="index">
          <div class="circle mb-2" :class="{active: $route.name === item.routerName}">
            <span>{{ index+1 }}</span>
          </div>
          <p>{{ item.indexText }}</p>
        </div>
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Foot from '@/components/Footer.vue';

export default {
  components: {
    Foot,
  },
  data() {
    return {
      cartIndex: [
        {
          routerName: 'CartDetail',
          indexText: '購物車內容',
        },
        {
          routerName: 'Order',
          indexText: '填寫資訊',
        },
        {
          routerName: 'CheckOut',
          indexText: '確認付款',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .cart {
    min-height: calc(100vh - (15vh + 4rem));
  }
  .logo-img {
    max-width: 8rem;
    margin: 0 auto;
  }
  .box {
    margin: 0 auto;
    max-width: 60%;
    .circle {
      width: 3.5rem;
      height: 3.5rem;
      background-color: gray;
      border-radius: 50%;
      margin: 0 auto;
      opacity: 0.6;
    }
    .active {
      background-color: #ffa010;
      opacity: 1;
    }
    span {
      font-size: 1.2rem;
      text-align: center;
      line-height: 3.5rem;
      color: white;
    }
    p {
      font-size: 0.85rem;
      letter-spacing: 0.2rem;
    }
  }
  @media (max-width: 576px) {
    .box {
      max-width: 85%;
    }
  }
  @media (max-width: 360px) {
    .box {
      .circle {
        width: 2.5rem;
        height: 2.5rem;
      }
      span {
        font-size: 1rem;
        line-height: 2.5rem;
      }
      p {
        font-size: 0.6rem;
        letter-spacing: 0.1rem;
      }
    }
  }
</style>
