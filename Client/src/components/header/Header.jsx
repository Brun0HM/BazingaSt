import React from "react";
import { Link } from "react-router";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center pe-4 text-decoration-none"
          >
            <img src={props.Logo} alt="Logo" height="40" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="nav-link">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/canecas" className="nav-link">
                  Canecas
                </Link>
              </li>
              <li>
                <Link to="/camisetas" className="nav-link">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link to="/adesivos" className="nav-link">
                  Figures
                </Link>
              </li>
              <li>
                <Link to="/contato" className="nav-link">
                  Pôsteres
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-3"
                type="search"
                placeholder="Buscar Produto"
                aria-label="Search"
              />
              <i
                className="bi bi-search btn btn-outline rounded-3"
                role="button"
              ></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
