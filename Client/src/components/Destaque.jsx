import React from 'react'

const Destaque = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row g-4">
          {/* BLOCO UNIFICADO: NOVA COLEÇÃO + INVERNO */}
          <div className="col-12 col-md-8">
            <a href="/produtos" className="text-decoration-none">
              <div className="p-3 bg-white rounded-4 shadow mb-3 d-flex flex-column flex-lg-row justify-content-between align-items-center Aumento">

                <div className="text-center text-lg-start">
                  <h1
                    className="text-dark fw-bold mb-0"
                    style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
                  >
                    NOVA
                  </h1>
                  <h2
                    className="text-primary fw-bold mb-0"
                    style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                  >
                    COLEÇÃO!
                  </h2>
                </div>

                <img
                  src="https://i.imgur.com/D6fcTh7.png"
                  alt="Pôster Batman"
                  className="img-fluid mt-3 mt-lg-0"
                />
              </div>

              <div className="p-3 bg-white rounded-4 shadow d-flex flex-column flex-lg-row justify-content-between align-items-center Aumento">

                <div className="text-center text-lg-start ms-lg-4">
                  <h3
                    className="text-dark fw-bold mb-1"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                  >
                    Coleção de inverno
                  </h3>
                  <h3
                    className="text-warning fw-bold mb-0"
                    style={{ fontSize: 'clamp(1rem, 3vw, 1.75rem)' }}
                  >
                    Venha conferir!
                  </h3>
                </div>

                <img
                  src="https://i.imgur.com/ghVxdWr.png"
                  alt="Camiseta Evangelion"
                  className="img-fluid mt-3 mt-lg-0"
                />
              </div>
            </a>
          </div>

          {/* CANECAS */}
          <div className="col-12 col-md-4">
            <a href="figures" className="text-decoration-none">
              <div className="p-3 bg-white rounded-4 shadow text-center h-100 d-flex flex-column justify-content-between Aumento">

                <h1
                  className="text-warning fw-bolder pt-4"
                  style={{
                    textShadow: '6px 6px 0px rgba(0,0,0,1)',
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)'
                  }}
                >
                  BATMAN
                </h1>

                <img
                  src="https://i.imgur.com/ofWOW1z.png"
                  alt="Caneca World's Best Boss"
                  className="img-fluid mx-auto"
                />

                <h1
                  className="text-light fw-bolder mt-3 mb-4 mx-auto text-center"
                  style={{
                    backgroundColor: '#F81212',
                    boxShadow: '6px 6px 0px rgba(0,0,0,1)',
                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                    padding: '0.5rem 1rem'
                  }}
                >
                  80% off
                </h1>

              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destaque
