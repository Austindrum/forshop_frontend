import axios from 'axios';

const baseURL = 'https://murmuring-headland-35646.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL,
});

const apiHelper = axiosInstance;

export default apiHelper;
