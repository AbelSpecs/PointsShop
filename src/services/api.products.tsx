import { Product } from "~/types/product";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc2NWNhMmUzODFmYzAwMjE5M2U5YmQiLCJpYXQiOjE2ODU0Nzg1NjJ9.0wHJfup1cE28Zl6VT9RFrN-tfRBHHkD49w5tmChKZyU';

const fetchProducts = async (): Promise<Product[]> => {
  const apiUrl = 'https://coding-challenge-api.aerolab.co/products';
  try {
    let response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    return await response.json();
  } catch (error: any) {
    throw new Error(error)
  }
}

const product = async(): Promise<Product[]> => {
  return await fetchProducts();
}

export { product };
