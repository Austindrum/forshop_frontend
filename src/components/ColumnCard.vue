<template>
  <div class="row">
    <div class="col-md-4" v-for="(column) in columnsData" :key="column.id">
      <div class="card">
        <div class="inner">
          <a href="#" @click.prevent="getColumn(column.id)">
            <img :src="column.img" class="card-img-top" :alt="column.id" />
          </a>
        </div>
        <div class="card-body text-left px-0">
          <div class="card-title">
            <h3 class="text-muted">{{ column.title }}</h3>
          </div>
          <div class="card-text text-left h5">
            <p class="text-muted">{{ column.time }}</p>
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
      columnsData: [
        {
          id: 'second-hand-clothes-recycle',
          title: '【苗栗首間】日本快時尚眼鏡品牌JINS進駐！',
          time: '2021/02/05',
          img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2-2021-02-05-113833-1612496451.jpg?resize=768:*',
        },
        {
          id: 'fashion-problem',
          title: '2021新年返鄉怎麼打包？超實用輕旅行「行李收納術」衣服這樣摺最省空間！',
          time: '2021/02/03',
          img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fotojet-3-1612347661.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
        },
        {
          id: 'Shimokitazawa',
          title: '下北澤攻略！日本古著聖地',
          time: '2020/06/09',
          img: 'https://images.unsplash.com/photo-1504583557080-9d04d0ba1304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
      ],
    };
  },
  methods: {
    getColumn(columnId) {
      this.$router.push({
        name: 'Column',
        params: { id: columnId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border: none;
  }
  .inner {
    overflow: hidden;
    position: relative;
    height: 160px;
    img {
      transition: all 1s ease;
      height: 100%;
    }
    &:hover {
      img {
        transform: scale(1.08);
        opacity: 0.6;
      }
    }
  }
  h3 {
    font-size: 1rem;
    font-weight: bolder;
  }
  p {
    font-size: 0.6rem;
    letter-spacing: 0.2rem;
  }
</style>
