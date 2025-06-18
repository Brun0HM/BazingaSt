import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";
import ListaItens from "./pages/ListaItens.jsx";
import Cart from "./pages/Cart.jsx";
import Config from "./pages/Config.jsx";
import Logar from "./pages/Logar.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Payment from "./pages/Payment.jsx";
import MainDashBoard from "./pages/MainDashBoard.jsx";
import DBProdutos from "./pages/DBProdutos.jsx";
import DBPedidos from "./pages/DBPedidos.jsx";
import DBClientes from "./pages/DBClientes.jsx";
import InfoProducts from "./pages/InfoProducts.jsx";
import AdicionarCupom from "./pages/AdicionarCupom.jsx";
import Figures from "./pages/Figures.jsx";
import Roupas from "./pages/Roupas.jsx";
import Poster from "./pages/Poster.jsx";
import Teste from "./pages/Teste.jsx";
import { Navigate } from "react-router";
const ProtectedRoute = ({ children, requiredRole }) => {
  const role = localStorage.getItem("usuarioRole");
  if (role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/produtos" element={<ListaItens />} />
        <Route path="/roupas" element={<Roupas />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/config" element={<Config />} />
        <Route path="/login" element={<Logar />} />
        <Route path="/registrar" element={<CreateAccount />} />
        <Route path="/pagar" element={<Payment />} />
        <Route path="/dashboard" element={<MainDashBoard />} />
        <Route
          path="/dbprodutos"
          element={
            <ProtectedRoute requiredRole="Admin">
              <DBProdutos />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/dbpedidos"
          element={
            <ProtectedRoute requiredRole="Admin">
              <DBPedidos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dbclientes"
          element={
            <ProtectedRoute requiredRole="Admin">
              <DBClientes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cupom"
          element={
            <ProtectedRoute requiredRole="Admin">
              <AdicionarCupom />
            </ProtectedRoute>
          }
        />
        <Route path="/info/:id" element={<InfoProducts />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
