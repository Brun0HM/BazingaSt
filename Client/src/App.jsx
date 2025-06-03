import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import SuperMan from "./assets/supermannn.png";


const App = () => {
  return (
    <div>
      <Home superMan={SuperMan} />
    </div>
  );
};

export default App;
