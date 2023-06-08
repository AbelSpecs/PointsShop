import React, { FC } from 'react';
import styles from './filter.module.css';
import { FilterWrapper } from './filter.styled';
import { Button, Card, Image, Text, Grid, PressEvent } from "@nextui-org/react";
import arowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';


interface FilterProps {
  handlePage: any,
  handleHideRightArrow: () => boolean,
  handleHideLeftArrow: () => boolean,
  maxProducts: number,
  actualProducts: number,
  handleLowestPriceFiltering: any
}

const Filter: FC<FilterProps> = ({handlePage, handleHideRightArrow, handleHideLeftArrow, maxProducts, actualProducts, handleLowestPriceFiltering}) => {
  const hideLeftArrow = handleHideLeftArrow();
  const hideRightArrow = handleHideRightArrow();

  const PriceFilter = (event: React.MouseEvent<HTMLElement>): void => {
    console.log(event);
    const value = event.target as HTMLElement;
    console.log(document.querySelector('button#highestPrice'));
    value.style.background = '#55cce3';
    value.style.color = 'white';
  }

  return (
    <FilterWrapper data-testid="Filter">
      <Card variant='flat' className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <Text weight='medium' color='gray'>{actualProducts} of {maxProducts} products</Text>
          <Card.Divider className={styles.cardDivider}/>
          <Text weight='medium' color='rgb(172 170 170)' style={{marginRight: '20px'}}>Sort by:</Text>
          <Button auto rounded flat className={styles.cardButton}>
            Most Recent
          </Button>
          <Button id='lowestPrice' auto rounded flat className={styles.cardButton} onClick={PriceFilter}>
            Lowest Price
          </Button>
          <Button id='highestPrice' auto rounded flat className={styles.cardButton} onClick={PriceFilter}>
            Highest Price
          </Button>
          {
            !hideLeftArrow &&
            <Image src={arrowLeft} css={{cursor: 'pointer'}}
                    containerCss={{
                      width: '40px',
                      margin: 0,
                      position: 'absolute',
                      right: '60px',
                      bottom: '135px',
                      '@sm': {
                        bottom: 'unset'
                      }
                    }}
                    onClick={() => {handlePage(false);}}
                    />
          }
          {
            !hideRightArrow &&
            <Image src={arowRight} css={{cursor: 'pointer'}}
                    containerCss={{
                      width: '40px',
                      margin: 0,
                      position: 'absolute',
                      right: '10px',
                      bottom: '135px',
                      '@sm' : {
                        bottom: 'unset'
                      }
                    }}
                    onClick={() => {handlePage(true);}}
                    />
          }
        </Card.Body>
        <Card.Divider className={styles.bottomDivider}/>
      </Card>
    </FilterWrapper>
  );
};






export default Filter;
