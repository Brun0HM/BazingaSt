import React from "react";
import { Link } from "react-router";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Offcanvas toggle button for mobile, only visible on small screens */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            aria-expanded="false"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start d-lg-none tamano"
            data-bs-scroll="true"
            tabIndex="-1"
            id="mobileMenu"
            aria-labelledby="mobileMenuLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-between h-100">
              <ul className="navbar-nav gap-3">
                <li className="nav-link active fs-4">
                  <i className="bi bi-house-door-fill"></i>
                  <span className="fs-5 ps-1">Home</span>
                </li>
                <li className="nav-link active fs-4">
                  <i className="bi bi-cart-fill"></i>
                  <span className="fs-5 ps-1">Carrinho</span>
                </li>
                <li className="nav-link active fs-4">
                  <i className="bi bi-cup-fill"></i>
                  <span className="fs-5 ps-1">Canecas</span>
                </li>
                <li className="nav-link active fs-4">
                  <i className="bi bi-person-fill"></i>
                  <span className="fs-5 ps-1">Roupas</span>
                </li>
                <li className="nav-link active fs-4">
                  <i className="bi bi-android2"></i>
                  <span className="fs-5 ps-1">Figures</span>
                </li>
                <li className="nav-link active fs-4">
                  <i className="bi bi-image-fill"></i>
                  <span className="fs-5 ps-1">Pôsteres</span>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3 mt-4">
                <li className="nav-link active fs-4 mb-0">
                  <i className="bi bi-gear-fill"></i>
                </li>
                <span className="btn rounded-5 btnCor pt-2 pb-2 pe-3 ps-3 mb-0">
                  Entrar
                </span>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center pe-4 text-decoration-none"
          >
            <img src={props.Logo} alt="Logo" height="40" />
          </Link>
          <div
            className="collapse navbar-collapse d-none d-lg-flex"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-lg-0 gap-3 mx-auto my-auto">
              <li className="nav-link active fs-4">
                <i className="bi bi-house-door-fill"></i>
              </li>
              <li className="nav-link active fs-4">
                <i className="bi bi-cart-fill"></i>
              </li>
              <li className="nav-link active fs-4">
                <i className="bi bi-cup-fill"></i>
              </li>
              <li className="nav-link active fs-4">
                <i className="bi bi-person-fill"></i>
              </li>
              <li className="nav-link active fs-4">
                <i className="bi bi-android2"></i>
              </li>
              <li className="nav-link active fs-4">
                <i className="bi bi-image-fill"></i>
              </li>
            </ul>
            <div className="d-flex justify-content-end align-items-center gap-2">
              <li className="nav-link active fs-4">
                <i className="bi bi-gear-fill"></i>
              </li>
              <span className="btn rounded-5 btnCor pt-2 pb-2 pe-3 ps-3">
                Entrar
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
