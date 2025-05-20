import React from "react";
import Cardegoria from "./components/Cardegorias/Cardegoria";
import "./App.css";
import ListaItens from "./pages/ListaItens";
import ItemCarrinho from "./components/ItemCarrinho";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/SUPERMAN.png";

const App = () => {
  return (
    <div>
      <Home superMan={SuperMan} />
    </div>
  );
};

export default App;
