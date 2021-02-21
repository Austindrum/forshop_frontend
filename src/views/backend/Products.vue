<template>
  <div class="container-fluid">
    <Loading :active.sync="isLoading" />
    <div class="row">
      <div class="col-md-3 text-left">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">篩選類別</label>
          </div>
          <select class="custom-select" v-model="categoryFilter">
            <option value="" disabled>請選擇...</option>
            <option value="all">所有類別</option>
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.id"
              >{{ category.title }}</option>
          </select>
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-6 text-right">
        <button
          type="button"
          class="btn btn-outline-success mr-2"
          @click="openCategoryModal(cateIsNew = true, null)">
          建立分類
        </button>
        <button type="button" class="btn btn-outline-dark" @click="openModal('new')">
          建立新產品
        </button>
      </div>
    </div>
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th width="60">項次</th>
          <th width="100">主分類</th>
          <th width="200">次分類</th>
          <th>產品名稱</th>
          <th width="100">庫存</th>
          <th width="120">
            <a href="" @click.prevent="sort_OriginPrice = !sort_OriginPrice">
              原價
              <i class="fas fa-sort"></i>
            </a>
          </th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in pageProducts" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>
            <a href="" @click.prevent="openCategoryModal(cateIsNew = false, item.category[0].id)">
              {{ item.category.length > 0 ? item.category[0].title : '沒有類別' }}
            </a>
          </td>
          <td>{{ item.sub_category.length > 0 ? item.sub_category[0].title : '沒有類別' }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.item_num }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)">編輯</button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Paginate
      :page-count="pageNum"
      :prev-text="'<<'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-text="'>>'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :click-handler="pageCallBack"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :container-class="'pagination'"
    />
    <!-- Create Edit Modal -->
    <div
      id="productModal"
      class="modal fade text-left"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form @submit.stop.prevent="updateProduct">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="exampleModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯 {{ title }} 產品</span>
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4">
                  <div class="custom-file mb-3">
                    <input
                    name="image"
                    class="custom-file-input"
                    id="selectedFile"
                    type="file"
                    ref="file"
                    @change="uploadFile"/>
                    <label class="custom-file-label" for="selectedFile">上傳圖片 (不可超過 2 MB)</label>
                  </div>
                  <div v-for="i in 3" :key="'img_'+ i" class="form-group">
                    <label :for="'img' + i">請輸入圖片網址</label>
                    <input
                    type="text"
                    :id="'img' + i"
                    v-model="imageUrl[i-1]"
                    class="form-control"
                    placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="tempImageUrl" alt="">
                </div>
                <div class="col-sm-8">
                  <div class="form-group">
                    <label for="title">標題</label>
                    <input
                      name="title"
                      id="title"
                      v-model="title"
                      type="text"
                      class="form-control"
                      placeholder="請輸入標題"
                      required
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="category">主分類</label>
                      <select name="category" class="form-control"
                        v-model="selectCategory" required>
                        <option value="none" disabled>請選擇主類別</option>
                        <option
                          v-for="category in categories"
                          :key="category.id" :value="category.id"
                        >
                          {{ category.title }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="subCategory">子分類</label>
                      <select v-if="categorySelected.length < 1" class="form-control">
                        <option>請先選擇主類別</option>
                      </select>
                      <select v-else class="form-control"
                        v-model="selectSubCategory"
                        name="subCategory"
                        required>
                        <option value="none" disabled>請選擇</option>
                        <option
                          v-for="subCategory in categorySelected[0].subCategories"
                          :key="subCategory.id"
                          :value="subCategory.id"
                        >
                          {{ subCategory.title }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="itemNum">庫存</label>
                      <input
                        name="itemNum"
                        id="itemNum"
                        v-model="itemNum"
                        type="text"
                        class="form-control"
                        placeholder="請輸入庫存"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="unit">單位</label>
                      <input
                        id="unit"
                        name="unit"
                        v-model="unit"
                        type="text"
                        class="form-control"
                        placeholder="請輸入單位"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <input
                        id="origin_price"
                        name="origin_price"
                        v-model="origin_price"
                        type="number"
                        class="form-control"
                        placeholder="請輸入原價"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <input
                        id="price"
                        name="price"
                        v-model="price"
                        type="number"
                        class="form-control"
                        placeholder="請輸入售價"
                      />
                    </div>
                  </div>
                  <hr />

                  <!-- <h4>若產品為上衣、外套，請填寫以下規格</h4> -->
                  <p>顏色</p>
                  <div class="form-row">
                    <div class="form-group col-md-2">
                      <input type="color" class="form-control" v-model="itemColor">
                    </div>
                    <div class="form-group col-md-10">
                      <i class="fas fa-plus fa-lg pt-2 mt-1" @click="addColor"></i>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-1 color-picker"
                      v-for="(color, index) in colors" :key="index">
                      <i class="fas fa-times" @click="deleteColor(index)"></i>
                      <span :style="color"></span>
                    </div>
                  </div>
                  <hr />

                  <p>尺吋</p>
                  <div class="form-row">
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="checkbox"
                      name="sizeS" v-model="size.s" id="s">
                      <label class="form-check-label" for="s">
                        S
                      </label>
                    </div>
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="checkbox"
                      name="sizeM" v-model="size.m" id="m">
                      <label class="form-check-label" for="m">
                        M
                      </label>
                    </div>
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="checkbox"
                      name="sizeL" v-model="size.l" id="l">
                      <label class="form-check-label" for="l">
                        L
                      </label>
                    </div>
                    <div class="form-check mr-3">
                      <input class="form-check-input" type="checkbox"
                      name="sizeXL" v-model="size.xl" id="xl">
                      <label class="form-check-label" for="xl">
                        XL
                      </label>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group">
                    <label for="content">產品說明</label>
                    <textarea
                      name="content"
                      id="content"
                      v-model="content"
                      type="text"
                      class="form-control"
                      placeholder="請輸入產品說明"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea
                    name="description"
                    type="text"
                    id="description"
                    class="form-control"
                    v-model="description"
                    placeholder="請輸入產品描述"></textarea>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        name="isEnabled"
                        id="is_enabled"
                        v-model="enabled"
                        class="form-check-input"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button"
                      class="btn btn-outline-secondary"
                      data-dismiss="modal">取消</button>
              <button type="submit" class="btn btn-primary">確認</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Delete Modal -->
    <div
      id="delProductModal"
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
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Category Modal -->
    <div
      id="categoryModal"
      class="modal fade text-left"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span v-if="cateIsNew">新增類別</span>
              <span v-else>更新類別</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">主類別</label>
              <input
                v-model="category.title"
                type="text"
                class="form-control"
                placeholder="請輸入主類別"
                required
              />
            </div>
            <div id="addSubCategory">
              <span class="mr-2">新增次類別</span>
              <i class="fas fa-plus" @click="newSubCategory"></i>
            </div>
            <div v-for="(subCategory, index) in category.subCategories" :key="index" class="row">
              <div class="form-group col-sm-10">
                <input
                  v-model="subCategory.title"
                  type="text"
                  class="form-control"
                  placeholder="次類別"
                  required
                />
              </div>
              <div class="form-group col-sm-2 pl-0 pt-2">
                <i class="fas fa-trash-alt fa-lg" @click="deleteSubCategory(index)"></i>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="updateCategory">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import adminAuthAPI from '../../apis/admin/auth';

export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      currentPage: 1,
      product_id: '',
      products: [],
      pagination: {},
      tempImageUrl: '',
      file: '',
      imageUrl: [],
      title: '',
      categoryFilter: '',
      selectCategory: 'none',
      selectSubCategory: 'none',
      category: {
        id: '',
        title: '',
        subCategories: [],
      },
      categories: [],
      itemNum: 0,
      unit: '',
      origin_price: 0,
      price: 0,
      itemColor: '',
      colors: [],
      size: {
        s: '',
        m: '',
        l: '',
        xl: '',
      },
      content: '',
      description: '',
      enabled: false,
      isNew: false,
      cateIsNew: true,
      isLoading: false,
      sort_OriginPrice: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const vm = this;
      vm.isLoading = true;
      vm.colors = [];
      const { data, statusText } = await adminAuthAPI.getProducts();
      if (data.status !== 'success' && statusText !== 'OK') {
        this.$swal({
          icon: 'error',
          title: '錯誤!請再重新嘗試!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
      vm.products = data.products;
      vm.categories = data.categories;
      vm.isLoading = false;
    },
    async getDetails(id) {
      const vm = this;
      vm.isLoading = true;
      vm.colors = [];
      vm.products.forEach((product) => {
        if (product.id === id) {
          vm.product_id = id;
          vm.tempImageUrl = product.image1;
          vm.imageUrl = [product.image2, product.image3, product.image4];
          vm.title = product.title;
          vm.selectCategory = product.category.length > 0 ? product.category[0].id : [];
          vm.selectSubCategory = product.sub_category.length > 0 ? product.sub_category[0].id : [];
          vm.itemNum = product.item_num;
          vm.unit = product.unit;
          vm.origin_price = product.origin_price;
          vm.price = product.price;
          const tempColors = product.color.split(',');
          tempColors.forEach((color) => {
            vm.colors.push({
              width: '30px',
              height: '30px',
              background: color,
              display: 'block',
            });
          });
          vm.size.s = product.size_s;
          vm.size.m = product.size_m;
          vm.size.l = product.size_l;
          vm.size.xl = product.size_xl;
          vm.content = product.content;
          vm.description = product.description;
          vm.enabled = product.enabled;
        }
      });
      $('#productModal').modal('show');
      vm.isLoading = false;
    },
    // 開啟 Modal 視窗
    openModal(isNew, item) {
      const vm = this;
      switch (isNew) {
        case 'new':
          vm.product_id = '';
          vm.tempImageUrl = [];
          vm.imageUrl = [];
          vm.title = '';
          vm.selectCategory = 'none';
          vm.selectSubCategory = 'none';
          vm.itemNum = 0;
          vm.unit = '';
          vm.origin_price = 0;
          vm.price = 0;
          vm.itemColor = '';
          vm.colors = [];
          vm.size.s = false;
          vm.size.m = false;
          vm.size.l = false;
          vm.size.xl = false;
          vm.content = '';
          vm.description = '';
          vm.enabled = false;
          vm.isNew = true;
          $('#productModal').modal('show');
          break;
        case 'edit':
          vm.isNew = false;
          vm.getDetails(item.id);
          break;
        case 'delete':
          vm.product_id = item.id;
          vm.title = item.title;
          $('#delProductModal').modal('show');
          break;
        default:
          break;
      }
    },
    async openCategoryModal(cateIsNew, categoryId) {
      const vm = this;
      if (cateIsNew) {
        vm.category.id = '';
        vm.category.title = '';
        vm.category.subCategories = [];
      } else {
        const data = await adminAuthAPI.getCategory(categoryId);
        if (data.data.status === 'success' && data.statusText === 'OK') {
          vm.category.id = data.data.category.id;
          vm.category.title = data.data.category.title;
          vm.category.subCategories = data.data.category.SubCategories;
        }
      }
      $('#categoryModal').modal('show');
    },
    async updateProduct(e) {
      const vm = this;
      vm.isLoading = true;
      const form = e.target;
      const formData = new FormData(form);
      // 建立尺寸
      formData.append('product_id', vm.product_id);
      formData.append('sizeS', vm.size.s);
      formData.append('sizeM', vm.size.m);
      formData.append('sizeL', vm.size.l);
      formData.append('sizeXL', vm.size.xl);
      formData.append('isEnable', vm.enabled);
      // 建立圖片連結資料
      const imgs = vm.imageUrl;
      if (imgs.length > 0) {
        imgs.forEach((img, index) => {
          if (img) {
            formData.append(`img${index}`, img);
          }
        });
      }
      // 建立顏色
      const colors = vm.colors.map((color) => color.background);
      formData.append('colors', colors);
      let result;
      if (vm.isNew) {
        result = await adminAuthAPI.postProduct(formData);
      } else {
        result = await adminAuthAPI.putProduct(formData);
      }
      const { data, statusText } = result;
      if (data.status === 'success' && statusText === 'OK') {
        vm.isLoading = false;
        vm.colors = [];
        await vm.getProducts();
        $('#productModal').modal('hide');
        this.$swal({
          icon: 'success',
          title: '商品建立成功！',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        this.isLoading = false;
        $('#productModal').modal('hide');
        this.$swal({
          icon: 'error',
          title: '商品建立失敗！請在建立一次',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    async delProduct() {
      const vm = this;
      vm.isLoading = true;
      const { data, statusText } = await adminAuthAPI.deleteProduct(vm.product_id);
      if (data.status === 'success' && statusText === 'OK') {
        vm.isLoading = false;
        await vm.getProducts();
        $('#delProductModal').modal('hide');
        this.$swal({
          icon: 'success',
          title: '刪除商品成功',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        this.isLoading = false;
        this.$swal({
          icon: 'error',
          title: '刪除失敗，請再試一次！',
        });
      }
    },
    async uploadFile() {
      const vm = this;
      vm.isLoading = true;
      const files = this.$refs.file.files[0];
      vm.file = files;
      const imageURL = window.URL.createObjectURL(files);
      vm.tempImageUrl = imageURL;
      vm.isLoading = false;
    },
    newSubCategory() {
      this.category.subCategories.push({
        title: '',
      });
    },
    deleteSubCategory(index) {
      this.category.subCategories.splice(index, 1);
    },
    addColor() {
      this.colors.push({
        width: '30px',
        height: '30px',
        background: this.itemColor,
        display: 'block',
      });
    },
    deleteColor(index) {
      this.colors.splice(index, 1);
    },
    async updateCategory() {
      const vm = this;
      vm.isLoading = true;
      let result;
      if (vm.cateIsNew) {
        result = await adminAuthAPI.postCategory(vm.category);
      } else {
        result = await adminAuthAPI.putCategory(vm.category);
      }
      const { data, statusText } = result;
      if (data.status !== 'success' && statusText !== 'OK') {
        vm.isLoading = false;
        $('#categoryModal').modal('hide');
        this.$swal({
          icon: 'error',
          title: '錯誤!請再重新嘗試!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
      vm.isLoading = false;
      $('#categoryModal').modal('hide');
      vm.$swal({
        icon: 'success',
        title: '類別編輯成功!',
        showConfirmButton: false,
        timer: 2000,
      });
      vm.getProducts();
    },
    setPageNum() {
      const vm = this;
      let data = vm.products;
      if (vm.categoryFilter && vm.categoryFilter !== 'all') {
        data = data.filter((product) => product.category[0].id === vm.categoryFilter);
      }
      vm.pageNum = Math.ceil(data.length / vm.pageSize);
      data.forEach((product, index) => {
        vm.$set(product, 'page', parseInt(index / vm.pageSize, 10) + 1);
        vm.$set(product, 'num', index + 1);
      });
      return data;
    },
    pageCallBack(num) {
      this.currentPage = num;
    },
  },
  computed: {
    categorySelected() {
      const tempCategory = this.selectCategory;
      const subCategory = this.categories.filter((category) => category.id === tempCategory);
      return subCategory;
    },
    pageProducts() {
      const vm = this;
      let data = vm.setPageNum();
      if (data && data.length > 0) {
        if (vm.sort_OriginPrice) {
          data.sort((a, b) => a.origin_price - b.origin_price);
        } else {
          data.sort((a, b) => b.origin_price - a.origin_price);
        }
        data = data.filter((product) => product.page === vm.currentPage);
        return data;
      }
      return [];
    },
  },
  watch: {
    products() {
      this.setPageNum();
    },
  },
};
</script>
<style lang="scss">
.color-picker {
  position: relative;
  border-radius: 3px;
  max-width: 50px;
  height: 50px;
  padding-top: 20px;
  i {
    position: absolute;
    top: 1px;
    right: 1px;
  }
}
</style>
