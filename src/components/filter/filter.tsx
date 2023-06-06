import React, { FC } from 'react';
import styles from './filter.module.css';
import { FilterWrapper } from './filter.styled';
import { Button, Card, Image, Text, Grid } from "@nextui-org/react";
import arowRight from '../../assets/icons/arrow-right.svg';


interface FilterProps {}

const Filter: FC<FilterProps> = () => (
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
        <Image src={arowRight} containerCss={{width: '40px', margin: 0, position: 'absolute', right: '40px'}}/>
      </Card.Body>
      <Card.Divider className={styles.bottomDivider}/>
     </Card>
 </FilterWrapper>
);

export default Filter;
