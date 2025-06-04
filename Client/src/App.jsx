import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/supermannn.png";
import ProdutoInfo from "./components/ProdutoInfo/ProdutoInfo.jsx"



const App = () => {
  return (
    <div className="">
      <Home superMan={SuperMan} />
    </div>
  );
};

export default App;
