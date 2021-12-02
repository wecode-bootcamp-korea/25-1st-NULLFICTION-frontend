const BASE_URL = 'http://172.30.1.25:8000';

export const API = id => ({
  products: `${BASE_URL}/products`,
  cart: `${BASE_URL}/cart`,
  controlCart: `${BASE_URL}/cart?id=${id}`,
});

export const userToken = localStorage.getItem('Authorization');
