import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Style } from "./Style";
import Hdr from "./Hdr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hdr />
  </React.StrictMode>
);
