import apiHelper from '../utils/helpers';

export default {
  getCategorys() {
    return apiHelper.get('/categoryies');
  },
  getCategory(categoryId) {
    return apiHelper.get(`/category/${categoryId}`);
  },
  getCategoryProducts(categoryId) {
    return apiHelper.get(`/category/${categoryId}/products`);
  },
  getSubCategory(ids) {
    return apiHelper.get(`/category/${ids.category}/subcategory/${ids.subCategory}/products`);
  },
  getSubCategoryProducts(id) {
    return apiHelper.get(`/subcategory/${id}/products`);
  },
  getProducts() {
    return apiHelper.get('/products');
  },
  getProduct(id) {
    return apiHelper.get(`/product/${id}`);
  },
  postOrder(data) {
    return apiHelper.post('/order', data);
  },
  getOrder(id) {
    return apiHelper.get(`/order/${id}`);
  },
};
