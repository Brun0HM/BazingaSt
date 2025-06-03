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
    <div className="card2 border-3 text-decoration-none ">
      <div>
        <img
          onClick={handleClick}
          className="rounded-top-4"
          src="https://placehold.co/285x250"
          alt=""
        />
      </div>
      <div className="m-2">
        <div className="m-1 mt-2"></div>
        <div className="d-flex justify-content-between align-items-center">
          <div
            onClick={handleClick}
            className="d-flex justify-content-between align-items-center m-1"
          >
            <div>
              <div className="d-flex gap-1">
                <i className="bi bi-star-fill "></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h4 className="fw-bold m-0 fs-5">Nome</h4>
              <p className="m-0">R$00.00</p>
            </div>
            <a className="text-decoration-none " href=""></a>
          </div>
          <div className="me-1">
            <button className="btn" onClick={adicionarAoCarrinho}>
              <i className="bi bi-cart-plus-fill fs-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardegorias;
