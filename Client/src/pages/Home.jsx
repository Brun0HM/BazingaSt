import React from "react";
import Header from "../components/header/Header.jsx";

const Home = ({ superMan }) => (
  <div className="fundido">
    {/* Header sem position absolute */}
    <Header />

    {/* Container empurrado para baixo */}
    <div className="container position-relative pt-5">
      <div className="row align-items-center">
        {/* Coluna de texto */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="fw-bold display-2 text-white">
            NOVA <br />
            <span>COLEÇÃO!</span>
          </h1>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-4">
            <img
              src="https://placehold.co/200x200"
              alt="Marca 1"
              className="img-fluid"
            />
            <img
              src="https://placehold.co/200x200"
              alt="Marca 2"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Coluna da imagem */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src={superMan}
            alt="Superman LEGO"
            className="img-fluid superman-img"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
