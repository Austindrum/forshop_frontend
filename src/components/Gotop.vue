<template>
  <!-- 此元件是回到最上方的按鈕 -->
  <div class="goTop hide" @click.prevent="goTop">
  <a href="#" class="goTopBtn jq-goTop">
    <i class="fas fa-arrow-alt-circle-up fa-3x"></i>
  </a>
</div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {};
  },
  methods: {
    goTop() {
      $('html, body').animate({ scrollTop: 0 }, 600);
    },
    hideFeature() {
      $(window).scroll(() => {
        if ($(window).scrollTop() > 400) {
          if ($('.goTop').hasClass('hide')) {
            $('.goTop').toggleClass('hide');
          }
        } else {
          $('.goTop').addClass('hide');
        }
      });
    },
  },
  created() {
    this.hideFeature();
  },
};
</script>

<style lang="scss" scoped>
  .goTop {
    position: fixed;
    right: 10px;
    bottom: 10px;
    transform: translateX(0);
    transition: transform 0.2s;
    &.hide {
      transform: translateX(120%);
    }
    .goTopBtn {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      .fa-arrow-alt-circle-up {
        color: #ffa010;
      }
    }
  }
</style>
