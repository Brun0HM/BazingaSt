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
import SuperMan from "./assets/SUPERMAN.png";
import DestaquePage from "./pages/DestaquePage";
import Footer from "./components/footer/Footer.jsx";
import LoginPage from "./pages/LoginPage";
import Logar from "./pages/Logar";
import Login from "./components/Login/Login.jsx";

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
