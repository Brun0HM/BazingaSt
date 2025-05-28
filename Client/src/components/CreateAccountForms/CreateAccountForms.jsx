import React from 'react';

const CreateAccountForms = ({ onRedirect }) => {
  return (
    <div className="w-100 px-4 px-md-5 py-5" style={{ maxWidth: '600px' }}>
      <h1 className="fw-bold mb-4 display-5 text-center">Crie uma conta</h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-4 border-0 px-4 py-2"
            style={{
              boxShadow: '4px 4px 0px rgba(0,0,0,1)',
              backgroundColor: '#EBEBEB',
            }}
            placeholder="Nome"
          />
        </div>

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
          <button
            type="submit"
            className="btn text-light rounded-4 px-4 py-2 fw-bold"
            style={{
              boxShadow: '4px 4px 0px rgba(0,0,0,1)',
              backgroundColor: '#FD0A0A',
            }}
          >
            Criar
          </button>
        </div>

        <div className="text-center">
          <span className="fw-bold">Já tem uma conta?</span>
          <button
            type="button"
            onClick={onRedirect}
            className="btn text-danger rounded-4 fw-bold ms-1 p-0"
          >
            Clique aqui
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForms;