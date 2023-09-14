import React, { FC, useState } from 'react';
import styles from './cart.module.css';
import { CartWrapper } from './cart.styled';
import { motion } from "framer-motion";
import { Button, Card, Text } from '@nextui-org/react';
import { Product } from '~/types/product';

interface CartProps {
  x: number,
  y: number,
  rotate: number,
  setX: React.Dispatch<React.SetStateAction<number>>,
  setY: React.Dispatch<React.SetStateAction<number>>,
  cartProducts: Product[]
}

const Cart: FC<CartProps> = ({x, y, rotate, setX, setY, cartProducts}) => {

  const orientation = () => {
    console.log('me dispare');
    const clientWidth = document.documentElement.clientWidth;
    const xPoint = clientWidth;
    setX(xPoint -400);
  }

  window.screen.orientation.onchange = orientation;

  return (
      <motion.div
        className={styles.cart}
        animate={{ x, y, rotate }}
        transition={{ type: "spring" }}
        >
        {
          cartProducts.length > 0
          ?
          cartProducts?.map((product, i) => {
            return (
              <Card css={{ $$cardColor: 'white', minWidth: '250px', boxShadow: '9px 8px 8px -10px rgba(0,0,0,0.75)'}}
                    variant='bordered'
                    key={i}
                    className={styles.card}>
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

            )
          })
          :
          <Card>
            <Card.Header>
              No items
            </Card.Header>
          </Card>
        }

      </motion.div>
  )
}



export default Cart;
