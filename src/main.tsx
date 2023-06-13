import React from "react";
import ReactDOM from "react-dom";
import { registerSW } from "virtual:pwa-register";
import App from "./App";

import "./theme.css";

// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (confirm("New content available. Reload?")) {
//       updateSW(true);
//     }
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),

);

