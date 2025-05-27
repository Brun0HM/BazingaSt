import React from "react";

export default function RegisteredCards({ cards, setCards, setSelectedCard }) {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const maskCardNumber = (cardNumber) => {
    // Verifica se cardNumber é válido antes de aplicar o slice
    if (!cardNumber || typeof cardNumber !== "string") {
      return "Invalid Card Number";
    }
    return "**** **** **** " + cardNumber.slice(-4);
  };

  const handleSelect = (i) => {
    setSelectedIndex(i);
    setSelectedCard(cards[i]); // Define o cartão selecionado no componente pai
  };

  const handleDelete = (i) => {
    const updatedCards = cards.filter((_, idx) => idx !== i);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards)); // Atualiza o localStorage
    if (selectedIndex === i) {
      setSelectedIndex(null);
      setSelectedCard(null); // Remove o cartão selecionado se ele for excluído
    }
  };

  return (
    <div className="">
      <div className="conteudo bg-white border-0 rounded-4 pt-4 pb-4">
        <h5 className="text-center mb-3">Registered Cards</h5>
        {cards.length === 0 ? (
          <p className="text-center">No cards saved.</p>
        ) : (
          cards.map((card, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`p-3 mb-3 rounded-3 d-flex justify-content-between align-items-center ${
                i === selectedIndex ? "border border-success" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div>
                <p className="mb-1 fw-bold">{card.fullName || "No Name"}</p>
                <p className="mb-0">{maskCardNumber(card.cardNumber)}</p>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(i);
                }}
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
