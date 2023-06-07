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


interface DockProps {}

const Dock: FC<DockProps> = () => {
  const { products, productsFiltered, setProductsFiltered } = useProduct();
  const { userData } = useUser();

  const handlePage = (): void => {
    setProductsFiltered(products.slice(16, 32));
  }

  return (
    <DockWrapper data-testid="Dock">
      <AeroNavbar userData={userData}/>
      <Header/>
      <Grid.Container gap={2} justify="center" className= {styles.gridContainer}>
      <Filter handlePage={handlePage}></Filter>
        {
          productsFiltered?.map((product, i) => {
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
