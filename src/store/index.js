import Vue from 'vue';
import Vuex from 'vuex';
import adminUserAPI from '../apis/admin/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminLogin: false,
    token: '',
    wishList: JSON.parse(localStorage.getItem('demo_product_austin_wishlist')) ? JSON.parse(localStorage.getItem('demo_product_austin_wishlist')) : [],
    cartItems: JSON.parse(localStorage.getItem('demo_product_austin_cart')) ? JSON.parse(localStorage.getItem('demo_product_austin_cart')) : [],
  },
  mutations: {
    setAminLogin(state) {
      state.adminLogin = true;
      state.token = localStorage.getItem('demo_product_austin_token');
    },
    logout(state) {
      state.adminLogin = false;
      state.token = '';
      localStorage.removeItem('demo_product_austin_token');
    },
    setWishList(state, payload) {
      const wish = JSON.parse(localStorage.getItem('demo_product_austin_wishlist'));
      if (wish) {
        const wishId = wish.map((product) => product.id);
        if (wishId.includes(payload.id)) {
          const temp = [];
          wish.forEach((product) => {
            if (product.id !== payload.id) {
              temp.push(product);
            }
          });
          localStorage.setItem('demo_product_austin_wishlist', JSON.stringify(temp));
          state.wishList = JSON.parse(localStorage.getItem('demo_product_austin_wishlist'));
        } else {
          wish.push(payload);
          localStorage.setItem('demo_product_austin_wishlist', JSON.stringify(wish));
          state.wishList = JSON.parse(localStorage.getItem('demo_product_austin_wishlist'));
        }
      } else {
        const temp = [];
        temp.push(payload);
        localStorage.setItem('demo_product_austin_wishlist', JSON.stringify(temp));
        state.wishList = JSON.parse(localStorage.getItem('demo_product_austin_wishlist'));
      }
    },
    setCartItems(state, payload) {
      const cartItems = JSON.parse(localStorage.getItem('demo_product_austin_cart'));
      if (cartItems) {
        cartItems.push(payload);
        localStorage.setItem('demo_product_austin_cart', JSON.stringify(cartItems));
        state.cartItems = JSON.parse(localStorage.getItem('demo_product_austin_cart'));
      } else {
        const temp = [];
        temp.push(payload);
        localStorage.setItem('demo_product_austin_cart', JSON.stringify(temp));
        state.cartItems = JSON.parse(localStorage.getItem('demo_product_austin_cart'));
      }
    },
    deleteCartItem(state, payload) {
      const cartItems = JSON.parse(localStorage.getItem('demo_product_austin_cart'));
      const temp = [];
      cartItems.forEach((item) => {
        if (item.product.id !== payload) {
          temp.push(item);
        }
      });
      localStorage.setItem('demo_product_austin_cart', JSON.stringify(temp));
      state.cartItems = JSON.parse(localStorage.getItem('demo_product_austin_cart'));
    },
    deleteAllCartItems(state) {
      localStorage.removeItem('demo_product_austin_cart');
      state.cartItems = [];
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      const { data, statusText } = await adminUserAPI.getCurrentUser();
      if (data.status === 'success' && statusText === 'OK') {
        commit({ type: 'setAminLogin' });
      } else {
        commit({ type: 'logout' });
      }
    },
  },
});
