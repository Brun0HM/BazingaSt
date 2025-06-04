import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProdutoInfo from "../components/ProdutoInfo/ProdutoInfo";
import Cardegorias from "../components/Cardegorias/Cardegoria";

const InfoProducts = () => {
  return (
    <>
      <Header />
      <div className="pt-0 pt-md-5 pb-5 bg-white d-flex flex-column justify-content-center">
        <div className=" mb-5 mb-5 pb-5 col-10 container">
          <ProdutoInfo />
        </div>
        <div className=" d-flex flex-column align-items-center">
          <h2 className="fw-bold mt-g-5">Produtos Relacionados</h2>
          <div className="d-flex flex-wrap col-10  ">
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoProducts;
