<template>
  <div class="container storages mb-5">
    <Loading :active.sync="isLoading" />
    <div class="text-left p-2 mb-3">
      <span>> 如需刪除圖片，請點選圖片，並按下頁面下方的按鈕</span>
    </div>
    <div class="row mb-3">
      <div class="col-md-2 p-2 " v-for="(picture, index) in storages" :key="index">
        <img
         :src="picture.path"
         :alt="'image' + index"
         class="rounded img-fluid"
         :class="{'forDelete': picture.forDelete === true}"
         @click="addToTempData(picture)">
      </div>
    </div>
    <button type="button" class="btn btn-block btn-outline-dark" @click="openModal">
      刪除點選的資料
    </button>

    <Pagination :pages="pagination" @emitPages="getData" />
    <div
      id="deleteModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除資料</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-if="tempData.length === 0" class="modal-body">目前未選擇任何資料！</div>
          <div v-else class="modal-body mb-3">是否刪除以下資料 (刪除後將無法恢復)。</div>
          <div class="container">
            <div class="row mb-3 justify-content-center">
              <div class="col-md-4 p-2" v-for="(temp, index) in tempData" :key="index">
                <img :src="temp.path" :alt="'delete' + index" class="rounded img-fluid">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="cancelDelete">取消</button>
            <button
              v-if="tempData.length !== 0"
              type="button"
              class="btn btn-danger"
              @click="deleteData">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      storages: [],
      tempData: [],
      pagination: {},
      isLoading: false,
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?paged=24&page=${page}`;
      this.$http.get(api)
        .then((res) => {
          this.storages = res.data.data;
          this.storages.forEach((storage) => {
            // 設定forDelete屬性，以便之後判定是否需刪除
            this.$set(storage, 'forDelete', false);
          });
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '無法取得圖片列表，請嘗試重整頁面。',
          });
        });
    },
    addToTempData(item) {
      // 如果需要刪除，將forDelete屬性設為true，再點選一次可取消(重設為false)
      this.$set(item, 'forDelete', !item.forDelete);
    },
    openModal() {
      this.isLoading = true;
      this.storages.forEach((storage) => {
        if (storage.forDelete === true) {
          this.tempData.push(storage);
        }
      });
      $('#deleteModal').modal('show');
      this.isLoading = false;
    },
    cancelDelete() {
      this.isLoading = true;
      this.tempData = [];
      $('#deleteModal').modal('hide');
      this.isLoading = false;
    },
    deleteData() {
      this.isLoading = true;
      this.tempData.forEach((temp) => {
        const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${temp.id}`;
        this.$http.delete(api)
          .then(() => {
            this.tempData = [];
            $('#deleteModal').modal('hide');
            this.getData();
            this.isLoading = false;
            this.$swal({
              icon: 'success',
              title: '刪除成功！',
            });
          })
          .catch(() => {
            this.isLoading = false;
            this.$swal({
              icon: 'error',
              title: '刪除發生錯誤，請再試一次！',
            });
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .storages {
    span {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
    }
    img {
      &:hover {
        opacity: 0.75;
        cursor: pointer;
      }
    }
    button {
      width: 50%;
      margin: 0 auto;
      letter-spacing: 0.2rem;
    }
    .forDelete {
      opacity: 0.45;
      border: 2px solid #ffa010;
      cursor: pointer;
    }
  }
</style>
