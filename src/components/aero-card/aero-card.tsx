import React, { FC } from 'react';
import styles from './aero-card.module.css';
import { AeroCardWrapper } from './aero-card.styled';
import { Button, Card, Container, Text } from '@nextui-org/react';
import { Product } from '~/types/product';
import { Image } from '@nextui-org/react';
import coin from '../../assets/icons/coin.svg';
import { User } from '~/types/user';



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
      value.classList.remove(`${styles.cardBefore}`);
      return;
    }

    if (!btn) { return; }
    if (!cost) { return; }
    if (!coin) { return; }
    btn.style.display = event.type.match('mouseleave') ? 'none' : 'block';
    cost.style.display = event.type.match('mouseleave') ? 'none' : 'block';
    coin.style.display = event.type.match('mouseleave') ? 'none' : 'block';
  }

  const addProduct = () => {
    handleAddCart(product);
  }

  return (
    <AeroCardWrapper data-testid="AeroCard" >
      <Card variant='bordered'
            isHoverable={!isPurchasable}
            onMouseEnter={handleCardBefore}
            onMouseLeave={handleCardBefore}
            className={`${styles.card} ${styles.cardBefore}`}>
          {
            isPurchasable &&
            <Container className={styles.container}>
              <Text id='morePoints' h6 size={10} css={{ m: 0 }} weight='bold' className={styles.cardText}>
                    You need {product.cost - userData?.points!}
              </Text>
              <Image src={coin} containerCss={{zIndex: 1, left: '240px', width: '15px', height: '15px', position: 'absolute'}}/>
            </Container>
          }
          <Text id='cost' h6 size={30} color="white" css={{ m: 0 }} weight='normal' className={styles.cardCost}>
                {product.cost}
          </Text>
          <Image id='coin' src={coin} className={styles.coin}  />
          <Button auto rounded bordered ripple className={styles.cardButton} onClick={addProduct}>
            Reedem Now
          </Button>
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
        <Card.Divider className={styles.cardDivider}/>
        <Card.Footer className={styles.cardFooterText}>
          <Text h6 size={10} color="gray" css={{ m: 0 }}>
            {product.category}
          </Text>
          <Text h6 size={12} color="black" css={{ m: 0 }}>
            {product.name}
          </Text>
        </Card.Footer>
      </Card>
    </AeroCardWrapper>
  );
}

export default AeroCard;
