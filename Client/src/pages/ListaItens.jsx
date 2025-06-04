import Cardegorias from "../components/Cardegorias/Cardegoria";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const ListaItens = () => {
  return (
    <>
      <Header />
      <div className="ListaI col-12">
        <div className=" container ">
          <div className="d-flex align-items-center pt-5 pb-5">
            <div className="d-flex flex-column ps-3">
              <h2 className=" fw-bold">CategoriaName</h2>
              <p>MiniDescrição</p>
            </div>
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
