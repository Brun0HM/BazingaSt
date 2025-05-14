import Cardegorias from "../components/Cardegorias/Cardegoria";

const ListaItens = () => {
  return (
    <div className="ListaI">
      <div className=" ListaI container align-items-center justify-content-center flex-column">
        <h1 className=" ms-5 mb-5 pt-3 fw-bold text-light CategoriaName">
          CategoriaName
        </h1>
        <div className="d-flex flex-wrap gap-3 pb-5">
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
        </div>
      </div>
    </div>
  );
};

export default ListaItens;
