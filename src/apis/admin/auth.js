import apiHelper from '../../utils/helpers';

const getToken = () => localStorage.getItem('demo_product_austin_token');

export default {
  signin(data) {
    return apiHelper.post('/login', data);
  },
  getCurrentUser() {
    return apiHelper.get('/get_current_user', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getProducts() {
    return apiHelper.get('/products');
  },
  postProduct(formData) {
    return apiHelper.post('/admin/product', formData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  putProduct(data) {
    return apiHelper.put('/admin/product', data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  deleteProduct(productId) {
    return apiHelper.delete(`/admin/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getCategory(data) {
    return apiHelper.get(`/admin/category/${data}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  putCategory(data) {
    return apiHelper.put('/admin/category', data, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  postCategory(data) {
    return apiHelper.post('/admin/category', data, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getOrders() {
    return apiHelper.get('/admin/orders', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  putOrder(payOrder) {
    return apiHelper.put('/order', payOrder, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
