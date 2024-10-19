// src/App.js
import React from "react";
import CreateRule from "./components/CreateRule";
import CombineRules from "./components/CombineRules";
import EvaluateRule from "./components/EvaluateRule";
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Rule Engine with AST</h1>
      <CreateRule />
      <CombineRules />
      <EvaluateRule />
    </div>
  );
};

export default App;
