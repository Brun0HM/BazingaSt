import Cardegorias from "../components/Cardegorias/Cardegoria";
import Footer from "../components/Footer.jsx";
import Header from "../components/header/Header";

const ListaItens = () => {
  return (
    <>
      <Header />
      <div className="ListaI">
        <div className=" ListaI d-flex align-items-center justify-content-center flex-column">
          <div>
            <h1 className=" ms-0 ms-md-5 mb-5 pt-3 fw-bold text-light CategoriaName">
              CategoriaName
            </h1>
          </div>
          <div className="d-flex flex-wrap ps-5 ms-3 gap-3 pb-5 ">
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
            <Cardegorias />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListaItens;
