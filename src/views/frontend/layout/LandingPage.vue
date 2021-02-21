<template>
  <div>
    <div class="shop-button text-white" @click="$router.push('/shop/home')">
      <div class="mb-2">
        <i class="fas fa-shopping-cart fa-2x"></i>
      </div>
      <div class="link-text">前往商城</div>
    </div>
    <div class="scroll">
      <div class="scroll-text">SCROLL</div>
      <div class="scroll-down-back"></div>
      <div class="scroll-down"></div>
    </div>
    <section class="sec-1">
      <div class="parallax-img"></div>
      <div class="sec1-text text-left pl-5 py-3">
        <h2 class="mb-2">ForShop</h2>
        <h4 class="mb-4">風格小舖 > 男女裝、生活態度</h4>
        <div class="mb-5">
          <p>For Man & Woman </p>
          <p>More stories, more styles</p>
        </div>
        <div class="more-text">
          <p>男、女裝</p>
          <p>有風格多樣且品質良好商品</p>
          <p>讓您自在探索自己的風格</p>
        </div>
      </div>
    </section>
    <section class="container-fluid sec-2 py-4 my-5" data-aos="fade-up" data-aos-duration="2000">
      <div class="row">
        <div class="col-md-7 bg-cover"></div>
        <div class="container">
          <div class="col-md-12 sec-text text-left py-5">
            <div class="mb-5">
              <h4 class="mb-5">Concept</h4>
              <h3>男士 X 女士 X 時尚精品</h3>
            </div>
            <div class="text-muted">
              <p></p>
              <p>臺灣嚴選品管，堅持最高CP值</p>
              <p>致力提供平價潮流男裝/女裝/小物</p>
              <p>同步時尚品味穿搭與經濟風格美學</p>
              <p>我們對於衣服，是否能有其他想像？</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box"></div>
    </section>
    <section class="container-fluid sec-3">
      <div class="container product-box mb-5" v-for="(item, index) in productContent" :key="index">
        <div class="row product-parallax">
          <div class="col-md-7" v-if="(index+1) % 2 === 0">
            <div class="product-parallax-img" :style="{backgroundImage: 'url('+item.img+')'}"></div>
          </div>
          <div class="col-md-5 text-left product-text">
            <div class="scroll">
              <div class="scroll-down-back-2"></div>
              <div class="scroll-down-2"></div>
            </div>
            <div class="mb-5">
              <h4 class="mb-5">{{ item.en }}</h4>
              <h3>{{ item.zh }}</h3>
            </div>
            <div class="text-muted" v-for="(intro, i) in item.content" :key="i">
              <p>{{ intro }}</p>
            </div>
          </div>
          <div class="col-md-7" v-if="(index+1) % 2 !== 0">
            <div class="product-parallax-img" :style="{backgroundImage: 'url('+item.img+')'}"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid sec-4 my-4 py-4" data-aos="fade-up" data-aos-duration="2000">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card text-left">
              <img src="https://images.unsplash.com/photo-1514904540049-e2e3928e479f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top mb-4" alt="img">
              <div class="card-body pl-0">
                <h5 class="card-title mb-4">
                  在這裡，發現塑造的一百種可能
                </h5>
                <p class="card-text">
                  我們相信，不斷發掘自己的穿搭需求，更能找到適合的衣服，並為自己定義專屬風格。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-left">
              <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="card-img-top mb-4" alt="img">
              <div class="card-body pl-0">
                <h5 class="card-title mb-4">
                  嚴格篩選品質，凝聚快時尚討論
                </h5>
                <p class="card-text">
                  ForShop 提供平台與專欄，希望讓更多人瞭解快時尚議題，並一起找尋新的生活實踐方式。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-left">
              <img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80" class="card-img-top mb-4" alt="img">
              <div class="card-body pl-0">
                <h5 class="card-title mb-4">
                  時尚配件，經驗搭配
                </h5>
                <p class="card-text">配件襯托出個人風格，讓您更能凸顯獨特性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid sec-5 mt-5 py-5" data-aos="fade-up" data-aos-duration="2000">
      <div class="container">
        <div class="circle mb-5">
          <div class="mb-3 py-3">
            <img src="../../../../public/images/logo.jpg" alt="logo">
          </div>
        </div>
        <button type="button" class="btn btn-block p-3" @click="$router.push('/shop/home')">
          <div class="d-flex justify-content-center">
            <div class="mr-3">
              <i class="fas fa-angle-right"></i>
            </div>
            <div>前往線上商城</div>
          </div>
        </button>
      </div>
    </section>
    <section class="container-fluid py-5">
      <div class="text-muted">
        <div class="text-muted mb-2">&copy; ForShop 風格小舖</div>
        <div>Demo WebSite</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productContent: [
        {
          en: '男裝',
          zh: 'Man\'s',
          img: 'https://images.unsplash.com/photo-1589391799051-a022d3ab9ead?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
          content: [
            '做男人，需要有些性格',
            '在這裡，有最適合您的衣服',
            '時尚陽剛，男人的選擇',
          ],
        },
        {
          en: 'Woman\'s',
          zh: '女裝',
          img: 'https://images.unsplash.com/photo-1590156283714-41a97d645073?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
          content: [
            '春夏活潑，或秋冬成熟',
            '長裙、短裙或連身',
            '挑戰妳的穿搭想像',
          ],
        },
        {
          en: 'Accessories',
          zh: '小物配件',
          img: 'https://images.unsplash.com/photo-1506169894395-36397e4aaee4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
          content: [
            '風格多樣的小物、配件',
            '兼具時尚與實用',
            '不論您想要甚麼配件，都能在這裡尋寶',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .shop-button {
    position: fixed;
    top: 0;
    right: 0;
    width: 7.5rem;
    height: 7.5rem;
    padding: 1.3rem;
    background-color: #6e6e6c;
    /* 加0.01px，是為了避免在chrome上會有閃爍現象 */
    box-shadow: inset 0 0 0 0.01px #ffa010;
    transition: all ease-out 0.3s;
    z-index: 20;
    .link-text {
      font-size: 0.85rem;
      letter-spacing: 0.1rem;
    }
    &:hover {
      box-shadow: inset 7.5rem 0 0 0.01px #ffa010;
      cursor: pointer;
    }
  }
  .scroll {
    .scroll-text {
      position: absolute;
      bottom: 4.2rem;
      right: 7.9rem;
      writing-mode: vertical-lr;
      text-orientation: mixed;
      font-size: 0.8rem;
      opacity: 0.6;
      letter-spacing: 0.3rem;
    }
    .scroll-down-back {
      position: absolute;
      bottom: 0;
      right: 7.3rem;
      height: 10rem;
      width: 0.08rem;
      background-color: lightgray;
    }
    .scroll-down {
      position: absolute;
      bottom: 0;
      right: 7.3rem;
      height: 10rem;
      width: 0.15rem;
      background-color: #ffa010;
      animation: animate 2s ease-in infinite;
    }
    .scroll-down-back-2 {
      position: absolute;
      top: 3rem;
      left: 1rem;
      height: 20rem;
      width: 0.08rem;
      background-color: lightgray;
    }
    .scroll-down-2 {
      position: absolute;
      top: 3rem;
      left: 1rem;
      height: 20rem;
      width: 0.22rem;
      background-color: #ffa010;
      opacity: 0.65;
      animation: animate 2s ease-in infinite;
    }
    @keyframes animate {
      0% {
        transform-origin: top;
        transform: scaleY(0);
      }
      45% {
        transform-origin: top;
        transform: scaleY(1);
      }
      55% {
        transform-origin: bottom;
        transform: scaleY(1);
      }
      100% {
        transform-origin: bottom;
        transform: scaleY(0);
      }
    }
  }
  .sec-1 {
    .parallax-img {
      background-image: url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
      background-size: cover;
      background-attachment: fixed;
      min-height: 100vh;
    }
    .sec1-text {
      position: absolute;
      bottom: 4rem;
      left: 10rem;
      width: 60%;
      color: white;
      background-color: rgba(105, 105, 105, 0.6);
      letter-spacing: 0.15rem;
      h2 {
        font-size: 5rem;
        letter-spacing: 1.1rem;
      }
      h4 {
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
      }
      p {
        line-height: 0.7rem;
        font-weight: lighter;
      }
    }
  }
  .sec-2 {
    position: relative;
    height: 90vh;
    .bg-cover {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      background: url('https://images.unsplash.com/photo-1508853363419-a9263d752c59?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80') center center no-repeat;
      background-size: cover;
      z-index: 0;
    }
    .sec-text {
      position: relative;
      z-index: 1;
      h4 {
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
      }
      h3 {
        font-size: 2.8rem;
        letter-spacing: 0.2rem;
      }
      p {
        line-height: 0.7rem;
        font-weight: lighter;
        font-size: 1rem;
      }
    }
  }
  .sec-3 {
    background-color: #f2f2f2;
    padding-top: 7rem;
    padding-bottom: 3rem;
    margin-top: 3rem;
    .product-box {
      position: relative;
      .product-parallax {
        height: 120vh;
        .product-text {
          position: relative;
          padding-top: 25rem;
          h4 {
            font-size: 1.2rem;
            letter-spacing: 0.2rem;
          }
          h3 {
            font-size: 2.8rem;
            letter-spacing: 0.2rem;
          }
          p {
            line-height: 0.6rem;
          }
        }
        .product-parallax-img {
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          max-width: 90%;
          min-height: 100%;
        }
      }
    }
  }
  .sec-4 {
    .card {
      border: none;
      border-radius: 0;
      .card-title {
        letter-spacing: 0.2rem;
      }
    }
  }
  .sec-5 {
    background-color: #f2f2f2;
    .circle {
      // width: 15rem;
      // height: 15rem;
      // border-radius: 50%;
      // background-color: white;
      margin: 0 auto;
      div {
        position: relative;
        // transform: translateY(50%);
        img {
          max-width: 80%;
        }
      }
    }
    button {
      width: 40%;
      margin: 0 auto;
      font-size: 1.5rem;
      letter-spacing: 0.2rem;
      border: none;
      outline: none;
      color: white;
      border-radius: 0.2rem;
      background-color: #202020;
      box-shadow: inset 0 0 0 0 #ffa010;
      transition: ease-out 0.4s;
      &:hover {
        box-shadow: inset 40vw 0 0 0 #ffa010;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 992px) {
    .shop-button {
      width: 6rem;
      height: 6rem;
      padding: 0.8rem;
      .link-text {
        font-size: 0.75rem;
        letter-spacing: 0.1rem;
      }
    }
    .scroll {
      .scroll-text {
        bottom: 2.2rem;
        right: 6.4rem;
      }
      .scroll-down-back {
        right: 5.8rem;
        height: 8rem;
        width: 0.08rem;
      }
      .scroll-down {
        right: 5.8rem;
        height: 8rem;
        width: 0.15rem;
      }
    }
    .sec-1 {
      .sec1-text {
        bottom: 3rem;
        left: 6rem;
      }
    }
    .sec-2 {
      .sec-text {
        h4 {
          font-size: 1rem;
          letter-spacing: 0.1rem;
        }
        h3 {
          font-size: 2.4rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .scroll {
      .scroll-down-back-2 {
        top: 6rem;
        left: 1rem;
        height: 9rem;
      }
      .scroll-down-2 {
        top: 6rem;
        left: 1rem;
        height: 9rem;
        width: 0.22rem;
      }
    }
    .sec-2 {
      height: 120vh;
      .box {
        position: relative;
        display: block;
        left: 1rem;
        width: 90%;
        height: 90%;
        background-color: #f2f2f2;
      }
      .bg-cover {
        left: 1rem;
        top: 0;
        width: 80vw;
        height: 60%;
        z-index: 2;
      }
      .sec-text {
        position: absolute;
        right: 1rem;
        bottom: 0;
        max-width: 80vw;
        background-color: white;
        z-index: 3;
        h3 {
          font-size: 2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
    .sec-3 {
      padding-top: 7rem;
      padding-bottom: 3rem;
      margin-top: 3rem;
      .product-box {
        .product-parallax {
          height: 100vh;
          .product-text {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 90%;
            height: 45vh;
            background-color: white;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 5rem;
            z-index: 15;
            h4 {
              font-size: 1rem;
              letter-spacing: 0.1rem;
            }
            h3 {
              font-size: 2rem;
              letter-spacing: 0.1rem;
            }
            p {
              line-height: 0.6rem;
              font-size: 0.6rem;
            }
          }
          .product-parallax-img {
            background-attachment: scroll;
            max-width: 100%;
            min-height: 60%;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .shop-button {
      width: 5rem;
      height: 5rem;
      padding: 0.3rem;
      .fa-shopping-cart {
        font-size: 1.2rem;
      }
      .link-text {
        font-size: 0.3rem;
        letter-spacing: 0.05rem;
      }
    }
    .scroll {
      .scroll-text {
        font-size: 0.3rem;
        bottom: 4.8rem;
        right: 3.6rem;
      }
      .scroll-down-back {
        right: 3rem;
        height: 6rem;
        bottom: 5rem;
        width: 0.08rem;
      }
      .scroll-down {
        right: 3rem;
        height: 6rem;
        bottom: 5rem;
        width: 0.15rem;
      }
      .scroll-down-2, .scroll-down-back-2 {
        display: none;
      }
    }
    .sec-1 {
      .parallax-img {
        background-position: center center;
        min-height: 55vh;
      }
      .sec1-text {
        position: relative;
        bottom: 1rem;
        left: 0;
        width: 100%;
        height: 35vh;
        color: gray;
        background-color: transparent;
        h2 {
          margin-top: 2.5rem;
          font-size: 2rem;
          letter-spacing: 0.6rem;
        }
        h4 {
          font-size: 1.8rem;
          letter-spacing: 0.2rem;
        }
        .more-text {
          display: none;
        }
      }
    }
    .sec-3 {
      .product-box {
        .product-parallax {
          height: 90vh;
          .product-text {
            padding-top: 2.4rem;
            padding-left: 2.4rem;
          }
          .product-parallax-img {
            max-width: 90%;
          }
        }
      }
    }
    .sec-5 {
      button {
        width: 60%;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        border-radius: 0.1rem;
        &:hover {
          box-shadow: inset 60vw 0 0 0 #ffa010;
      }
      }
    }
  }
  @media (max-width: 414px) {
    .scroll {
      display: none;
    }
    .sec-2 {
      .sec-text {
        h4 {
          font-size: 1rem;
        }
        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .shop-button {
      .fa-shopping-cart {
        margin-top: 0.8rem;
        font-size: 1rem;
      }
      .link-text {
        letter-spacing: 0;
      }
    }
    .sec-2 {
      .sec-text {
        h4 {
          font-size: 0.8rem;
        }
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.6rem;
        }
      }
    }
    .sec-3 {
      .product-box {
        .product-parallax {
          height: 90vh;
          .product-text {
            height: 50vh;
          }
        }
      }
    }
    .sec-5 {
      .circle {
        width: 12rem;
        height: 12rem;
      }
      button {
        width: 85%;
        &:hover {
          box-shadow: inset 85vw 0 0 0 #ffa010;
        }
      }
    }
  }
</style>
