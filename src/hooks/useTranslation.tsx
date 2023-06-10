import React, { FC, useState } from 'react';

const useTranslation = () => {
  const innerWidth = window.innerWidth;
  const clientWidth = document.documentElement.clientWidth;
  const scrollbarWidth = innerWidth - clientWidth;
  const xPoint = innerWidth - scrollbarWidth;
  const yPoint = -500;
  const [x, setX] = useState(xPoint - 400);
  const [y, setY] = useState(yPoint);
  const [rotate, setRotate] = useState(-54);

  return { x, y, rotate, setX, setY, setRotate };
}

export default useTranslation;
