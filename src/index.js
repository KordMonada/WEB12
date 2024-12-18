import React from "react";
import ReactDOM from "react-dom/client"; // Используем 'react-dom/client' вместо 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Создаем корень
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
