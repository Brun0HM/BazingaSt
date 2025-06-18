import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/Supermannn.png";
import Teste from "./pages/Teste.jsx";

const App = () => {
  return (
    <div>
      {/* <Teste /> */}
      <Home superMan={SuperMan} />
    </div>
  );
};

export default App;
