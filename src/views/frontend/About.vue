<template>
  <div class="top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item active">關於我們</li>
      </ol>
    </nav>
    <div class="jumbotron jumbotron-fluid bg-img my-5"></div>
    <div class="container text-left mb-3">
      <div class="row">
        <div class="col-md-3 text-muted mb-2">
          <h2 class="subtitle">Concept</h2>
        </div>
        <div class="col-md-9">
          <p>
            自1992年在三重成立第一家服飾量販店開始，我們不斷在服飾業界默默耕耘，
            長年經驗的累積下，深知消費者之需求，並努力精進、不斷開發及創新，在服飾量販業界嶄露頭角，
            目前已有18家據點，平均每家門市擁有300~600坪的舒適購物空間，是提供全家人最佳的購衣去處。
            目前正積極加速展店中，預計在未來將達到百家據點，歡迎具有『服務、熱情、專業、創新、執行力』的朋友一起加入！<br/>
            <strong>正派誠懇、值得信賴</strong><br/>
            以誠懇、實在的態度經營商場，是一家與社區共謀發展、共同進步的量販商場。<br/>
            <strong>品味、格調</strong><br/>
            機能豐富、高品味、高格調之全客層服飾量販店。<br/>
            <strong>舒適、安全、親切</strong><br/>
            我們重視每位顧客的權益，自服務人員的應對禮儀、作業制度的規劃，莫不是以消費者為著眼點。
          </p>
        </div>
      </div>
    </div>
    <div class="container text-left mb-5">
      <div class="row">
        <div class="col-md-3 text-muted mb-2">
          <h2 class="subtitle">Feature</h2>
        </div>
        <div class="col-md-9">
          <p>
            <strong>穩健經營、持續成長</strong><br>
            我們始終堅持著緊密地與協力廠商合作，帶給顧客最優質的商品；
            擁有堅強及完整的服務團隊才能提供顧客豐富、優質、流行之產品組合及五星級的服務，
            有人性化的工作環境、健全的管理制度、完善的教育訓練將會培訓出優秀的團隊。<br/>
            <strong>專業的行銷管理</strong><br/>
            專業的複合式賣場必須不斷地強化「行銷管理」能力，才能具備高度競爭力，在市場上處於領導地位，也必須能帶動附近商圈的成長，進而增加集客力。<br/>
            <strong>累積競爭優勢</strong><br/>
            我們長期秉持著一貫做法，逐步的累積競爭優勢，促使三方「公司－協力廠商－顧客」之間互蒙其利、互信互賴，在流通市場上永續發展，創造三贏的結果。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    background-image: url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
    background-position: center center;
    height: 60vh;
    max-height: 350px;
  }
  .subtitle {
    font-weight: lighter;
    letter-spacing: 0.2rem;
    opacity: 0.6;
  }
  p {
    line-height: 1.8rem;
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
