import React, { FC } from 'react';
import styles from './header.module.css';
import { HeaderWrapper } from './header.styled';
import { Image } from '@nextui-org/react';
import headerImg from '../../assets/header.png';




interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
 <HeaderWrapper data-testid="Header" className={styles.headerImg}>
    Electronics
 </HeaderWrapper>
);

export default Header;
