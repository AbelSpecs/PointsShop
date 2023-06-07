import React, { FC } from 'react';
import styles from './filter.module.css';
import { FilterWrapper } from './filter.styled';
import { Button, Card, Image, Text, Grid } from "@nextui-org/react";
import arowRight from '../../assets/icons/arrow-right.svg';


interface FilterProps {
  handlePage: any
}

const Filter: FC<FilterProps> = ({handlePage}) => (
 <FilterWrapper data-testid="Filter">
    <Card variant='flat' className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <Text weight='medium' color='gray'>16 of 32 products</Text>
        <Card.Divider className={styles.cardDivider}/>
        <Text weight='medium' color='rgb(172 170 170)' style={{marginRight: '20px'}}>Sort by:</Text>
        <Button auto rounded flat className={styles.cardButton}>
          Most Recent
        </Button>
        <Button auto rounded flat className={styles.cardButton}>
          Lowest Price
        </Button>
        <Button auto rounded flat className={styles.cardButton}>
          Highest Price
        </Button>
        <Image src={arowRight} css={{cursor: 'pointer'}}
                containerCss={{width: '40px', margin: 0, position: 'absolute', right: '40px'}}
                onClick={handlePage}/>
      </Card.Body>
      <Card.Divider className={styles.bottomDivider}/>
     </Card>
 </FilterWrapper>
);

export default Filter;
