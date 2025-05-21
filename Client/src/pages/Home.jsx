import React from "react";
import Header from "../components/header/Header.jsx";

const Home = ({ superMan }) => (
  <div className="home-background">
    <Header />

    <div className="container-fluid position-relative pt-5">
      <div className="row justify-content-center align-items-center">
        {/* Coluna de texto */}
        <div className="col-12 col-md-4 d-flex text-center text-md-start mb-4 mb-md-0">
          <div className="d-none d-md-flex col-4"></div>
          <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start text-white">
            <h1 className="fw-bold display-2 text-white">
              NOVA <br />
              <span>COLEÇÃO!</span>
            </h1>
            <div className="d-flex gap-2 justify-content-center justify-content-md-end mt-4">
              <img
                src="https://placehold.co/200x200"
                alt="Marca 1"
                className="img-fluid rounded"
              />
              <img
                src="https://placehold.co/200x200"
                alt="Marca 2"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>

        {/* Coluna da imagem */}
        <div className="col-12 col-md-6 d-flex justify-content-start">
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
