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
    </AeroCardWrapper>
  );
}

export default AeroCard;
