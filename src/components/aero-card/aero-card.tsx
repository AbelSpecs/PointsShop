import React, { FC } from 'react';
import styles from './aero-card.module.css';
import { AeroCardWrapper } from './aero-card.styled';
import { Button, Card, Container, Text } from '@nextui-org/react';
import { Product } from '~/types/product';
import { Image } from '@nextui-org/react';
import coin from '../../assets/icons/coin.svg';



interface AeroCardProps {
  product: Product
}

const AeroCard: FC<AeroCardProps> = ({product} : AeroCardProps) => {

  const handleCardBefore = (event: React.MouseEvent<HTMLElement>) : void => {
    const value = event.target as HTMLElement;
    const btn : HTMLButtonElement = value.querySelector('button')!;
    const cost : HTMLElement = value.querySelector('h6')!;
    const coin : HTMLElement = value.querySelector('#coin')!;
    if (!btn) { return; }
    if (!cost) { return; }
    if (!coin) { return; }
    btn.style.display = event.type.match('mouseleave') ? 'none' : 'block';
    cost.style.display = event.type.match('mouseleave') ? 'none' : 'block';
    coin.style.display = event.type.match('mouseleave') ? 'none' : 'block';
  }

  return (
    <AeroCardWrapper data-testid="AeroCard" >
      <Card css={{ $$cardColor: 'white', minWidth: '250px', boxShadow: '9px 8px 8px -10px rgba(0,0,0,0.75)'}}
            variant='bordered'
            isHoverable
            onMouseEnter={handleCardBefore}
            onMouseLeave={handleCardBefore}
            className={styles.card}>
          <Text h6 size={30} color="white" css={{ m: 0 }} weight='normal' className={styles.cardCost}>
                {product.cost}
          </Text>
          <Image id='coin' src={coin} className={styles.coin} css={{display: 'none'}} />
          <Button auto rounded bordered ripple className={styles.cardButton}>
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
