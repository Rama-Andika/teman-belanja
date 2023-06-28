import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tabs/style/react-tabs.css";
import "react-dropdown/style.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
