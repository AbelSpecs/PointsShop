import React, { FC } from 'react';
import styles from './header.module.css';
import { HeaderWrapper } from './header.styled';
import { Text, Image } from "@nextui-org/react";
import header from '../../assets/header.png';





interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
 <HeaderWrapper data-testid="Header" className={styles.headerContainer}>
  <Image src={header} className={styles.headerImg} css={{objectFit: 'cover', objectPosition: 'center'}}/>
  <Text className={styles.text} h1 size={50} weight="bold"
          css={{
                  textGradient: "45deg, $cyan50 -20%, $blue100 100%",
               }}>Electronics</Text>

 </HeaderWrapper>
);

export default Header;
