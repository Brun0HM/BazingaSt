import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardCateg = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* CANECAS */}
        <div className="col-md-6">
          <a href="#canecas" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center h-100">
              <img
                src="https://i.imgur.com/pU2aEku.png"
                alt="Caneca World's Best Boss"
                className="img-fluid mb-2"
              />
              <h3 className="text-danger fw-bold">CANECAS</h3>
            </div>
          </a>
        </div>

        {/* PÔSTERES */}
        <div className="col-md-6">
          <a href="#posteres" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center h-100">
              <img
                src="https://i.imgur.com/L1pmpuy.png"
                alt="Pôster Batman"
                className="img-fluid mb-2"
              />
              <h3 className="text-warning fw-bold">PÔSTERES</h3>
            </div>
          </a>
        </div>

        {/* FIGURES */}
        <div className="col-md-8">
          <a href="#figures" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center h-100">
              <img
                src="https://i.imgur.com/mb18ClD.png"
                alt="Figure Miles Morales"
                className="img-fluid mb-2"
              />
              <h3 className="text-danger fw-bold">FIGURES!</h3>
              <p className="fw-bold text-dark m-0">Confira nossas figures</p>
            </div>
          </a>
        </div>

        {/* ROUPAS */}
        <div className="col-md-4">
          <a href="#roupas" className="text-decoration-none">
            <div className="p-3 bg-white rounded-4 shadow text-center h-100">
              <img
                src="https://i.imgur.com/sL7heIR.png"
                alt="Camiseta Evangelion"
                className="img-fluid mb-2"
              />
              <h3 className="text-danger fw-bold">ROUPAS</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCateg;
