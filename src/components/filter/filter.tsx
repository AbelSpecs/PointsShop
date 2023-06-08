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
  handleLowestPriceFiltering: any,
  handleHighestPriceFiltering: any
}

const Filter: FC<FilterProps> = ({handlePage, handleHideRightArrow, handleHideLeftArrow, maxProducts, actualProducts, handleLowestPriceFiltering, handleHighestPriceFiltering}) => {
  const hideLeftArrow = handleHideLeftArrow();
  const hideRightArrow = handleHideRightArrow();

  const LowestPriceFilter = (event: React.MouseEvent<HTMLElement>): void => {
    const highestPriceBtn = document.querySelector('button#highestPrice') as HTMLElement;
    const value = event.target as HTMLElement;
    highestPriceBtn.style.background = 'rgb(237 237 237)';
    highestPriceBtn.style.color = 'rgb(172 170 170)';
    value.style.background = '#55cce3';
    value.style.color = 'white';
    handleLowestPriceFiltering();
  }

  const HighestPriceFilter = (event: React.MouseEvent<HTMLElement>): void => {
    const lowestPriceBtn = document.querySelector('button#lowestPrice') as HTMLElement;
    const value = event.target as HTMLElement;
    lowestPriceBtn.style.background = 'rgb(237 237 237)';
    lowestPriceBtn.style.color = 'rgb(172 170 170)';
    value.style.background = '#55cce3';
    value.style.color = 'white';
    handleHighestPriceFiltering();
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
          <Button id='lowestPrice' auto rounded flat className={styles.cardButton} onClick={LowestPriceFilter}>
            Lowest Price
          </Button>
          <Button id='highestPrice' auto rounded flat className={styles.cardButton} onClick={HighestPriceFilter}>
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
