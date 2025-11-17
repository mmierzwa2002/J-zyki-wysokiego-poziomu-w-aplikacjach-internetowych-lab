import React from "react";
import "./App.css";

import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ćwiczenie 1: ClickCounter</h2>
        <ClickCounter />
        <h2>Ćwiczenie 2: PrimeCalculator</h2>
        <PrimeCalculator />
        <h2>Ćwiczenie 3: FormReducer</h2>
        <FormReducer />
      </header>
    </div>
  );
}

export default App;
