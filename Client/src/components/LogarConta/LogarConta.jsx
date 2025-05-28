import React from 'react'

const LogarConta = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row g-0 min-vh-100">
        {/* Left showcase - hidden on mobile */}
        <div className="col-md-6 d-none d-md-flex bg-warning text-center justify-content-center align-items-center flex-column" style={{ backgroundColor: '#F6CC14' }}>
          <h1 className="text-light fw-bold display-4 mb-4" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>
            Bem-Vindo<br />
            de volta!
          </h1>
          <img src="https://i.imgur.com/1jCxsKM.png" alt="sonic the hedgehog" className="img-fluid" />
        </div>

        {/* Right form section */}
        <div className="col-12 col-md-6 bg-light d-flex flex-column justify-content-center align-items-center min-vh-100">
          <div className="w-100 px-4 px-md-5 py-5" style={{ maxWidth: '600px' }}>
            <h1 className="fw-bold mb-4 display-5 text-center">Logar</h1>
            <form>
              

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-4 border-0 px-4 py-2"
                  style={{
                    boxShadow: '4px 4px 0px rgba(0,0,0,1)',
                    backgroundColor: '#EBEBEB',
                  }}
                  placeholder="Email"
                />
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mb-4 gap-2">
                <input
                  type="password"
                  className="form-control rounded-4 border-0 px-4 py-2"
                  style={{
                    boxShadow: '4px 4px 0px rgba(0,0,0,1)',
                    backgroundColor: '#EBEBEB',
                  }}
                  placeholder="Senha"
                />
                <button type="submit" className="btn text-light rounded-4 px-4 py-2 fw-bold"
                style={{
                    boxShadow: '4px 4px 0px rgba(0,0,0,1)',
                    backgroundColor: '#FD0A0A',
                  }}>
                  Logar
                </button>
              </div>

              <div className="text-center">
                <span className="fw-bold">Não tem uma conta?</span>
                <button type="button" className="btn text-danger rounded-4 fw-bold ms-1 p-0"
                >
                  Clique aqui
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LogarConta