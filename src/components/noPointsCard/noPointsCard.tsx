import React, { FC } from 'react';
import { Card, Container, Text } from '@nextui-org/react';
import { NoPointsCardWrapper } from './noPointsCard.styled';
import { MyCard } from './noPointsCard.styles';
import {MyContainer} from './noPointsCard.styles';
import {MyCardText} from './noPointsCard.styles';
import {MyCardCost} from './noPointsCard.styles';
import {MyCoin} from './noPointsCard.styles';
import {MyCardButton} from './noPointsCard.styles';
import { Image } from '@nextui-org/react';
import { Product } from '~/types/product';
import { User } from '~/types/user';
import coin from '../../assets/icons/coin.svg';

interface NoPointsCardProps {
  product: Product,
  userData: User | undefined
}

const NoPointsCard: FC<NoPointsCardProps> = ({product, userData}) => {
  return (
    <NoPointsCardWrapper data-testid="NoPointsCard">
      <MyCard id='mycard' variant='bordered'>
        <MyContainer >
          <MyCardText id='morePoints' h6>
                You need {product.cost - userData?.points!}
          </MyCardText>
          <Image src={coin} containerCss={{zIndex: 1, left: '240px', width: '15px', height: '15px', position: 'absolute'}}/>
        </MyContainer>
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
    </NoPointsCardWrapper>
  )
}



export default NoPointsCard;
