import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/produtos" element={<App />} />
        <Route path="/canecas" element={<App />} />
        <Route path="/camisetas" element={<App />} />
        <Route path="/figures" element={<App />} />
        <Route path="/posteres" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
