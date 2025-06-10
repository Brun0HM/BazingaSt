import "./App.css";
import React from "react";
import Cardegoria from "./components/Cardegorias/Cardegoria";
import ListaItens from "./pages/ListaItens";
import Categorias from "./pages/Categorias";
import Header from "./components/header/Header.jsx";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./pages/Cart";
import Config from "./pages/Config.jsx";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/supermannn.png";
import DestaquePage from "./pages/DestaquePage";
import RegisterCard from "./components/RegisterCard/RegisterCard.jsx";
import RegisteredCards from "./components/RegisteredCards/RegisteredCards.jsx";
import Payment from "./pages/Payment.jsx";
import Footer from "./components/Footer.jsx";
import Logar from "./pages/Logar";
import CreateAccount from "./pages/CreateAccount";
import MainDashBoard from "./pages/MainDashBoard.jsx";
import DBProdutos from "./pages/DBProdutos.jsx";


const App = () => {
  return (
    <div>
    <DBProdutos />
      <Home superMan={SuperMan} />
    </div>
  );
};

export default App;
