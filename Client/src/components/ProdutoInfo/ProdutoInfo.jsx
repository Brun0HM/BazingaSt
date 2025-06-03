import React from "react";

const ProdutoInfo = () => {
  return (
    <div className=" py-4">
      <div className="row align-items-center">
        <div className="col-0 col-md-1"></div>
        <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
          <img
            src="https://placehold.co/400x400"
            alt=""
            className="img-fluid rounded-4"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </div>
        <div className="col-12 col-md-4">
          <h1 className="fw-bold m-0 p-0">NomeProduto</h1>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className="fs-3">R$00.00</span>
            <p className="m-0">InforAdicionais</p>
          </div>
          <p className="fs-5 w-100 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            minus quia sunt ipsa nemo quisquam sed laudantium voluptates nisi
            quas earum aperiam, id beatae recusandae rem obcaecati cupiditate
            autem exercitationem?
          </p>
          <div className="w-100 pt-4">
            <button className="btn btn-danger text-center Adicionar w-100 d-flex justify-content-center align-items-center fs-5 fw-bold rounded-4">
              <i className="bi bi-cart-plus-fill me-2 m-0"></i>
              <span className="m-0">Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoInfo;
