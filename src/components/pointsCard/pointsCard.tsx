import React, { FC } from 'react';
import { PointsCardWrapper } from './pointsCard.styled';
import { Button, Card, Container, Text, styled } from '@nextui-org/react';
import { MyCard } from './pointsCard.styles';
import {MyContainer} from './pointsCard.styles';
import {MyCardText} from './pointsCard.styles';
import {MyCardCost} from './pointsCard.styles';
import {MyCoin} from './pointsCard.styles';
import {MyCardButton} from './pointsCard.styles';
import { Image } from '@nextui-org/react';
import coin from '../../assets/icons/coin.svg';
import { Product } from '~/types/product';
import { User } from '~/types/user';

interface PointsCardProps {
  product: Product,
  addProduct: () => void,
  handleCardBefore: (event: React.MouseEvent<HTMLElement>) => void
}

const PointsCard: FC<PointsCardProps> = ({product, addProduct, handleCardBefore}) => {

  return (
    <PointsCardWrapper data-testid="PointsCard">
      <MyCard id='mycard' variant='bordered'
              isHoverable
              onMouseEnter={handleCardBefore}
              onMouseLeave={handleCardBefore}
      >
        <MyCardCost id='cost' h6 color='white'>
              {product.cost}
        </MyCardCost>
        <Container id='coin' css={{display: 'none'}}>
          <MyCoin src={coin}/>
        </Container>
        <MyCardButton auto rounded bordered ripple onClick={addProduct}
                      css={{color: 'gray', backgroundColor: 'white', borderColor: 'transparent'}}>
          Reedem Now
        </MyCardButton>
        <Card.Body>
          <Card.Image
            src={product.img.url}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Product"
          >
          </Card.Image>
        </Card.Body>
        <Card.Divider css={{width: '80%', margin: '0 auto', bottom: 10}}/>
        <Card.Footer css={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text h6 size={10} color="gray" css={{ m: 0 }}>
            {product.category}
          </Text>
          <Text h6 size={12} color="black" css={{ m: 0 }}>
            {product.name}
          </Text>
        </Card.Footer>
      </MyCard>
    </PointsCardWrapper>
  )
}

export default PointsCard;
