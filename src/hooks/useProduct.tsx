import React, { FC, useEffect, useState } from 'react';
import { product } from '../services/api.products';
import { Product } from '~/types/product';

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCopy, setProductsCopy] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(16);
  const [actualProducts, setActualProducts] = useState(quantity);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    product()
    .then(data => {
      setProducts(data);
      setProductsCopy(data);
      setProductsFiltered(data.slice(0, quantity));
    })
    .catch(error => {
      console.log(error);
    });

  },[]);

  return { products, setProducts, productsFiltered, setProductsFiltered, quantity, actualProducts, setActualProducts, productsCopy };
}

export default useProduct;
