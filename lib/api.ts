import axios from '../lib/axios';
import { Product } from '../app/products/type';

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get('/products');
  return response.data;
}

export async function fetchProduct(id: number): Promise<Product> {
  const response = await axios.get(`/products/${id}`);
  return response.data;
}
