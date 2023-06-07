import React, { FC, useEffect, useState } from 'react';
import { product } from '../services/api.products';
import { Product } from '~/types/product';

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    product()
    .then(data => {
      setProducts(data);
      setProductsFiltered(data.slice(0, 16));
    })
    .catch(error => {
      console.log(error);
    });

  },[]);

  return { products, productsFiltered, setProductsFiltered };
}

export default useProduct;
