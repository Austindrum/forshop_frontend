<template>
  <div class="container top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item active">消費相關資訊</li>
      </ol>
    </nav>
    <div class="jumbotron jumbotron-fluid bg-img my-5"></div>
    <div class="container column-content text-left">
      <div class="mb-5" v-for="(item, index) in info" :key="index">
        <div class="mb-2">
          <span></span>
          <h3 class="h5 ml-3">{{ item.title }}</h3>
        </div>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          title: '商品配送資訊',
          content: '確認付款後，約 3~5 工作天可配送至指定地址。配送範圍限於台北市、新北市、基隆市、桃園市、新竹市、台中市、彰化縣、嘉義縣、嘉義市、台南市、高雄市、屏東縣、宜蘭縣、花蓮縣，其餘地區的配送資訊，敬請聯繫客服部門。商品寄達後，如投遞逾三次未簽收，商品將暫返還本公司物流中心，並由客服與您通知。如需再次配送，需支付 200 元運費，懇請消費者留意。',
        },
        {
          title: '鑑賞期與退換貨資訊',
          content: '個人貼身衣物，恕不提供鑑賞期。但若加入為會員，每月可享有 5 件商品退換貨服務。',
        },
        {
          title: '訂單追蹤',
          content: '您可在會員頁面追蹤您的所有訂單，如確認付款後逾 6 天仍未收到商品，敬請聯繫客服。',
        },
        {
          title: '會員隱私保障',
          content: '本公司重視每位消費者的個人隱私，不會公開任何個人資訊，提供消費者安心的購物環境。',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumb {
      font-size: 0.8rem;
      background-color: transparent;
      padding-left: 0;
    }
  .bg-img {
    background-image: url("https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1938&q=80");
    background-size: cover;
    background-position: center center;
    height: 60vh;
    max-height: 350px;
  }
  .column-content {
    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0.4rem;
        background-color: #ffa010;
      }
    }
    h3 {
      display: inline;
      font-weight: bolder;
    }
    p {
      line-height: 1.8rem;
    }
  }
  @media (max-width: 992px) {
    .top-margin {
       margin-top: 3rem;
    }
  }
  @media (max-width: 576px) {
    .bg-img {
      height: 30vh;
    }
  }
</style>
