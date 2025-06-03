import Cardegorias from "../components/Cardegorias/Cardegoria";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const ListaItens = () => {
  return (
    <>
      <Header />
      <div className="ListaI col-12">
        <div className=" ">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className=" pt-3 fw-bold text-light CategoriaName">
              CategoriaName
            </h1>
          </div>
          <div className="d-flex flex-wrap ">
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
