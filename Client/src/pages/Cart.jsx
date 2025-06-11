import React, { useEffect, useState } from "react";
import Checkout from "../components/Checkout/Checkout";
import ItemCarrinho from "../components/ItemCarrinho/ItemCarrinho";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCarrinho = async () => {
    setLoading(true);
    setErro("");
    try {
      const response = await fetch(
        `https://www.bazingastore.somee.com/api/CarrinhoItems/${idCarrinho}`,
        {
          method: "GET",
          headers: { accept: "text/plain" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setItensCarrinho(data);
        console.log(data);
      } else {
        setErro("Erro ao buscar itens do carrinho.");
      }
    } catch (error) {
      setErro("Erro de conexão com a API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarrinho();
  }, []);

  const removerItem = () => {
    fetchCarrinho();
  };

  return (
    <>
      <Header />
      <div className="pt-0 pt-md-3 bg-white Cart pb-5 tamanho">
        <div className="container pt-5">
          <div className="justify-content-center justify-content-md-between d-flex flex-column flex-md-row">
            <div className="col-12 col-md-8 mb-4">
              <h1 className="TitleC fw-bold">Carrinho</h1>
              <div className="d-flex flex-column mb-5">
                {erro && (
                  <div className="alert alert-danger text-center">{erro}</div>
                )}

                {itensCarrinho.length === 0 ? (
                  <div className="text-center py-5 fs-3 text-muted">
                    Carrinho vazio
                  </div>
                ) : (
                  itensCarrinho.map((item, idx) => (
                    <div key={item.carrinhoItemId || item.id || idx}>
                      <ItemCarrinho
                        item={item}
                        onRemover={removerItem}
                        onAlterarQuantidade={fetchCarrinho}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Checkout
                caminho="/pagar"
                itensCarrinho={itensCarrinho}
                loading={loading}
                erro={erro}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
