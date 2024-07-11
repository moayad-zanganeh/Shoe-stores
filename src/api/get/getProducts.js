import axios from 'axios';
import { BASE_URL } from '../post/counst';

export const getProducts = async (brand) => {
  if (brand == 'all') {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
    return response.data;
  }
};
export const getSearch = async (name) => {
  const response = await axios.get(`${BASE_URL}/products?q=${name}`);
  console.log(response.data);
  return response.data;
};
export async function getCardProduct() {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;
  // console.log(res.data[0].cart);

  return response;
}
