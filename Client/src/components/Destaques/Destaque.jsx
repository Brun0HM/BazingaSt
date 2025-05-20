import React from 'react'

const Destaque = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row g-4">
          {/* BLOCO UNIFICADO: POSTERES + ROUPAS */}
          <div className="col-md-8">
            <a href="#posteresroupas" className="text-decoration-none">
              <div className="p-3 bg-white rounded-4 shadow mb-3 d-flex align-items-center">
                <div className="text-end me-3">
                  <h3 className="text-warning fw-bold mb-0">PÔSTERES</h3>
                </div>
                <img
                  src="https://i.imgur.com/D6fcTh7.png"
                  alt="Pôster Batman"
                  className="img-fluid"
                />
              </div>

              <div className="p-3 bg-white rounded-4 shadow d-flex align-items-center">
                <div className="text-end me-3">
                  <h3 className="text-danger fw-bold mb-0">ROUPAS</h3>
                </div>
                <img
                  src="https://i.imgur.com/ghVxdWr.png"
                  alt="Camiseta Evangelion"
                  className="img-fluid"

                />
              </div>
            </a>
          </div>

          {/* CANECAS */}
          <div className="col-md-4">
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
        </div>
      </div>
    </div>
  )
}

export default Destaque
