import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/supermannn.png";
import DestaquePage from "./pages/DestaquePage";
import RegisterCard from "./components/RegisterCard/RegisterCard.jsx";
import RegisteredCards from "./components/RegisteredCards/RegisteredCards.jsx";
import Payment from "./pages/Payment.jsx";
import Footer from "./components/footer/Footer.jsx";
import LoginPage from "./pages/LoginPage";
import Logar from "./pages/Logar";
import Login from "./components/Login/Login.jsx";
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
