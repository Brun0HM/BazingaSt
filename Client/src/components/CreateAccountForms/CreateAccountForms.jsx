import React, { useState } from 'react';

const CreateAccountForms = ({ onRedirect }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

  
    if (!nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (nome.trim().length < 3) {
      newErrors.nome = 'Nome deve ter no mínimo 3 caracteres';
    }

 
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

  
    if (!senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      newErrors.senha = 'Senha deve ter no mínimo 6 caracteres';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Conta criada');
    }
  };

  return (
    <div className="w-100 px-4 px-md-5 py-5" style={{ maxWidth: '600px' }}>
      <h1 className="fw-bold mb-4 display-5 text-center">Crie uma conta</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-4 border-0 px-4 py-2"
            style={{
              boxShadow: '4px 4px 0px rgba(0,0,0,1)',
              backgroundColor: '#EBEBEB',
            }}
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {errors.nome && (
            <div className="text-danger mt-1 fw-semibold ms-3 h6">{errors.nome}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type=""
            className="form-control rounded-4 border-0 px-4 py-2"
            style={{
              boxShadow: '4px 4px 0px rgba(0,0,0,1)',
              backgroundColor: '#EBEBEB',
            }}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="text-danger mt-1 fw-semibold ms-3 h6">{errors.email}</div>
          )}
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-4 gap-2">
         <div className="w-100">
           <input
            type="password"
            className="form-control rounded-4 border-0 px-4 py-2"
            style={{
                boxShadow: '4px 4px 0px rgba(0,0,0,1)',
                backgroundColor: '#EBEBEB',
            }}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
    {errors.senha && (
      <div className="text-danger mt-1 fw-semibold ms-3 h6">
        {errors.senha}
      </div>
    )}
  </div>

           <button
            type="submit"
            className="btn text-light rounded-4 px-4 py-2 fw-bold"
            style={{
          boxShadow: '4px 4px 0px rgba(0,0,0,1)',
          backgroundColor: '#FD0A0A',
          alignSelf: 'flex-start', 
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
