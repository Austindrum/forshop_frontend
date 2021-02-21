<template>
  <div>
    <div class="bg-img"></div>
    <Loading :active.sync="isLoading" />
    <div class="container">
      <div class="box">
        <form class="mb-3" @submit.prevent="signin">
          <h2 class="mb-3">後台管理系統</h2>
          <div class="form-group">
            <label for="inputEmail" class="sr-only">Email address</label>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                 <div class="input-group-text" id="addon-wrapping">
                  <i class="far fa-envelope"></i>
                </div>
              </div>
              <input
                id="inputEmail"
                v-model="user.email"
                type="email"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
              />
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="inputPassword" class="sr-only">Password</label>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <div class="input-group-text" id="addon-wrapping">
                  <i class="far fa-question-circle"></i>
                </div>
              </div>
              <input
                id="inputPassword"
                v-model="user.password"
                type="password"
                class="form-control"
                placeholder="password"
                required
                autofocus
                autocomplete
              />
            </div>
          </div>
          <div class="pt-4">
            <button
              type="button"
              class="btn btn-outline-secondary w-25 mr-3"
              @click="$router.push('/shop/home')">回前台</button>
            <button
              type="submit"
              class="btn btn-primary text-white w-25">登入</button>
          </div>
          <p class="mt-5 mb-3 text-muted">&copy; vatta 二手風格小舖</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import adminAuthAPI from '../apis/admin/auth';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    async signin() {
      const vm = this;
      vm.isLoading = true;
      try {
        const resData = await adminAuthAPI.signin({
          email: vm.user.email,
          password: vm.user.password,
        });
        const statusCode = resData.data.status.code;
        if (statusCode !== 200) {
          return false;
        }
        localStorage.setItem('demo_product_austin_token', resData.data.token);
        vm.$store.commit({
          type: 'setAminLogin',
        });
      } catch (error) {
        return vm.$router.push('/login');
      }
      this.isLoading = false;
      return vm.$router.push('/admin/products');
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-img {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80');
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  margin: -160px 0 0 -200px;
  padding: 2rem;
  background: rgba(255,255,255,0.85);
  border-radius: 0.5rem;
  .form {
    margin: 0 auto;
    max-width: 300px;
    h2 {
      font-size: 1rem;
      font-weight: bolder;
      letter-spacing: 0.1rem;
    }
  }
}
</style>
