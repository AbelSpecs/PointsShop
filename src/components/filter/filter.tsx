import React, { FC, useCallback, useRef, useState } from 'react';
import styles from './filter.module.css';
import { FilterWrapper } from './filter.styled';
import { Button, Card, Image, Text } from "@nextui-org/react";
import arowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';


interface FilterProps {
  handlePage: any,
  maxProducts: number,
  actualProducts: number,
  handleHideRightArrow: () => boolean,
  handleHideLeftArrow: () => boolean,
  handleLowestPriceFiltering: () => void,
  handleHighestPriceFiltering: () => void,
  handleNormalPriceFiltering: () => void
}

const Filter: FC<FilterProps> = ({handlePage, handleHideRightArrow, handleHideLeftArrow, maxProducts, actualProducts, handleLowestPriceFiltering, handleHighestPriceFiltering, handleNormalPriceFiltering}: FilterProps) => {
  const highestPriceBtnRef = useRef<HTMLButtonElement>(null);
  const lowestPriceBtnRef = useRef<HTMLButtonElement>(null);
  const hideLeftArrow = handleHideLeftArrow();
  const hideRightArrow = handleHideRightArrow();
  const [active, setActive] = useState({
    lowestPrice: false,
    highestPrice: false
  });

  const LowestPriceFilter = (event: React.MouseEvent<HTMLElement>): void => {
    const highestPriceBtn = highestPriceBtnRef.current as HTMLButtonElement;
    const value = event.target as HTMLElement;
    highestPriceBtn.style.background = 'rgb(237 237 237)';
    highestPriceBtn.style.color = 'rgb(172 170 170)';

    if(!active.lowestPrice){
      value.style.background = '#55cce3';
      value.style.color = 'white';
      handleLowestPriceFiltering();
    }

    if(active.lowestPrice){
      value.style.background = 'rgb(237 237 237)';
      value.style.color = 'rgb(172 170 170)';
      handleNormalPriceFiltering();
    }

    setActive({...active, highestPrice: false, lowestPrice: !active.lowestPrice});

  };

  const HighestPriceFilter = (event: React.MouseEvent<HTMLElement>): void => {
    const lowestPriceBtn = lowestPriceBtnRef.current as HTMLButtonElement;
    const value = event.target as HTMLElement;
    lowestPriceBtn.style.background = 'rgb(237 237 237)';
    lowestPriceBtn.style.color = 'rgb(172 170 170)';

    if(!active.highestPrice){
      value.style.background = '#55cce3';
      value.style.color = 'white';
      handleHighestPriceFiltering();
    }

    if(active.highestPrice){
      value.style.background = 'rgb(237 237 237)';
      value.style.color = 'rgb(172 170 170)';
      handleNormalPriceFiltering();
    }

    setActive({...active, lowestPrice: false, highestPrice: !active.highestPrice});

  };

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
          <Button ref={lowestPriceBtnRef} auto rounded flat className={styles.cardButton} onClick={LowestPriceFilter}>
            Lowest Price
          </Button>
          <Button ref={highestPriceBtnRef} auto rounded flat className={styles.cardButton} onClick={HighestPriceFilter}>
            Highest Price
          </Button>
          <Image src={arrowLeft} css={{cursor: 'pointer', display: hideLeftArrow ? 'none' : 'block'}}
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
          <Image src={arowRight} css={{cursor: 'pointer', display: hideRightArrow ? 'none' : 'block'}}
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
        </Card.Body>
        <Card.Divider className={styles.bottomDivider}/>
      </Card>
    </FilterWrapper>
  );
};






export default Filter;
