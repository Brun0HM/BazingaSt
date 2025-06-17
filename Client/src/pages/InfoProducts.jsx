import React, { use } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import ProdutoInfo from "../components/ProdutoInfo/ProdutoInfo";
import Cardegorias from "../components/Cardegorias/Cardegoria";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const InfoProducts = () => {
  const { id } = useParams();
  const [infoProduto, setInfoProduto] = useState([]);
  const [erro, setErro] = useState("");
  const [produtos, setProdutos] = useState([]);

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

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(
          `http://localhost:5286/api/Produtos/382bb5d4-75a0-4b4d-b466-1eb28aa84c61`,
          {
            method: "GET",
            headers: { accept: "text/plain" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setInfoProduto(data);
          console.log(infoProduto);
        } else {
          setErro("Erro ao buscar produto.");
        }
      } catch (error) {
        setErro("Erro de conexão com a API.");
      }
    };
    fetchProduto();
  }, []);

  return (
    <>
      <Header />
      <div className="pt-0 pt-md-5 pb-5 bg-white d-flex flex-column justify-content-center">
        <div className=" mb-5 mb-5 pb-5 col-10 container">
          <ProdutoInfo produto={infoProduto} />
        </div>

        <div className=" d-flex flex-column align-items-center">
          <h2 className="fw-bold mt-g-5">Produtos Relacionados</h2>
          <div className="container">
            <div className="d-flex flex-wrap">
              {produtos.map((produto) => (
                <Cardegorias key={produto.produtoId} produto={produto} />
              ))}
              {produtos.length === 0 && !erro && (
                <div className="col-12 text-center text-muted py-5">
                  Nenhum produto encontrado.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoProducts;
