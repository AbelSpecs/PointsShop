import React, { FC } from 'react';
import styles from './aero-navbar.module.css';
import { AeroNavbarWrapper } from './aero-navbar.styled';
import { Navbar } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import AeroLogo from "../../assets/aero-logo";


interface AeroNavbarProps {}

const AeroNavbar: FC<AeroNavbarProps> = () => (
 <AeroNavbarWrapper data-testid="AeroNavbar">
    <Navbar isCompact isBordered variant="static" className={styles.aeroNavbar}>
      <Navbar.Brand >
        <AeroLogo />
        {/* <Text b color="inherit" hideIn="xs">
          ACME
        </Text> */}
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        {/* <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link> */}
      </Navbar.Content>
      <Navbar.Content>
        {/* <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button>
        </Navbar.Item> */}
      </Navbar.Content>
    </Navbar>
 </AeroNavbarWrapper>
);

export default AeroNavbar;
