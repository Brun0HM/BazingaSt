import React, { useEffect, useState } from "react";
import Cardegoria from "../components/Cardegorias/Cardegoria";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

const Figures = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "https://www.bazingastore.somee.com/api/Produtos",
          {
            method: "GET",
            headers: { accept: "text/plain" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setProdutos(data);
        } else {
          setErro("Erro ao buscar produtos.");
        }
      } catch (error) {
        setErro("Erro de conexão com a API.");
      }
    };
    fetchProdutos();
  }, []);

  return (
    <>
      <Header />
      <div className="ListaI col-12 tamanho">
        <div className="container">
          <div className="d-flex align-items-center pt-5 pb-5">
            <div className="d-flex flex-column ps-3">
              <h2 className="fw-bold">Figures</h2>
              <p className="w-75">
                Dê vida à sua coleção com nossos figures incríveis! Dos heróis
                lendários aos vilões icônicos, cada peça é um tributo à sua
                paixão por games, animes, filmes e séries
              </p>
            </div>
          </div>
          {erro && <div className="alert alert-danger text-center">{erro}</div>}
          <div className="d-flex flex-wrap">
            {produtos
              .filter(
                (produto) =>
                  produto.categoriaId === "01818fc5-6565-435b-abb7-b10aa23ee869"
              ) // ou produto.categoriaId === "id_da_categoria"s
              .map((produto) => (
                <Cardegoria key={produto.id} produto={produto} />
              ))}
            {produtos.length === 0 && !erro && (
              <div className="col-12 text-center text-muted py-5">
                Nenhum produto encontrado.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Figures;
