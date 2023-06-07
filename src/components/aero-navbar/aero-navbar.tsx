import React, { FC } from 'react';
import styles from './aero-navbar.module.css';
import { AeroNavbarWrapper } from './aero-navbar.styled';
import { Navbar, Text, Container, Image } from "@nextui-org/react";
import { User } from '~/types/user';
import AeroLogo from "../../assets/aero-logo";
import coin from '../../assets/icons/coin.svg';


interface AeroNavbarProps {
  userData: User | undefined
}

const AeroNavbar: FC<AeroNavbarProps> = ({userData}) => (
 <AeroNavbarWrapper data-testid="AeroNavbar">
    <Navbar isCompact isBordered variant="static" className={styles.aeroNavbar}>
      <Navbar.Brand >
        <AeroLogo />
      </Navbar.Brand>
      <Navbar.Content>
      </Navbar.Content>
      <Navbar.Content className={styles.userInfo}>
        <Text className={styles.name}>{userData?.name}</Text>
        <Container className={styles.container}>
          <Text>{userData?.points}</Text>
          <Image id='coin' src={coin} />
        </Container>
      </Navbar.Content>
    </Navbar>
 </AeroNavbarWrapper>
);

export default AeroNavbar;
