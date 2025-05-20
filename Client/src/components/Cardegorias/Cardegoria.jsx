const Cardegorias = () => {
  return (
    <div className="card2 border-3 text-decoration-none ">
      <div>
        <img
          className="rounded-top-4"
          src="https://placehold.co/265x230"
          alt=""
        />
      </div>
      <div className="m-2">
        <div className="m-1 mt-2"></div>
        <div className="d-flex justify-content-between align-items-center m-1">
          <div>
            <div className="d-flex gap-1">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h3 className="fw-bold m-0">Nome</h3>
            <p className="m-0">R$00.00</p>
          </div>
          <a className="text-decoration-none " href=""></a>
        </div>
      </div>
    </div>
  );
};

export default Cardegorias;
