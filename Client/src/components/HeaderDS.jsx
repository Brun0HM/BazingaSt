import React from "react";
import { useLocation } from "react-router";

const HeaderDS = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          Bazinga Dashboard
        </a>
        <div className="d-flex gap-3">
          <a
            href="/dbclientes"
            className={`nav-link fw-semibold ${
              isActive("/dbclientes") ? "text-danger" : "text-dark"
            }`}
          >
            Clientes
          </a>
          <a
            href="/dbprodutos"
            className={`nav-link fw-semibold ${
              isActive("/dbprodutos") ? "text-danger" : "text-dark"
            }`}
          >
            Produtos
          </a>
          <a
            href="/dbpedidos"
            className={`nav-link fw-semibold ${
              isActive("/dbpedidos") ? "text-danger" : "text-dark"
            }`}
          >
            Pedidos
          </a>
          <a
            href="/cupom"
            className={`nav-link fw-semibold ${
              isActive("/cupom") ? "text-danger" : "text-dark"
            }`}
          >
            Cupons
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDS;
