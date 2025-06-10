import React from 'react';
import { useNavigate } from 'react-router';
import CreateAccountForms from '../components/CreateAccountForms/CreateAccountForms';

const CreateAccount = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/registrar');
  };

  return (
    <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
      <div className="row g-0 min-vh-100">
        {/* Left showcase - hidden on mobile */}
        <div
          className="col-md-6 d-none d-md-flex text-center justify-content-center align-items-center flex-column"
          style={{ backgroundColor: '#F6CC14' }}
        >
          <h1
            className="text-light fw-bold display-4 mb-4"
            style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}
          >
            A sua loja geek<br />
            de confiança!
          </h1>
          <img
            src="https://i.imgur.com/1jCxsKM.png"
            alt="sonic the hedgehog"
            className="img-fluid"
          />
        </div>

        {/* Right form section */}
        <div className="col-12 col-md-6 bg-light d-flex flex-column justify-content-center align-items-center min-vh-100">
          <CreateAccountForms onRedirect={handleRedirect} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
