import React, { FC, useEffect, useState } from 'react';
import AeroNavbar from "../aero-navbar/aero-navbar";
import styles from './dock.module.css';
import { DockWrapper } from './dock.styled';
import Header from '../header/header';
import { Grid } from '@nextui-org/react';
import AeroCard from '../aero-card/aero-card';
import Filter from '../filter/filter';
import useUser from '~/hooks/useUser';
import useProduct from '~/hooks/useProduct';
import Cart from '../cart/cart';
import useTranslation from '~/hooks/useTranslation';
import { Product } from '~/types/product';
import { User } from '~/types/user';


interface DockProps {}

const Dock: FC<DockProps> = () => {
  const { products, setProducts, productsFiltered, setProductsFiltered, quantity, actualProducts, setActualProducts, productsCopy } = useProduct();
  const { x, y, rotate, setX, setY, yPoint } = useTranslation();
  const { userData, setUserData } = useUser();
  const [hideCart, setHideCart] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const yHidePoint = yPoint;
  const yShowPoint = 1;

  const handlePage = (next: boolean): void => {
    next ? setActualProducts(prev => prev + quantity) : setActualProducts(prev => prev - quantity);
    const firstElement = productsFiltered.at(0);
    const lastElement = productsFiltered.at(productsFiltered.length - 1);
    const productFirstIndex = products.findIndex(p => p._id === firstElement?._id);
    const productLastIndex = products.findIndex(p => p._id === lastElement?._id) + 1;
    let firstIndex = next ? productFirstIndex + quantity : productFirstIndex - quantity;
    let lastIndex = next ? productLastIndex + quantity : productLastIndex - quantity;

    setProductsFiltered(products.slice(firstIndex, lastIndex));
  }

  const handleHideRightArrow = (): boolean => {
    const lastElement = productsFiltered.at(productsFiltered.length - 1);
    const product = products.at(products.length - 1);
    const hide = product?._id === lastElement?._id ? true : false;
    return hide;
  }

  const handleHideLeftArrow = (): boolean => {
    const firstElement = productsFiltered.at(0);
    const product = products.at(0);
    const hide = product?._id === firstElement?._id ? true : false;
    return hide;
  }

  const handleLowestPriceFiltering = (): void => {
    const updatedProducts = [...products];
    updatedProducts.sort((a, b) => a.cost - b.cost);
    setProducts(updatedProducts);
    setProductsFiltered(updatedProducts.slice(0, quantity));
    setActualProducts(quantity);
  }

  const handleHighestPriceFiltering = (): void => {
    const updatedProducts = [...products];
    updatedProducts.sort((a, b) => b.cost - a.cost);
    setProducts(updatedProducts);
    setProductsFiltered(updatedProducts.slice(0, quantity));
    setActualProducts(quantity);
  }

  const handleNormalPriceFiltering = (): void => {
    setProducts(productsCopy);
    setProductsFiltered(productsCopy.slice(0, quantity));
    setActualProducts(quantity);
  }

  const handleToggleCart = (): void => {
    hideCart ? setY(yHidePoint) : setY(yShowPoint);
    setHideCart(prev => !prev);
  }

  const handleAddCart = (product: Product): void => {
    const newPoints = userData?.points! - product.cost;
    const newUserData: User = {
      _id: userData?._id!,
      name: userData?.name!,
      points: newPoints,
      createDate: userData?.createDate!,
      redeemHistory: userData?.redeemHistory!,
      __v: userData?.__v!
    }

    setUserData(newUserData);
    const updatedCart = [...cartProducts];
    updatedCart.push(product);
    setCartProducts(updatedCart);
  }

  return (
    <DockWrapper data-testid="Dock">
      <AeroNavbar userData={userData} handleToggleCart={handleToggleCart}/>
      <Cart x={x}
            y={y}
            rotate={rotate}
            setX={setX}
            setY={setY}
            cartProducts={cartProducts}
            />
      <Header/>
      <Grid.Container gap={2} justify="center" className= {styles.gridContainer}>
      <Filter handlePage={handlePage}
              handleHideRightArrow={handleHideRightArrow}
              handleHideLeftArrow={handleHideLeftArrow}
              maxProducts={products.length}
              actualProducts={actualProducts}
              handleLowestPriceFiltering={handleLowestPriceFiltering}
              handleHighestPriceFiltering={handleHighestPriceFiltering}
              handleNormalPriceFiltering={handleNormalPriceFiltering}
              >
      </Filter>
        {
          productsFiltered?.map((product, i) => {
            return (
              <Grid xs={12} sm={4} md={3} lg={3} xl={3} key={i} justify='center' className={styles.grid}>
                <AeroCard
                  product={product}
                  handleAddCart={handleAddCart}
                  userData={userData}
                  />
              </Grid>
            )
          })
        }
      </Grid.Container>
    </DockWrapper>
  );
}





export default Dock;
