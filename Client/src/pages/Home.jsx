import React from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/Footer.jsx";
import DestaquePage from "./DestaquePage.jsx";
import Lego from "../assets/LegoLogo.png";
import DC from "../assets/DCLogo.png";

const Home = ({ superMan }) => (
  <>
    <div className="home-background">
      <div className="">
        <Header />
      </div>

      <div className="container-fluid position-relative pt-5 ">
        <div className="row justify-content-center align-items-center">
          {/* Coluna de texto */}
          <div className="col-12 col-md-4 d-flex text-center text-md-start mb-4 mb-md-0 me-0 me-md-5">
            <div className="d-none d-md-flex col-4"></div>
            <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start text-white">
              <h1 className="fw-bold display-2 text-white Nova">
                NOVA <br />
                <span className="text-white Colecao">COLEÇÃO!</span>
              </h1>
              <div className="d-flex gap-2 justify-content-center justify-content-md-end mt-4">
                <img
                  src={Lego}
                  alt="Marca 1"
                  className="img-fluid rounded Logos"
                />
                <img
                  src={DC}
                  alt="Marca 2"
                  className="img-fluid rounded  Logos"
                />
              </div>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="col-12 col-md-6 d-flex justify-content-start flex-column">
            <div className="bg-white position-absolute Circulo z-1 d-none d-md-block">
              sdaaaa
            </div>
            <img
              src={superMan}
              alt="Superman LEGO"
              className="img-fluid superman-img z-2"
            />
          </div>
        </div>
      </div>
    </div>
    <DestaquePage />
    <Footer />
  </>
);

export default Home;
