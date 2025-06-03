import { useNavigate } from "react-router";

const Cardegorias = ({ id, nome, preco, imagem }) => {
  const adicionarAoCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const index = carrinho.findIndex((item) => item.id === id);

    if (index >= 0) {
      carrinho[index].quantidade += 1;
    } else {
      carrinho.push({ id, nome, preco, imagem, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  };
  const navigate = useNavigate();
  const handleClick = () => navigate("/info");
  return (
    <div className=" border-3 text-decoration-none p-4 col-3">
      <div className="bg-white d-flex flex-column col-12 p-4 pt-3 rounded-4 card2">
        <img
          onClick={handleClick}
          className="mb-4 rounded-3"
          src="https://placehold.co/300x200"
          alt=""
        />
        <div className="col-12">
          <span className="fs-6">T I P O</span>
          <h3 className="fw-bold mt-2 mb-2">NomeProduto</h3>
          <div className="d-flex gap-1 mb-2 fs-6 ">
            <i className="bi bi-star-fill"></i>{" "}
            <i className="bi bi-star-fill"></i>{" "}
            <i className="bi bi-star-fill"></i>{" "}
            <i className="bi bi-star-fill"></i>{" "}
            <i className="bi bi-star-fill"></i>
            <p className="m-0">(5.0)</p>
          </div>
          <h5 className="fw-bold mb-3">R$ 00,00</h5>
          <button
            className="btn btn-dark w-100 botao"
            onClick={adicionarAoCarrinho}
          >
            {" "}
            <i className="bi bi-cart-plus-fill"></i> Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardegorias;
