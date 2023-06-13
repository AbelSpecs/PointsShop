import React, { FC } from 'react';
import styles from './aero-navbar.module.css';
import { AeroNavbarWrapper } from './aero-navbar.styled';
import { Navbar, Text, Container, Image, Button } from "@nextui-org/react";
import { User } from '~/types/user';
import AeroLogo from "../../assets/aero-logo";
import coin from '../../assets/icons/coin.svg';
import { BiCart } from "react-icons/bi";

interface AeroNavbarProps {
  userData: User | undefined,
  handleToggleCart: () => void
}

const AeroNavbar: FC<AeroNavbarProps> = ({userData, handleToggleCart}) => {

  return (
    <AeroNavbarWrapper data-testid="AeroNavbar">
      <Navbar isCompact isBordered variant="static" className={styles.aeroNavbar}>
        <Navbar.Brand >
          <AeroLogo />
        </Navbar.Brand>
        <Navbar.Content className={styles.userInfo}>
          <Text className={styles.name}>{userData?.name}</Text>
          <Container className={styles.container}>
            <Text>{userData?.points}</Text>
            <Image id='coin' src={coin} />
          </Container>
          <Button auto light
                  onClick={handleToggleCart}
                  className={styles.cartButton}
                  icon={<BiCart size={25}/>}>
          </Button>
        </Navbar.Content>
      </Navbar>
    </AeroNavbarWrapper>
  )
}

export default AeroNavbar;
