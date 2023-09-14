import React, { FC } from 'react';
import { HeaderWrapper } from './header.styled';
import { Text, Image, styled } from "@nextui-org/react";
import header from '../../assets/header.png';

interface HeaderProps {}

const MyText = styled(Text, {
  textGradient: "45deg, $cyan50 -20%, $blue100 100%",
  marginTop: 0,
  position: 'absolute',
  bottom: 20,
  left: '15%',
  fontWeight: 'bold',
  fontSize: 50
});


const Header: FC<HeaderProps> = () => (
 <HeaderWrapper data-testid="Header" style={{position: 'relative'}}>
  <Image src={header} containerCss={{height: 300, width: '100%'}}
                        css={{objectFit: 'cover', objectPosition: 'center'}}/>
  <MyText h1>Electronics</MyText>
 </HeaderWrapper>
);

export default Header;
