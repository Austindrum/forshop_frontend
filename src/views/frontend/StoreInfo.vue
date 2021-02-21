<template>
  <div class="top-margin">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="$router.push('/shop/home')">首頁</a>
        </li>
        <li class="breadcrumb-item active">實體店資訊</li>
      </ol>
    </nav>
    <div class="jumbotron jumbotron-fluid bg-img my-5"></div>
    <div class="container column-content text-left">
      <div class="row mb-4" v-for="(store, index) in stores" :key="index">
        <div class="col-md-6">
          <img class="img-fluid" :src="store.img" :alt="store.name + 'store image'">
        </div>
        <div class="col-md-6">
          <div class="mb-5">
            <div class="mt-3 mb-2">
              <span></span>
              <h3 class="h5 ml-3">{{ store.name }}</h3>
            </div>
            <ul class="info-style px-0">
              <li>地址：{{ store.address }}</li>
              <li>營業時間：{{ `每日${store.open_time} : 00 ~ ${store.close_time} : 00` }}</li>
              <li>公休時間：{{ store.close }}</li>
              <li>聯絡方式：{{ store.tel }}</li>
            </ul>
            <div class="text-left">
              <a :href="store.location_link" target="_blank">> 地圖連結</a>
            </div>
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
      stores: [
        {
          name: '台北松菸店',
          img: 'https://images.unsplash.com/photo-1477901492169-d59e6428fc90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          location_link: 'https://goo.gl/maps/nrSs7pBZg9cZrYCd8',
          address: '台北市信義區光復南路133號',
          open_time: 9,
          close_time: 22,
          close: '每周一公休',
          tel: '0900-010020',
        },
        {
          name: '台中復興店',
          img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          location_link: 'https://goo.gl/maps/i71MWoi3w4KW9Rod7',
          address: '台中市南區復興路三段362號',
          open_time: 11,
          close_time: 21,
          close: '每周一公休',
          tel: '0900-110220',
        },
        {
          name: '高雄駁二店',
          img: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          location_link: 'https://goo.gl/maps/Y4tktAZd14A2DDHp8',
          address: '高雄市鹽埕區大勇路1號',
          open_time: 11,
          close_time: 21,
          close: '每周三公休',
          tel: '0900-111222',
        },
        {
          name: '花蓮洄瀾店',
          img: 'https://images.unsplash.com/photo-1545007805-a44ee83438fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          location_link: 'https://goo.gl/maps/E2M3ddWx7LGGQMN66',
          address: '花蓮縣花蓮市中山路71號',
          open_time: 11,
          close_time: 20,
          close: '每周三公休',
          tel: '0900-011022',
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
    background-image: url("https://images.unsplash.com/photo-1524275461690-a79bfeaf1f3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
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
    ul {
      list-style: none;
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
