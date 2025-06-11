import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/Supermannn.png";

const App = () => {
  return (
    <div>
      <Home superMan={SuperMan} />
    </div>
  );
};

export default App;
