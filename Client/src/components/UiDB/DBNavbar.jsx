import React from 'react'

const DBNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center fw-bolder text-danger" href="#">
            <i className="bi bi-archive-fill pe-2" style={{ fontSize: '1.5rem' }} />
            BazingaStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link text-muted fw-semibold" href="dashboard">Dashboard</a>
              <a className="nav-link text-muted fw-semibold" href="dbprodutos">Produtos</a>
              <a className="nav-link text-muted fw-semibold" href="dbpedidos">Pedidos</a>
              <a className="nav-link text-muted fw-semibold" href="dbclientes">Clientes</a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                    className="rounded-circle"
                    width="32"
                    height="32"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><a className="dropdown-item" href="#">Perfil</a></li>
                  <li><a className="dropdown-item" href="#">Configurações</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sair</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default DBNavbar