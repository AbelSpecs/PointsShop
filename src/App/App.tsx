import * as React from "react";
import styles from "./App.module.css";
import Dock from "~/components/dock/dock";
import { NextUIProvider } from '@nextui-org/react';

const App: React.FC = () => {
  return (
    <NextUIProvider>
      {/* <main className={styles.container}> */}
        <Dock/>
      {/* </main> */}
    </NextUIProvider>
  );
};

export default App;
