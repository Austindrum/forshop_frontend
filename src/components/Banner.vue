<template>
  <div>
    <div id="carouselControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item bg-cover active">
          <img src="../../public/images/banner1.jpg" alt="">
        </div>
        <div class="carousel-item bg-cover">
          <img src="../../public/images/banner2.jpg" alt="">
        </div>
        <div class="carousel-item bg-cover">
          <img src="../../public/images/banner3.jpg" alt="">
        </div>
        <div class="carousel-item bg-cover">
          <img src="../../public/images/banner4.jpg" alt="">
        </div>
        <div class="carousel-item bg-cover">
          <img src="../../public/images/banner5.jpg" alt="">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
  .bg-cover {
    // height: 80vh;
    // max-height: 409px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    img {
      width: 100%;
    }
  }
  .text1 {
    position: absolute;
    top: 12rem;
    left: 6rem;
    width: 40%;
    h5 {
      font-size: 2rem;
      letter-spacing: 0.2rem;
    }
    p {
      font-size: 0.8rem;
      letter-spacing: 0.2rem;
      padding-left: 0.4rem;
    }
  }
  .text2 {
    color: lightgray;
    position: absolute;
    bottom: 2rem;
    right: 3rem;
    width: 6rem;
    h5 {
      font-size: 1rem;
      margin-bottom: 1rem;
      letter-spacing: 0.3rem;
    }
    p {
      font-size: 0.6rem;
      line-height: 0.5rem;
      letter-spacing: 0.25rem;
    }
  }
  .text3 {
    position: absolute;
    top: 8rem;
    left: 9rem;
    width: 62%;
    h5 {
      font-size: 2rem;
      letter-spacing: 0.2rem;
    }
    p {
      font-size: 0.8rem;
      letter-spacing: 0.25rem;
      padding-left: 0.4rem;
    }
  }
  .text4 {
    position: absolute;
    top: 12rem;
    left: 8rem;
    width: 30%;
    h5 {
      font-size: 2rem;
      letter-spacing: 0.2rem;
    }
    p {
      font-size: 0.8rem;
      letter-spacing: 0.25rem;
      padding-left: 0.4rem;
    }
  }
  @media (max-width: 1024px) {
    .text1 {
      top: 7rem;
      left: 5rem;
    }
    .text3 {
      left: 5.5rem;
      width: 70%;
    }
  }
  @media (max-width: 576px) {
    .text1 {
      top: 6rem;
      left: 4rem;
      width: 50%;
      h5 {
        font-size: 1.6rem;
      }
      p {
        font-size: 0.6rem;
      }
    }
    .text3 {
      top: 9rem;
      left: 3.2rem;
      width: 78%;
      h5 {
        font-size: 1.6rem;
      }
      p {
        font-size: 0.6rem;
        padding-left: 0.3rem;
      }
    }
    .text4 {
      left: 5rem;
      width: 50%;
      h5 {
        font-size: 1.6rem;
      }
      p {
        font-size: 0.6rem;
        letter-spacing: 0.2rem;
        padding-left: 0.3rem;
      }
    }
  }
  @media (max-width: 414px) {
    .text1 {
      top: 5.5rem;
      left: 3.6rem;
      width: 70%;
    }
    .text2 {
      bottom: 2rem;
      right: 1rem;
      h5 {
        margin-bottom: 0.8rem;
        letter-spacing: 0.2rem;
      }
      p {
        font-size: 0.6rem;
        line-height: 0.3rem;
        letter-spacing: 0.1rem;
      }
    }
    .text3 {
      top: 6rem;
      left: 1.2rem;
      width: 90%;
    }
    .text4 {
      left: 4rem;
      width: 70%;
    }
  }
  @media (max-width: 360px) {
    .text1 {
      top: 6rem;
      left: 3rem;
      width: 90%;
    }
    .text2 {
      bottom: 1.5rem;
      right: 0.8rem;
      opacity: 0.5;
      p {
        font-size: 0.6rem;
        line-height: 0.1rem;
        letter-spacing: 0.1rem;
      }
    }
    .text3 {
      top: 10rem;
      left: 2.3rem;
      width: 88%;
      .more-text {
        display: none;
      }
    }
    .text4 {
      left: 3.5rem;
    }
  }
  @media (max-width: 320px) {
    .text3 {
      top: 5rem;
      left: 1rem;
      width: 90%;
    }
    .text4 {
      top: 10rem;
      left: 3.5rem;
    }
  }
  @media (max-width: 280px) {
    .text1 {
      left: 2.8rem;
      h5 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.4rem;
      }
    }
    .text2 {
      bottom: 1rem;
      right: 0.5rem;
      opacity: 0.5;
    }
    .text3 {
      top: 6rem;
      left: 1.5rem;
      h5 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.4rem;
      }
    }
    .text4 {
      left: 3.5rem;
      h5 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.4rem;
      }
    }
  }
</style>
