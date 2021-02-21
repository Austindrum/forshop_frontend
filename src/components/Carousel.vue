<template>
  <div>
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(product, index) in silders" :key="index"
        class="carousel-item"
        :class="{'active' : index === 0}">
          <div class="carousel-control">
            <div class="bg-cover">
              <img :src="product.products[0].image1" alt="">
            </div>
            <div class="text-left">
              <h2 class="letter-spacing">{{ product.title }}</h2>
              <div class="category-intro">
                <p class="mb-3">{{ product.products[0].description }}</p>
              </div>
              <button
              type="button"
              class="btn btn-outline-dark btn-block"
              @click="switchPath(product.id)">see more</button>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import productsAPI from '../apis/product';

export default {
  data() {
    return {
      silders: [],
    };
  },
  methods: {
    async getProducts() {
      const { data, statusText } = await productsAPI.getProducts();
      if (data.status === 'success' && statusText === 'OK') {
        const tempData = data.categories.map((category) => {
          const temp = {
            id: category.id,
            title: category.title,
            products: [],
          };
          const cateProd = data.products.filter((product) => product.category[0].id === temp.id);
          temp.products = cateProd.filter((product) => product.enabled);
          return temp;
        });
        const productFilter = tempData.filter((temp) => temp.products.length > 0);
        this.silders = productFilter;
      }
    },
    switchPath(option) {
      this.$router.push({
        name: 'Products',
        params: { category: option },
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.carousel-control {
  display: flex;
  .bg-cover {
    width: 55%;
    position: relative;
    background-size: cover;
    background-position: center center;
    height: 360px;
    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
  .text-left {
    width: 45%;
    padding: 10px;
    .letter-spacing {
      height: 20%;
      font-weight: 800;
    }
    .category-intro {
      // position: absolute;
      // top: 10rem;
      // left: 55%;
      height: 65%;
      overflow: hidden;
    }
    .btn {
      height: 15%;
    }
  }
}
.letter-spacing {
  opacity: 0.8;
  font-weight: 100;
  font-size: 3.2rem;
  letter-spacing: 0.35rem;
}
@media (max-width: 768px) {
  .carousel-control {
    display: block;
    .bg-cover {
      width: 100%;
      position: center center;
      margin-bottom: 1rem;
    }
    h2, .category-intro {
      position: relative;
      top: 0;
      left: 0;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
    }
  }
}
@media (max-width: 576px) {
  .carousel-control {
    .text-left {
      width: 100%;
      height: 300px;
      .letter-spacing {
        opacity: 0.8;
        font-weight: 100;
        font-size: 2.5rem;
        letter-spacing: 0.3rem;
      }
    }
  }
}
</style>
