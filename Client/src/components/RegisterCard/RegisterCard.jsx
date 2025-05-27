import React, { useState } from "react";

export default function RegisterCard({ setHasPaymentMethod, updateCards }) {
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const validate = () => {
    const newErrors = {};

    // Validação do nome completo
    if (fullName.trim().length < 3 || fullName.trim().length > 50) {
      newErrors.fullName = "Name must be between 3 and 50 characters.";
    }

    // Validação do número do cartão
    if (cardNumber.trim().length !== 16) {
      newErrors.cardNumber = "Card number must be exactly 16 digits.";
    } else if (!/^\d+$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number must contain only digits.";
    }

    // Validação da data de expiração
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      newErrors.expiry = "Expiration date must be in MM/YY format.";
    }

    // Validação do CVV
    if (cvv.trim().length !== 3) {
      newErrors.cvv = "CVV must be exactly 3 digits.";
    } else if (!/^\d+$/.test(cvv)) {
      newErrors.cvv = "CVV must contain only digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleSaveCard = () => {
    if (validate()) {
      const newCard = {
        fullName: fullName.trim(),
        cardNumber: cardNumber.trim(),
        expiry: expiry.trim(),
        cvv: cvv.trim(),
      };

      // Salva o cartão no localStorage
      const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
      savedCards.push(newCard);
      localStorage.setItem("cards", JSON.stringify(savedCards));

      // Atualiza os cartões no componente pai
      updateCards(savedCards);

      console.log("Card saved", newCard);
      setFullName("");
      setCardNumber("");
      setExpiry("");
      setCvv("");
      setErrors({});
      setHasPaymentMethod(true); // Atualiza o estado no componente pai
    } else {
      setHasPaymentMethod(false); // Define como inválido se houver erros
    }
  };

  return (
    <div className="">
      <div className="conteudo bg-white border-0 rounded-4 p-4">
        <h2 className="fw-semibold text-center mb-4">Register Card</h2>
        <div className="mb-3">
          <label className="form-label">Card holder full name</label>
          <input
            className="form-control inputCredit border-0 "
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            maxLength={50}
          />
          {errors.fullName && (
            <small className="text-danger">{errors.fullName}</small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            className="form-control inputCredit border-0"
            type="text"
            placeholder="0000 0000 0000 0000"
            maxLength={16}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.cardNumber && (
            <small className="text-danger">{errors.cardNumber}</small>
          )}
        </div>
        <div className="w-100 d-flex gap-2">
          <div className="mb-3 w-50">
            <label className="form-label">Expiry Date (MM/YY)</label>
            <input
              className="form-control inputCredit border-0 "
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
            {errors.expiry && (
              <small className="text-danger">{errors.expiry}</small>
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">CVV</label>
            <input
              className="form-control inputCredit border-0 "
              type="text"
              placeholder="123"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
          </div>
        </div>
        <button
          className="btn btnCor  w-100 mt-3 p-3 fw-bold fs-5"
          onClick={handleSaveCard}
        >
          Save Card
        </button>
      </div>
    </div>
  );
}
