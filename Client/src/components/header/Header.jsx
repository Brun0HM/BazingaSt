const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={props.Logo} alt="Logo bazinga" />
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link  active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Carrinho
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Canecas
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Action Figures
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Posteres
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-3"
                type="search"
                placeholder="Buscar Produto"
                aria-label="Search"
              />
             <i className="bi bi-search btn btn-outline rounded-3" role="button"></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
