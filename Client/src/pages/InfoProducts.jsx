import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer.jsx";
import ProdutoInfo from "../components/ProdutoInfo/ProdutoInfo";
import Cardegorias from "../components/Cardegorias/Cardegoria";

const InfoProducts = () => {
  return (
    <>
      <Header />
      <div className="pt-0 pt-md-5 pb-5 bg-white">
        <div className=" mb-5 border-3 mb-5 pb-5">
          <ProdutoInfo />
        </div>
        <hr className="ms-5 justify-content-center me-5 fw-" />
        <div className="d-flex flex-wrap ps-5 ms-3 gap-3 pb-5 pt-5 ">
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
      <Footer />
    </>
  );
};

export default InfoProducts;
