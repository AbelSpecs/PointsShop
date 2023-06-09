import React, { FC, useState } from 'react';
import styles from './cart.module.css';
import { CartWrapper } from './cart.styled';
import { motion } from "framer-motion";

interface CartProps {
  x: number,
  y: number,
  rotate: number,
  setX: React.Dispatch<React.SetStateAction<number>>,
  setY: React.Dispatch<React.SetStateAction<number>>
}

const Cart: FC<CartProps> = ({x, y, rotate, setX, setY}) => {

  const orientation = () => {
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
        prueba
      </motion.div>
  )
}



export default Cart;
