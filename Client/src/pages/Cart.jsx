import React, { useState, useEffect } from "react";
import ItemCarrinho from "../components/ItemCarrinho/ItemCarrinho";
import Checkout from "../components/Checkout/Checkout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// Função utilitária para buscar do localStorage
const getCarrinhoStorage = () => {
  const data = localStorage.getItem("carrinho");
  return data ? JSON.parse(data) : [];
};

const Cart = () => {
  const [itensCarrinho, setItensCarrinho] = useState(getCarrinhoStorage());

  // Atualiza o localStorage sempre que itensCarrinho mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itensCarrinho));
  }, [itensCarrinho]);

  // Exemplo de função para remover item
  const removerItem = (id) => {
    setItensCarrinho(itensCarrinho.filter((item) => item.id !== id));
  };

  // Exemplo de função para alterar quantidade
  const alterarQuantidade = (id, quantidade) => {
    setItensCarrinho(
      itensCarrinho.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  return (
    <>
      <Header />
      <div className="pt-0 pt-md-3 bg-white Cart pb-5">
        <div className="container pt-5">
          <div className="justify-content-center justify-content-md-between d-flex flex-column flex-md-row">
            <div className="col-12 col-md-8 mb-4">
              <h1 className="TitleC fw-bold">Carrinho</h1>
              <div className="d-flex flex-column mb-5">
                {itensCarrinho.length === 0 ? (
                  <div className="text-center py-5 fs-3 text-muted">
                    Carrinho vazio
                  </div>
                ) : (
                  itensCarrinho.map((item) => (
                    <ItemCarrinho
                      key={item.id}
                      item={item}
                      onRemover={removerItem}
                      onAlterarQuantidade={alterarQuantidade}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Checkout caminho="/pagar" />
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default Cart;
