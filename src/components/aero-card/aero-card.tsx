import React, { FC } from 'react';
import styles from './aero-card.module.css';
import { AeroCardWrapper } from './aero-card.styled';
import { Product } from '~/types/product';
import { User } from '~/types/user';
import PointsCard  from '../pointsCard/pointsCard';
import NoPointsCard from '../noPointsCard/noPointsCard';

interface AeroCardProps {
  product: Product,
  handleAddCart : (product: Product) => void,
  userData: User | undefined
}

const AeroCard: FC<AeroCardProps> = ({product, handleAddCart, userData} : AeroCardProps) => {
  const isPurchasable = userData?.points! < product.cost;

  const handleCardBefore = (event: React.MouseEvent<HTMLElement>) : void => {
    const value = event.target as HTMLElement;
    const btn : HTMLButtonElement = value.querySelector('button')!;
    const cost : HTMLElement = value.querySelector('h6#cost')!;
    const coin : HTMLElement = value.querySelector('#coin')!;

    if(isPurchasable){
      btn ? btn.style.display = 'none' : '';
      coin ? coin.style.display = 'none' : '';
      cost ? cost.style.display = 'none' : '';

      return;
    }

    if (!btn) { return; }
    if (!cost) { return; }
    if (!coin) { return; }
    btn.style.display = event.type.match('mouseleave') ? 'none' : 'block';
    cost.style.display = event.type.match('mouseleave') ? 'none' : 'block';
    coin.style.display = event.type.match('mouseleave') ? 'none' : 'block';
  }

  const addProduct = (): void => {
    handleAddCart(product);
  }

  return (
    <AeroCardWrapper data-testid="AeroCard" >
      {
        isPurchasable
        ?
        <NoPointsCard product={product} userData={userData}></NoPointsCard>
        :
        <PointsCard product={product} addProduct={addProduct} handleCardBefore={handleCardBefore}></PointsCard>
      }
      {/* <MyCard id='mycard' variant='bordered'
            isHoverable={!isPurchasable}
            onMouseEnter={handleCardBefore}
            onMouseLeave={handleCardBefore}
            >
          {
            isPurchasable &&
            <MyContainer >
              <MyCardText id='morePoints' h6>
                    You need {product.cost - userData?.points!}
              </MyCardText>
              <Image src={coin} containerCss={{zIndex: 1, left: '240px', width: '15px', height: '15px', position: 'absolute'}}/>
            </MyContainer>
          }
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
      </MyCard> */}
    </AeroCardWrapper>
  );
}

export default AeroCard;
