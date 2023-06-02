import * as React from "react";

import logo from "../assets/logo.svg";

import styles from "./App.module.scss";
import AeroNavbar from "../components/aero-navbar/aero-navbar";
import Dock from "~/components/dock/dock";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <AeroNavbar/>
      <Dock/>
      {/* <header className={styles.header}>
        <h1>
          <img alt="Aerolab" src={logo} width={128} />
        </h1>
        <h3>Lets get this party started</h3>
      </header> */}
    </main>
  );
};

export default App;
