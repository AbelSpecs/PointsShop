import React, { FC, useEffect, useState } from 'react';
import styles from './dock.module.css';
import { DockWrapper } from './dock.styled';
import Header from '../header/header';
import { Grid, Card } from '@nextui-org/react';
import AeroCard from '../aero-card/aero-card';
import { Product } from '~/types/product';
import apiProducts from '~/services/api.products';
import Filter from '../filter/filter';


interface DockProps {}

const Dock: FC<DockProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    apiProducts.products.list()
    .then(data => {
      setProducts(data);
    })
    .catch(error => {
      console.log(error);
    });

  },[]);

  return (
    <DockWrapper data-testid="Dock">
      <Header/>
      <Grid.Container gap={2} justify="center" className= {styles.gridContainer}>
      <Filter></Filter>
        {
          products?.map((product, i) => {
            return (
              <Grid xs={12} sm={4} md={3} lg={3} xl={3} key={i} justify='center' className={styles.grid}>
                <AeroCard product={product} />
              </Grid>
            )
          })
        }
      </Grid.Container>
    </DockWrapper>
  );
}





export default Dock;
