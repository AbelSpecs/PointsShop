import * as React from "react";

import logo from "../assets/logo.svg";

import styles from "./App.module.scss";
import Dock from "~/components/dock/dock";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Dock/>
    </main>
  );
};

export default App;
