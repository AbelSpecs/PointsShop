import React, { FC, useState } from 'react';

const useTranslation = () => {
  const innerWidth = window.innerWidth;
  const clientWidth = document.documentElement.clientWidth;
  const scrollbarWidth = innerWidth - clientWidth;
  const xPoint = innerWidth - scrollbarWidth;
  const yPoint = -500;
  const boxWidth = 400;
  const boxRotationDegree = 54;
  const [x, setX] = useState(xPoint - boxWidth);
  const [y, setY] = useState(yPoint);
  const [rotate, setRotate] = useState(-boxRotationDegree);

  return { x, y, rotate, setX, setY, setRotate, yPoint };
}

export default useTranslation;
