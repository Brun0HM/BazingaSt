import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardCateg = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* CANECAS */}
        <div className="col-md-6">
          <a href="#canecas" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center loja-box h-100">
              <img
                src="https://placehold.co/350x307"
                alt="Caneca World's Best Boss"
                className="img-fluid mb-2"
              />
              <h5 className="text-danger fw-bold">CANECAS</h5>
            </div>
          </a>
        </div>

        {/* PÔSTERES */}
        <div className="col-md-6">
          <a href="#posteres" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center loja-box h-100">
              <img
                src="https://placehold.co/350x307"
                alt="Pôster Batman"
                className="img-fluid mb-2"
              />
              <h5 className="text-warning fw-bold">PÔSTERES</h5>
            </div>
          </a>
        </div>

        {/* FIGURES */}
        <div className="col-md-8">
          <a href="#figures" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center loja-box h-100">
              <img
                src="https://placehold.co/350x307"
                alt="Figure Miles Morales"
                className="img-fluid mb-2"
              />
              <h5 className="text-danger fw-bold">FIGURES!</h5>
              <p className="fw-bold text-dark m-0">Confira nossas figures</p>
            </div>
          </a>
        </div>

        {/* ROUPAS */}
        <div className="col-md-4">
          <a href="#roupas" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center loja-box h-100">
              <img
                src="https://placehold.co/350x307"
                alt="Camiseta Evangelion"
                className="img-fluid mb-2"
              />
              <h5 className="text-danger fw-bold">ROUPAS</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCateg;
